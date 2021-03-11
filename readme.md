# GitHub 80 Characters

To make the GitHub code editor display an 80 and 120 character cutoff areas, use
this stylesheet:

```css
.CodeMirror-lines {
  background: linear-gradient(
    to right,

    transparent,
    transparent 80ch,
      
    /* Render a line at 80 characters */
    silver calc(80ch + 1px),
    transparent calc(80ch + 1px),

    transparent 120ch,
    
    /* Render a line at 120 characters */
    silver calc(120ch + 1px),
    transparent calc(120ch + 1px),
    
    transparent
  )

  /* Override GitHub's own stylesheet */
  !important;
}
```

Here's how it looks displaying this text:

```
 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
                                                                 80 characters ^                        120 characters ^

Made by [Tomas Hubelbauer](https://github.com/tomashubelbauer)
```

![](screenshot.png)

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
