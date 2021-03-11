# GitHub 80 Characters

To make the GitHub code editor display an 80 and 120 character cutoff areas, use
this stylesheet:

```css
.CodeMirror-lines {
  background: linear-gradient(to right, transparent, transparent 80ch, whitesmoke 80ch, whitesmoke 120ch, gainsboro 120ch) !important;
}
```

## To-Do

### Make a browser extensions for this

Chrome and Edge no longer support user styles:
https://src.chromium.org/viewvc/chrome?revision=234007&view=revision

Firefox does support it with a config change:
https://superuser.com/a/319322/490452

There is an open source extension for this which looks good:
https://github.com/openstyles/stylus

But it would be much better to build my own (no risk of selling out):

https://developer.chrome.com/docs/extensions/reference/tabs/#method-insertCSS
