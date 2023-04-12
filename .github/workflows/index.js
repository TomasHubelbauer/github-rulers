import fs from 'fs';
import node2fa from 'node-2fa';
import playwright from 'playwright';

const email = process.argv[2] ?? await import('./email.js').then(module => module.default);
if (!email) {
  throw new Error('Provide email in the CLI arguments!');
}

const password = process.argv[3] ?? await import('./password.js').then(module => module.default);
if (!password) {
  throw new Error('Provide password in the CLI arguments!');
}

const secret = process.argv[4] ?? await import('./secret.js').then(module => module.default);
if (!secret) {
  throw new Error('Provide secret in the CLI arguments!');
}

// https://playwright.dev/docs/chrome-extensions
const args = ['--disable-extensions-except=../..', '--load-extension=.'];
const browser = await playwright.chromium.launchPersistentContext('user-data-dir', { headless: false, args });
const page = await browser.newPage();

await page.goto('https://github.com/login');

await page.type('#login_field', email);
await page.type('#password', password);
await page.click('input[type="submit"]');

const { token } = node2fa.generateToken(secret);
await page.type('#app_totp', token);

await page.goto('https://github.com/TomasHubelbauer/github-80-120-characters/edit/main/readme.md');
await page.locator('.file').screenshot({ path: '../../screenshot.png' });
await page.locator('.file').screenshot({ path: '../../screenshot.jpg' });
await browser.close();

await fs.promises.rm('user-data-dir', { recursive: true });
