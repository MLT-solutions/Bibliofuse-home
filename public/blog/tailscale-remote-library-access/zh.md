# 使用 BiblioFuse 和 Tailscale 远程访问家中漫画库

BiblioFuse 支持在运行 iOS 17 或更高版本的 iPhone 和 iPad 上读取 CBZ、CBR、EPUB、PDF、ZIP、RAR 和 TXT 格式文件。其 Mac Home Library 功能可让您通过本地 Wi-Fi 网络将 Mac 上的完整漫画库串流到 iPhone，无需复制文件。结合 Tailscale，您可以将同样的串流连接扩展至互联网，从世界任何地方访问您的家庭漫画库——这正是 BiblioFuse 与 Tailscale 远程访问的核心价值。

您出门时，家里的 Mac 上存有 2 TB 的漫画。您的 iPhone 只有 128 GB 存储空间——远远不够存放所有内容。出行途中，您希望读取这些漫画，却不想把文件上传到云端，也不想为额外的同步服务付费。本文将介绍如何通过 [BiblioFuse](/zh/) 和 Tailscale 免费计划实现这一目标。

## 什么是 BiblioFuse 与 Tailscale 的远程漫画库访问？

BiblioFuse 的 Mac Home Library 功能将您的 Mac 变成漫画收藏的串流服务器。当 iPhone 和 Mac 位于同一 Wi-Fi 网络时，您可以在 iPhone 的 BiblioFuse 中直接浏览并打开 Mac 上的文件——无需复制、无需同步、不占用手机本地存储。

局限在于"同一网络"。一旦离家，连接就会中断——您的 Mac 位于家用路由器后方，iPhone 无法直接访问它。

Tailscale 通过在您的设备之间建立加密的点对点网状网络来解决这一问题。无论 iPhone 和 Mac 物理位置在哪里，它们都出现在同一虚拟网络中。对于 BiblioFuse 而言，这意味着 Mac Home Library 连接在互联网上的工作方式与在家中 Wi-Fi 上完全相同。

## 为什么 BiblioFuse 搭配 Tailscale 比云存储更好？

云存储是显而易见的替代方案——将所有内容同步到 iCloud Drive 或 Google Drive，随时随地访问。但对于大型漫画库，云同步存在实际局限：

- **存储费用。** 2 TB iCloud 每月需要 68 元人民币。Tailscale 免费计划支持 100 台设备，无存储费用。
- **上传时间。** 通过家庭网络将 2 TB 上传到任何云服务需要数天时间。使用 Tailscale + BiblioFuse，您直接从 Mac 串流——无需上传。
- **隐私保护。** 文件永远不会离开您的网络。Tailscale 以点对点方式路由流量；其中继服务器只处理连接协商，不涉及您的文件内容。
- **阅读体验。** 通过 [BiblioFuse](/zh/) Mac Home Library 串流速度很快——点击即加载页面，与本地存储一样。云同步文件需要完整下载后才能打开。

## 第一步——在 BiblioFuse 中设置 Mac Home Library

BiblioFuse 的 Mac Home Library 是一项通过本地网络将 Mac 漫画文件夹提供给 iPhone 应用的功能。

1. 在 iPhone 和 Mac 上分别安装 **BiblioFuse**（从各平台的 App Store 下载）
2. 在 Mac 上打开 BiblioFuse，前往 **设置 → Mac Home Library**
3. 点击 **启用**——Mac 开始在本地端口上提供您的库
4. 在 iPhone 上打开 BiblioFuse，前往 **书库 → 添加来源 → Mac Home Library**
5. 您的 Mac 应自动出现在本地网络中，点击它即可连接

验证是否正常工作：从 iPhone 浏览 Mac 上的某个文件夹并打开一个 CBZ 文件。页面应在一两秒内加载完成。确认本地 Wi-Fi 下正常工作后，即可添加 Tailscale。

## 第二步——安装和配置 Tailscale

Tailscale 是基于 WireGuard 构建的 VPN。免费计划支持最多 100 台设备，完全满足此处的需求。

1. 前往 **tailscale.com** 创建免费账户
2. 在 Mac 上安装 **Tailscale 应用**（可通过 App Store 或 tailscale.com/download 获取）
3. 在 iPhone 上安装 **Tailscale 应用**（从 App Store 下载）
4. 在两台设备上使用同一账户登录 Tailscale
5. 在 Mac 的 Tailscale 应用中，确认显示 Tailscale IP 地址（通常为 `100.x.x.x`）
6. 在 iPhone 上打开 Tailscale 应用，确认 Mac 出现在设备列表中并显示绿色状态

现在两台设备都在您的私人 Tailscale 网络中，无论物理位置如何都可以互相通信。

## 第三步——通过 Tailscale 将 BiblioFuse 连接到 Mac

Tailscale 运行后，BiblioFuse 可以通过 Tailscale IP 地址访问 Mac 的 Home Library。

1. 在 Mac 上记录 Tailscale IP 地址（显示在 Tailscale 菜单栏应用中，例如 `100.64.0.2`）
2. 在 iPhone 上打开 BiblioFuse，前往 **书库 → 添加来源 → Mac Home Library**
3. 如果 Mac 未自动出现（在不同网络下不会自动出现），点击 **手动输入地址**
4. 输入 Tailscale IP 地址和 BiblioFuse 使用的端口（默认：`8080`）
5. 点击 **连接**

