 # Webstudio Fonts Module

This module adds custom fonts to web apps built with `Webstudio`

 ![Webstudio Module Fonts](https://github.com/webstudioso/wsm-fonts/actions/workflows/production.yml/badge.svg)

### Testing and Building Module
```
npm i
npm run test
npm run build
```

### Publish to NPMJS
```
npm publish
```

### Importing Dependency in Webstudio
Add it to the project, this is compatible with `grapesjs` as well.
```shell
npm i --save wsm-fonts@latest
```
To import in the editor add the file and include it as a Plugin
```js
import WSMFonts, { WSMFontStyles } from "wsm-fonts"

const editor = grapesjs.init({
    container: "#gjs",
    plugins: [
        WSMFonts
    ],
    canvas: {
        styles: [
            ...WSMFontStyles
        ],
    }
})
```