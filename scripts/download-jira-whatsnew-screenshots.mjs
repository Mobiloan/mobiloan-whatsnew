/**
 * Download 4.85.00 What's New screenshots from Jira attachments.
 *
 * Usage (PowerShell):
 *   $env:ATLASSIAN_EMAIL = "you@mobiloan.io"
 *   $env:ATLASSIAN_API_TOKEN = "your-api-token"
 *   node scripts/download-jira-whatsnew-screenshots.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', '.gitbook', 'assets', '4.85');

const email = process.env.ATLASSIAN_EMAIL;
const token = process.env.ATLASSIAN_API_TOKEN;
if (!email || !token) {
  console.error('Set ATLASSIAN_EMAIL and ATLASSIAN_API_TOKEN first.');
  process.exit(1);
}

const auth = Buffer.from(`${email}:${token}`).toString('base64');

/** @type {{ name: string, attachmentId: string, ext: string }[]} */
const shots = [
  { name: 'counter-offer-evaluation', attachmentId: '15958', ext: 'png' },
  { name: 'counter-offer-payout', attachmentId: '15961', ext: 'png' },
  { name: 'bonus-affordability', attachmentId: '15953', ext: 'png' },
  { name: 'bonus-category-config', attachmentId: '15955', ext: 'png' },
  { name: 'pinned-client-notes', attachmentId: '15885', ext: 'png' },
  { name: 'zendesk-pin-ticket-menu', attachmentId: '15849', ext: 'png' },
  { name: 'mobidesk-pin-ticket-menu', attachmentId: '15850', ext: 'png' },
  { name: 'origination-concurrency-warning', attachmentId: '15884', ext: 'png' },
];

fs.mkdirSync(outDir, { recursive: true });

for (const shot of shots) {
  const url = `https://api.atlassian.com/ex/jira/e7933de9-ece6-4c24-b938-e604b511cb7a/rest/api/3/attachment/content/${shot.attachmentId}`;
  const dest = path.join(outDir, `${shot.name}.${shot.ext}`);
  const res = await fetch(url, {
    headers: { Authorization: `Basic ${auth}`, Accept: '*/*' },
  });
  if (!res.ok) {
    console.error(`FAIL ${shot.name}: HTTP ${res.status}`);
    process.exitCode = 1;
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`OK ${shot.name} (${buf.length} bytes)`);
}

console.log(`\nSaved to ${outDir}`);