您的 Mac 书库现在出现在 iPhone 的 BiblioFuse 中。打开任意文件夹、点击任意卷，内容会通过 Tailscale 串流，效果与本地 Wi-Fi 完全相同。

## 第四步——离家后保持连接

要使远程访问正常工作，您的 Mac 需要：

- **保持唤醒状态**——在 **系统设置 → 电池 → 选项 → 显示器关闭时防止自动进入睡眠** 中禁用睡眠（适用于台式 Mac），或设置定时计划
- **保持互联网连接**——家中路由器在您出行期间持续连接
- **运行 Tailscale**——在 Tailscale 偏好设置中设置登录时自动启动

对于 MacBook，"防止睡眠"选项需要连接电源适配器。如果家中的 Mac 是未插电的 MacBook，可设置具体计划：例如早上 06:00 唤醒，晚上 23:00 睡眠。

## 实际使用场景

**旅行中阅读长篇系列。** 您收藏的完整《海贼王》（107 卷，压缩为 CBZ 约 15 GB）存放在家中的 Mac 上。在没有 Wi-Fi 的飞机上您无法访问——但在旅途中有任何互联网连接（酒店 Wi-Fi、移动数据）时，[BiblioFuse](/zh/) 会按需串流每一页。您不需要下载 15 GB，而是在阅读时逐页下载。

**在慢速连接下阅读。** Tailscale 使用 WireGuard，在移动数据上表现高效。通过 BiblioFuse 工具选项卡压缩的 CBZ 页面（WebP 编码）通常每页 200–500 KB。在 10–20 Mbps 的 4G 速度下，每页加载时间不到 0.1 秒。即使在 2 Mbps 的拥挤酒店 Wi-Fi 下，页面也能在一秒内加载完成。

**管理家庭书库。** 将配偶的 iPhone 或平板添加到同一 Tailscale 账户（免费计划支持最多 100 台设备）。家庭所有成员都可以从同一台 Mac 的书库串流，无需分别订阅云服务。

## 故障排除

**启用 Tailscale 后 Mac 未出现在 BiblioFuse 中。** 使用手动 IP 输入方式，填入 Mac 的 Tailscale IP 地址。自动发现依赖 mDNS 广播，无法跨越网络边界。

**移动数据下页面加载缓慢。** 使用 BiblioFuse 工具选项卡或 [BiblioFuse 网页工具](/zh/webapp/) 压缩 CBZ 档案以减小页面大小。质量 82 的 WebP 编码 CBZ 文件通常比基于 PNG 的档案小 75–88%，可显著加快远程串流速度。

**Mac 进入了睡眠状态。** 在 Mac 系统设置中启用"显示器关闭时防止自动进入睡眠"，或在终端运行 `caffeinate -i &` 保持唤醒状态。

**Tailscale 连接断开。** Tailscale 会在网络条件变化时自动重新连接。如果连接失败，在 iPhone 上关闭并重新打开 BiblioFuse 以重试连接。Tailscale 的 DERP 中继服务器负责处理无法直接进行点对点路由的情况。

## 常见问题解答

**不使用 Tailscale 能否远程访问家中的漫画库？**
可以，但其他方式更复杂或隐私性更低。在路由器上进行端口转发会将您的 Mac 直接暴露在互联网中，存在安全风险。云同步（iCloud、Google Drive）需要先上传整个书库。Tailscale 提供加密、零配置的远程访问，无需暴露任何端口。

**此用途下 Tailscale 需要付费吗？**
Tailscale 的免费计划支持单个个人账户最多 100 台设备，无存储费用，无带宽限制。对于在自己设备间共享的个人漫画库，免费计划可以无限期满足需求。

**通过移动数据串流漫画的速度如何？**
使用压缩 CBZ 文件（WebP 页面），每页通常为 200–500 KB。在 10 Mbps 的 4G 连接下，每页加载时间不到半秒。即使在 2 Mbps 的较慢酒店 Wi-Fi 下，阅读体验也很流畅。基于 PNG 的档案（每页 2–5 MB）明显更慢，在远程串流前进行压缩收益最大。

**BiblioFuse 在 iPad 上也支持 Tailscale 吗？**
是的。BiblioFuse 支持 iPhone 和 iPad，Tailscale 也可在 iPad 上使用。设置完全相同——安装两个应用、登录 Tailscale，然后使用 Tailscale IP 地址连接到 Mac Home Library。

**使用 Tailscale 时我的漫画收藏是否保密？**
是的。Tailscale 对设备间的所有流量使用 WireGuard 加密。您的文件在加密隧道中直接在 iPhone 和 Mac 之间传输。Tailscale 的服务器负责连接协调，但从不查看您的文件内容。

**如果我不在家时 Mac 重启了怎么办？**
如果 Tailscale 设置为登录时启动，且 BiblioFuse for Mac 中的 Mac Home Library 设置为启动时运行，重启后连接将自动恢复。在各自的设置中将两个应用都设置为登录时启动，以确保连续性。
