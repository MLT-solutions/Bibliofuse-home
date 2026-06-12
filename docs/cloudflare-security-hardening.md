# Cloudflare Security Hardening

Applies to all domains on the account: `bibliofuse.com`, `lokaltools.com`, `luxebook.app`, `mlogictech.com`.

## What was applied

### Zone Settings

| Setting | Value | How |
|---|---|---|
| Security Level | `medium` | API |
| Always Use HTTPS | `on` | API |
| Browser Check | `on` | default |
| Bot Fight Mode | `on` | Dashboard manual (no API on free plan) |

### WAF Custom Rules (Security → WAF → Custom Rules)

Applied via Cloudflare API using a token with `Zone → WAF → Edit` + `Zone → Zone Settings → Edit` + `Zone → Zone → Read` permissions, scoped to all zones.

#### Rule 1 — Allow AI/GEO crawlers (skip Bot Fight Mode)
Action: **Skip → Bot Fight Mode**
```
(http.user_agent contains "GPTBot") or (http.user_agent contains "OAI-SearchBot") or (http.user_agent contains "ChatGPT-User") or (http.user_agent contains "ClaudeBot") or (http.user_agent contains "anthropic-ai") or (http.user_agent contains "PerplexityBot") or (http.user_agent contains "Applebot") or (http.user_agent contains "FacebookBot") or (http.user_agent contains "Amazonbot") or (http.user_agent contains "YouBot") or (http.user_agent contains "CCBot") or (http.user_agent contains "DuckAssistBot") or (http.user_agent contains "Google-Extended")
```

**Why**: Bot Fight Mode blocks AI crawlers (GPTBot, ClaudeBot, etc.) because they can't pass JS challenges. These crawlers are needed for GEO — being cited in ChatGPT/Claude/Perplexity answers. This rule lets them bypass Bot Fight Mode while everything else is still challenged.

#### Rule 2 — Block known bad bots
Action: **Block**
```
(http.user_agent contains "MJ12bot") or (http.user_agent contains "DotBot") or (http.user_agent contains "Bytespider") or (http.user_agent contains "PetalBot") or (http.user_agent contains "AspiegelBot") or (http.user_agent contains "Scrapy") or (http.user_agent contains "python-requests") or (http.user_agent contains "Go-http-client") or (http.user_agent contains "zgrab") or (http.user_agent contains "nikto") or (http.user_agent contains "masscan") or (http.user_agent eq "")
```

#### Rule 3 — Block attack tools and high-threat IPs
Action: **Block**
```
(http.user_agent contains "sqlmap") or (http.user_agent contains "curl/") or (http.user_agent contains "wget/") or (cf.threat_score gt 30)
```

**Note**: `cf.threat_score gt 30` uses Cloudflare's IP reputation score — IPs flagged as spam/attack sources are blocked automatically.

---

## robots.txt (bibliofuse.com only)

Updated `public/robots.txt` with explicit `Allow: /` for all major AI crawlers and `Disallow: /` for known bad bots. This is the robots.txt layer — Cloudflare WAF is the enforcement layer. Both are needed because:
- robots.txt is voluntary (well-behaved crawlers respect it)
- WAF blocks bad bots that ignore robots.txt

## llms.txt (bibliofuse.com only)

New file at `public/llms.txt` — plain-text description of the site for LLMs (site name, purpose, key URLs, content license). Emerging standard for AI discoverability, analogous to robots.txt but for LLMs.

For other domains, add `llms.txt` in their respective project's `public/` folder.

---

## Applying to a new domain (step-by-step)

### 1. Create an API token
Cloudflare Dashboard → Profile → API Tokens → Create Token → Custom Token:
- `Zone → WAF → Edit`
- `Zone → Zone Settings → Edit`
- `Zone → Zone → Read`
- Zone Resources: Include → All zones (or specific zone)

Rotate the token immediately after use: `...` menu → Roll.

### 2. Get the Zone ID
```bash
curl -s "https://api.cloudflare.com/client/v4/zones?name=yourdomain.com" \
  -H "Authorization: Bearer <TOKEN>" | python3 -c "import sys,json; print(json.load(sys.stdin)['result'][0]['id'])"
```

### 3. Apply WAF rules
```bash
ZONE="<zone-id>"
TOKEN="<api-token>"

curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/${ZONE}/rulesets/phases/http_request_firewall_custom/entrypoint" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "rules": [
      {
        "description": "Allow AI/GEO crawlers — skip Bot Fight Mode",
        "expression": "(http.user_agent contains \"GPTBot\") or (http.user_agent contains \"OAI-SearchBot\") or (http.user_agent contains \"ChatGPT-User\") or (http.user_agent contains \"ClaudeBot\") or (http.user_agent contains \"anthropic-ai\") or (http.user_agent contains \"PerplexityBot\") or (http.user_agent contains \"Applebot\") or (http.user_agent contains \"FacebookBot\") or (http.user_agent contains \"Amazonbot\") or (http.user_agent contains \"YouBot\") or (http.user_agent contains \"CCBot\") or (http.user_agent contains \"DuckAssistBot\") or (http.user_agent contains \"Google-Extended\")",
        "action": "skip",
        "action_parameters": { "products": ["bic"] },
        "enabled": true
      },
      {
        "description": "Block known bad bots",
        "expression": "(http.user_agent contains \"MJ12bot\") or (http.user_agent contains \"DotBot\") or (http.user_agent contains \"Bytespider\") or (http.user_agent contains \"PetalBot\") or (http.user_agent contains \"AspiegelBot\") or (http.user_agent contains \"Scrapy\") or (http.user_agent contains \"python-requests\") or (http.user_agent contains \"Go-http-client\") or (http.user_agent contains \"zgrab\") or (http.user_agent contains \"nikto\") or (http.user_agent contains \"masscan\") or (http.user_agent eq \"\")",
        "action": "block",
        "enabled": true
      },
      {
        "description": "Block attack tools and high-threat IPs",
        "expression": "(http.user_agent contains \"sqlmap\") or (http.user_agent contains \"curl/\") or (http.user_agent contains \"wget/\") or (cf.threat_score gt 30)",
        "action": "block",
        "enabled": true
      }
    ]
  }'
```

### 4. Set Security Level + Always HTTPS
```bash
curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/${ZONE}/settings/security_level" \
  -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" \
  -d '{"value":"medium"}'

curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/${ZONE}/settings/always_use_https" \
  -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" \
  -d '{"value":"on"}'
```

### 5. Enable Bot Fight Mode (manual)
Cloudflare Dashboard → (your domain) → Security → Bots → Bot Fight Mode → **ON**

---

## Audit results (2026-06-12)

| Domain | Plan | Security Level | Always HTTPS | Custom WAF | Bot Fight Mode |
|---|---|---|---|---|---|
| bibliofuse.com | Free | medium ✓ | on ✓ | 3 rules ✓ | on ✓ |
| lokaltools.com | Free | medium ✓ | on ✓ | 3 rules ✓ | needs manual |
| luxebook.app | Free | medium ✓ | on ✓ | 3 rules ✓ | needs manual |
| mlogictech.com | Free | medium ✓ | on ✓ | 3 rules ✓ | needs manual |

---

## Notes
- Security Insights clear within 24–72h after fixes are applied
- Cloudflare MCP OAuth token is read-only for zone settings/WAF — always use a proper API token for write operations
- `always_use_https` is important even for static sites — ensures HTTP visitors are redirected at the Cloudflare edge before hitting origin
- Bot Fight Mode cannot be toggled via API on the free plan — dashboard only
