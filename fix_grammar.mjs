import fs from 'fs';
import path from 'path';

const dirs = [
  'ai-chat-assistant', 'ai-writing-assistant', 'autodeploy-pipeline',
  'bamboo-wing', 'bisontech', 'gamotion', 'gittime', 'photography-studio',
  'serp-live', 'statustrack', 'traveller', 'video-transcoder'
];

const basePath = 'c:/Users/Shubh/OneDrive/Desktop/new porfolio/src/app';

for (const dir of dirs) {
  const file = path.join(basePath, dir, 'page.tsx');
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf8');

  // Fix paragraph text that starts after spaces/newlines
  content = content.replace(/>(\s*)([a-z])/g, (match, p1, p2) => {
    return `>${p1}${p2.toUpperCase()}`;
  });
  
  // Fix sentence endings. If a sentence ends with a period, the next word after spaces should be uppercase.
  // E.g. "...multiple days. it helps..." -> "...multiple days. It helps..."
  content = content.replace(/\.\s+([a-z])/g, (match) => {
    return match.toUpperCase();
  });

  // Additional proper noun capitalizations just in case
  content = content.replace(/\bgittime\b/g, 'Gittime');
  content = content.replace(/\bsaas\b/g, 'SaaS');
  content = content.replace(/\bgithub\b/g, 'GitHub');
  content = content.replace(/\bios\b/g, 'iOS');
  content = content.replace(/\bandroid\b/g, 'Android');
  content = content.replace(/\bai\b/g, 'AI');
  content = content.replace(/\bui\b/g, 'UI');
  content = content.replace(/\bapi\b/g, 'API');

  fs.writeFileSync(file, content, 'utf8');
}
console.log("Grammar fix pass 2 applied successfully");
