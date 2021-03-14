import puppeteer from 'puppeteer';

void async function () {
  // Ensure the collaborator account password is provided for the edit mode UI
  if (!process.argv[2]) {
    throw new Error('Provide password for github-80-120@hubelbauer.net in `node . $password`.');
  }

  const browser = await puppeteer.launch({
    // Run in headless mode as it is required for extensions to run
    headless: false,

    // Disable the default 800x600 viewport which causes line wrap in the editor
    defaultViewport: null,

    // Allow loading this unpacked extension and configure for it to load
    args: [
      '--disable-extensions-except=.',
      '--load-extension=.',
    ]
  });

  // Grab a hold of the default tab that opens with the browser
  const [page] = await browser.pages();

  // Exit Puppeteer when the browser is closed by me during development
  page.once('close', () => browser.close());

  // Attempt to access the edit mode prompting the sign in to an account
  await page.goto('https://github.com/tomashubelbauer/github-80-120-characters/edit/main/readme.md');

  // Sign in to GitHub with the collaborator account to enter edit mode UI
  await page.type('#login_field', 'github-80-120@hubelbauer.net');
  await page.type('#password', process.argv[2]);
  await page.click('input[type="submit"]');

  // Find the code editor element and take a screenshot of it
  const element = await page.waitForSelector('.CodeMirror');
  await element.screenshot({ path: 'screenshot.png' });

  await browser.close();
}()
