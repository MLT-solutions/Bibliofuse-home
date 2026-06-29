import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic();

const langs = ["es","fr","nl","pt","ru","zh","ja","ko","id","ms"];
const langNames = {
  es:"Spanish",fr:"French",nl:"Dutch",pt:"Portuguese",
  ru:"Russian",zh:"Simplified Chinese",ja:"Japanese",
  ko:"Korean",id:"Indonesian",ms:"Malay"
};

const newEntries = [
  {
    q: "Can I sync my library between iPhone, iPad, Mac, and PC?",
    a: "Yes. Wi-Fi Sync transfers books, tags, ratings, keyword profiles, and folder structure between any combination of iPhone, iPad, Mac, and Windows PC. All Apple devices in the sync must be signed in to the same iCloud account — iCloud is used only for device discovery, not for storing your books. Book files travel over your local Wi-Fi and are never uploaded to any developer server. Wi-Fi Sync is a Pro feature."
  },
  {
    q: "Can I use more than one iPhone or iPad with Wi-Fi Sync?",
    a: "Yes. Multiple iPhones and iPads can all participate in the same library sync. The iOS version of GrepTag stores paths relative to the app's root folder, so the same path structure works across every iOS device signed in to the same iCloud account."
  },
  {
    q: "Should I use Mac or PC as the source of truth for my library?",
    a: "We recommend keeping one Mac or one PC as your primary library device. GrepTag's metadata tracks three separate path types — PC paths, iOS paths, and Mac paths. iOS works across multiple iPhones and iPads because it uses relative paths. Mac and PC each store absolute paths for their own device, so syncing is most reliable when there is only one Mac and one PC in your setup."
  },
  {
    q: "Can my iPhone sync new books back to my Mac or PC?",
    a: "Yes. If you add a book on iPhone inside a folder that does not yet exist on your Mac or PC, GrepTag will ask you to create the folder and add it to your library list on the receiving device before completing the sync."
  }
];

for (const lang of langs) {
  const filePath = `./src/locales/${lang}/translation.json`;
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const currentFaq = data.redesign.grepTagPage.faq;
  
  // Remove old single sync entry (index 6, old question) and replace with 4 new ones
  // Current locales have 7 entries; index 6 is the old sync question
  // We need to replace it with 4 translated entries
  
  const prompt = `Translate these 4 FAQ entries from English to ${langNames[lang]}. 
Return ONLY a JSON array of objects with "q" and "a" keys. No explanation, no markdown fences.
Keep technical terms like "iCloud", "Wi-Fi Sync", "GrepTag", "iPhone", "iPad", "Mac", "PC", "Pro" unchanged.

${JSON.stringify(newEntries, null, 2)}`;

  const msg = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2000,
    messages: [{ role: "user", content: prompt }]
  });

  let translated;
  try {
    translated = JSON.parse(msg.content[0].text.trim());
  } catch(e) {
    // strip markdown fences if present
    const text = msg.content[0].text.replace(/```json?\n?/g,"").replace(/```/g,"").trim();
    translated = JSON.parse(text);
  }

  // Replace index 6 (old sync question) with the 4 new translated entries
  const newFaq = [...currentFaq.slice(0, 6), ...translated];
  data.redesign.grepTagPage.faq = newFaq;
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`✅ ${lang}: ${newFaq.length} FAQ entries`);
}
