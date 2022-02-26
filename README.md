# 65c818 ASM syntax for highlight.js

[![Latest Stable Version](https://img.shields.io/npm/v/@smwcentral/highlightjs-asar)](https://www.npmjs.com/package/@smwcentral/highlightjs-asar)
[![License](https://img.shields.io/npm/l/@smwcentral/highlightjs-asar)](https://github.com/telinc1/smwcentral-highlightjs-asar/blob/master/LICENSE)

The syntax definition used by [SMW Central](https://www.smwcentral.net) for highlighting Asar's dialect of 65c816 ASM.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the JavaScript is loaded.

```html
<script src="/path/to/highlight.min.js"></script>
<script src="/path/to/asar.min.js"></script>
<script>hljs.highlightAll();</script>
```

### Using directly from the UNPKG CDN

```html
<script src="https://unpkg.com/@smwcentral/highlightjs-asar@1.0.0/dist/asar.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsAsar = require('highlightjs-asar');

hljs.registerLanguage('asar', hljsAsar);
hljs.highlightAll();
```
