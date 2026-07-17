// One-off: update redesign.contentcuePage EN copy for the 2026-07 ContentCue page
// redesign (visionOS + CarPlay launch, blue rebrand, free-tier limits fix).
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'locales', 'en', 'translation.json');
const en = JSON.parse(fs.readFileSync(file, 'utf8'));
const cc = en.redesign.contentcuePage;

// --- SEO ---
cc.seo.title = 'ContentCue — Read & Listen on iPhone, iPad & Apple Vision Pro';
cc.seo.desc = 'ContentCue is an all-in-one read-and-listen app for iPhone, iPad, and Apple Vision Pro: a position-restore reading browser, RSS reader with audio briefings, podcast player with offline downloads, website text-to-speech, CarPlay, and iCloud sync.';

// --- Hero ---
cc.hero.badge = 'Now on Apple Vision Pro';
cc.hero.desc = 'ContentCue is an all-in-one app: browse with automatic position restore, hear your RSS feeds as an audio briefing, stream or download podcasts, and have any web page read aloud — on iPhone, iPad, Apple Vision Pro, and CarPlay. One purchase, every device, synced with iCloud.';

// --- Pain points (new section) ---
cc.pain = {
  eyebrow: 'Why ContentCue',
  title: 'Reading on the web is broken. We fixed the annoying parts.',
  desc: 'ContentCue was built around the everyday frustrations of reading and listening on your phone — without blocking ads or breaking the sites you love.',
  card1title: 'You lose your place — constantly',
  card1problem: 'A popup hijacks the page, a redirect fires, or you switch apps for a second — and now you’re scroll-hunting for the paragraph you were on.',
  card1fix: 'ContentCue auto-saves your exact position and brings you back with one tap.',
  card2title: 'Ads blend into the content',
  card2problem: 'In-body ads are designed to look like the article, so you tap them by accident and lose your flow.',
  card2fix: 'Colored outlines make every ad instantly recognisable — nothing is blocked, everything is clear.',
  card3title: 'Your content lives in three different apps',
  card3problem: 'A browser for articles, a separate RSS app, another app for podcasts — three inboxes, three players, three places to check.',
  card3fix: 'One app with one audio player for web pages, RSS feeds, and podcasts.',
  card4title: 'There’s never time to actually read',
  card4problem: 'Your reading list grows on the commute, at the gym, in the car — exactly when your eyes are busy.',
  card4fix: 'Turn any page or unread feed into audio and listen screen-locked, on CarPlay, or on Vision Pro.',
};

// --- RSS: fix "unlimited" claim (free tier saves up to 3 feeds) ---
cc.rss.bullet1 = 'Follow your favourite feeds and pin the channels you read most';

// --- Vision Pro showcase (new section) ---
cc.vision = {
  eyebrow: 'Native Apple Vision Pro app',
  title: 'Your reading room, the size of your living room.',
  desc: 'ContentCue on Vision Pro is a true native visionOS app — not an iPad port. Browse, read, and listen in a floating window with gaze-friendly controls, then shrink playback down to a small corner player while you do something else.',
  bullet1: 'Reading mode with pinch-to-page — a quick pinch anywhere pages down, no controls to aim at',
  bullet2: 'RSS and podcasts in spatial view, with the same feeds and shows synced from your iPhone',
  bullet3: 'Shrink playback to a compact corner window and keep listening while you work',
  alt1: 'ContentCue browser window on Apple Vision Pro showing an article with the audio player',
  alt2: 'ContentCue RSS feeds in a spatial window on Apple Vision Pro',
  alt3: 'ContentCue podcast library in a spatial window on Apple Vision Pro',
};

// --- CarPlay (new section) ---
cc.carplay = {
  eyebrow: 'CarPlay',
  title: 'Your feeds and shows, on the car display.',
  desc: 'Connect your iPhone and ContentCue appears on CarPlay with your saved podcasts and RSS feeds. Start an episode or an article briefing from the car screen, check what’s up next in the queue, and change playback speed — all in the native CarPlay interface.',
  bullet1: 'Browse your saved podcasts and RSS feeds from the car display',
  bullet2: 'Queue view shows what’s playing now and up next',
  bullet3: 'Adjust playback speed without picking up your phone',
  alt: 'ContentCue on CarPlay showing the queue, podcasts, and RSS tabs',
};

// --- iCloud/Siri: include Vision Pro ---
cc.icloudSiri.title = 'Everything follows you across iPhone, iPad, and Vision Pro.';

// --- Pricing: free tier now includes RSS/podcasts with 3/3/3 limits ---
cc.pricing.title = 'Free every day. Premium removes the limits.';
cc.pricing.featTts = 'Website TTS & audio briefings';
cc.pricing.featPlatforms = 'Native Vision Pro & CarPlay';
cc.pricing.featRss = 'Saved RSS feeds';
cc.pricing.featPods = 'Saved podcast shows';
delete cc.pricing.feat5;
delete cc.pricing.feat6;

// --- FAQ: update sync + premium items, add Vision Pro + CarPlay items ---
const faq = cc.faq;
// index 6: sync question — now covers Vision Pro
faq[6] = {
  q: 'Does ContentCue sync across my iPhone, iPad, and Vision Pro?',
  a: 'Yes, with Premium. Bookmarks, RSS feeds, and podcast subscriptions sync automatically via iCloud across all your Apple devices, including Apple Vision Pro.',
};
// index 8 (old premium item) is replaced further down; first insert the two new items after sync
const visionFaq = {
  q: 'Does ContentCue work on Apple Vision Pro?',
  a: 'Yes. ContentCue has a native visionOS app — browse in a floating window, page through articles with a quick pinch, and shrink playback to a compact corner player. It’s a universal purchase: buy once and use it on iPhone, iPad, and Vision Pro, with Premium shared across all three.',
};
const carplayFaq = {
  q: 'Does ContentCue support CarPlay?',
  a: 'Yes. ContentCue appears on your car’s CarPlay display with your saved podcasts and RSS feeds. You can start playback, see the current queue, and change playback speed directly from the car screen.',
};
const premiumFaq = {
  q: 'What does ContentCue Premium include?',
  a: 'Free includes the full reading browser plus up to 3 bookmarks, 3 RSS feeds, and 3 saved podcast shows. Premium removes those limits — unlimited bookmarks, feeds, and shows — and adds iCloud Sync across devices, Siri Shortcuts, custom ad outline colours, and adjustable auto-scroll speed. It’s available as a yearly subscription with a 7-day free trial, or a one-time lifetime purchase.',
};
// rebuild: 0-5 unchanged, 6 sync (updated), 7 vision, 8 carplay, 9 privacy (old 7), 10 premium (updated)
cc.faq = [...faq.slice(0, 7), visionFaq, carplayFaq, faq[7], premiumFaq];

fs.writeFileSync(file, JSON.stringify(en, null, 2) + '\n');
console.log('EN contentcuePage updated. FAQ items:', cc.faq.length);
