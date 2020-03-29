# ku4web-components
Quick and easy core web functionality.

### tl;dr
Add the latest ku4web-components to your project:
* [Add to your website](#add-ku4web-components-to-your-website)
* [Add to your React app](#add-ku4web-components-to-your-react-app)
* [Add components `root` styles](#add-ku4--component-root-styles)
* [Add optional kodmunki styles](#add-ku4--component-optional-kodmunki-styles)

#### Add ku4web-components To Your Website
Add the scripts below to the head of your website.

```html
<script type="module" src='https://cdn.jsdelivr.net/gh/kodmunki/ku4web-components@latest/dist/ku4web-components.esm.js'></script>
<script nomodule src='https://cdn.jsdelivr.net/gh/kodmunki/ku4web-components@latest/dist/ku4web-components.js'></script>
```

#### Add ku4web-components To Your React App
Install `ku4web-components` from npm: `npm i -S ku4web-components` 
and adding the code snippet below to your project root 
_(this is `src/index.js` in a default `create-react-app`)_

```javascript
import { applyPolyfills, defineCustomElements } from 'ku4web-components/loader';
applyPolyfills().then(() => { defineCustomElements(); });
```

#### Add ku4-* Component `:root` Styles
Add `:root` styles for your target component(s) by adding the following style 
link to the head of your website. Template below.
Replace `[COMPONENT]` with the name of the `ku4-*` component you are targeting.

```html
<link rel="stylesheet" href='https://cdn.jsdelivr.net/gh/kodmunki/ku4web-components@latest/styles/[COMPONENT]/root.css' />
```

#### Add ku4-* Component Optional kodmunki Styles
Add default kodmunki styles for your target component(s) by adding the following 
style link to the head of your website. Template below.
Replace `[COMPONENT]` with the name of the `ku4-*` component you are targeting.

```html
<link rel="stylesheet" href='https://cdn.jsdelivr.net/gh/kodmunki/ku4web-components@latest/styles/[COMPONENT]/styles.css' />
```

## Table Of Contents
* [Documentation](#documentation)
* [Installation](#installation)
* [Styling](#styling)
* [Release Notes](#release-notes)

## Documentation
[Storybook](https://kodmunki.github.io/storybook)

## Installation
[Installation instructions](http://kodmunki.github.io/storybook/index.html?path=/story/overview-about--page#installation)

## Styling
Default component `:root` styles, CSS variables, and starter styles in
[styles directory](./styles). Use `root.css` to set desired variable values.
Optionally, use `styles.css` for quick start.

## Release Notes
History found in ["releases"](https://github.com/kodmunki/ku4web-components/releases) section of this repository.
For convenience: [release notes for the latest release](https://github.com/kodmunki/ku4web-components/releases/latest).
