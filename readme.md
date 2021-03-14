# GitHub 80/120 Characters

To make the GitHub code editor display an 80 and 120 character cutoff lines, use
the stylesheet in [`index.css`](index.css).

![](screenshot.png)

This is what displaying the following text in the GitHub editor looks like:

```
 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
                                                                 80 characters ^                        120 characters ^

Made by [Tomas Hubelbauer](https://github.com/tomashubelbauer)

```

## Installation & Usage

You can use the [Stylus](https://github.com/openstyles/stylus) extension to use
the stylesheet.

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

### Firefox

- Go to `about:debugging#/runtime/this-firefox`
- Click **Load Temporary Add-On** and select `manifest.json`
- Click **Reload** after making changes
- Click **Inspect** to view the extension console

## To-Do

### Create and use icons for the web extension

### Publish and package the extension for Firefox

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#packaging_and_publishing

### Figure out how to test, fix if needed and publish the extension for Chrome

Maybe the path to `index.css` will need to be adjusted.
