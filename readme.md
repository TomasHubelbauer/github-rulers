# GitHub 80/120 Characters

To make the GitHub code editor display an 80 and 120 character cutoff lines, use
the stylesheet in [`background.css`](background.css).

```
 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
                                                                 80 characters ^                        120 characters ^
```

![](screenshot.png)

## Installation & Usage

You can use the [Stylus](https://github.com/openstyles/stylus) extension to use
the stylesheet. I am building my own extension, but it is still in development.
To use it, see [Browser Extension](#browser-extension).

See about [User Stylesheet Support In Browsers](#user-stylesheets-in-browsers)
for why to use the extension.

## User Stylesheets In Browsers

Unfortunately, user stylesheets as a browser feature are not really something
browsers do in a user-friendly way anymore:

- [Chrome/Edge](https://src.chromium.org/viewvc/chrome?revision=234007&view=revision)
- [Firefox](https://superuser.com/a/319322/490452)

## Browser Extension

I am working on developing a browser extension specifically for this so that
people are not forced to give an extension full access to all their tabs.

The extension will support Firefox and Chrome.

### Packaging

```sh
zip extension.zip manifest.json background.js background.css 48.png 96.png
```

### Firefox

#### Testing

- Go to `about:debugging#/runtime/this-firefox`
- Click **Load Temporary Add-On** and select `manifest.json`
- Click **Reload** after making changes
- Click **Inspect** to view the extension console

#### Publishing

- [Package the extension](#packaging)
- Go to https://addons.mozilla.org/developers
- Go through the wizard with the `extension.zip` archive
- Check out https://addons.mozilla.org/en-US/firefox/addon/github-80-120-characters

[More information](https://extensionworkshop.com/documentation/publish/submitting-an-add-on)

### Chrome

#### Testing

The Chrome extension is being developed and tested using Puppeteer.

```
npm install
node . $password
```

`$password` is a password to the collaborator `github-80-120@hubelbauer.net`
GitHub account with access to the repository. This is needed so the account can
enter the edit mode of the `readme.md` MarkDown document.

To use Chrome directly and not through Puppeteer:

- Go to chrome://extensions
- Switch **Developer mode** on
- Click **Load unpacked** and select this repository directory
- Click the reload icon after making changes
- Click **Details** > `background page` to view the extension console

#### Publishing

- [Package the extension](#packaging)
- Go to https://chrome.google.com/webstore/devconsole
- Go through the wizard with the `extension.zip` archive
- Wait for the extension review to complete and store URL to get assigned

[More information](https://developer.chrome.com/docs/webstore/publish)

### Edge

#### Testing

Testing is done the same way as for [Chrome](#chrome) using Puppeteer. To test
in Edge proper, I don't have the instructions yet. I might look at adding them
and also at using Playwright for Edge testing in the future.

#### Publishing

- [Package the extension](#packaging)
- Go to https://partner.microsoft.com/dashboard/microsoftedge
- Go through the wizard with the `extension.zip` archive
- Wait for the extension review to complete and store URL to get assigned

[More information](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension)

## To-Do

### Wait for Firefox extension review and test it out

The AMO reviewer should email me once their review is complete.

### Wait for Chrome extension review and test it out

The Google reviewer should email me once their review is complete. I'll need to
set the extension URL in the publishing section for Chrome afterwards.

### Wait for Edge extension review and test it out

The Microsoft reviewer should email me once their review is complete. I'll need
to set the extension URL in the publishing section for Edge afterwards.

### Run the Puppeteer script in GitHub Actions and push `screenshot.png` from it

Might also want to generate a 800x640 screenshots for the stores. JPG for the
Chrome one and PNG for the Edge one. Not sure about AMO.
