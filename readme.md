# @choiceform/tailwindcss-svg-icon

[![License](https://raw.githubusercontent.com/choice-form/tailwindcss-svg-icon/e62b549947e5940e5b92ffa77dfbb791269e0bbf/LICENSE)](LICENSE)
[![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)](https://tailwindcss.com/)

A Tailwind CSS plugin that allows you to use encoded SVG files as CSS data URLs.

## ![capture](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/capture.png)

## Installation

To install the tailwindcss-svg-icon plugin, you can use npm or yarn:

```bash
npm install @choiceform/tailwindcss-svg-icon --save-dev
```

## Configuration

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-svg-icon")({
      // default options
      classPrefix: "icon",
      defaultSize: 1,
      unit: "rem",
    }),
  ],
};

// package.json
{
  "scripts": {
    ...
  },
  "iconSourcePath": "path/to/icons",
}
```

## Usage

```html
<div class="icon-[folder/iconName]" />
```

## features

### Auto completion

This plugin supports code completion in Visual Studio Code. It provides suggestions and auto-completion for your code as you type. This can greatly improve your productivity and help you write code more efficiently.

![code-completion](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/auto-completion.png)

### Customize size

You can customize the default size of the icons by adjusting the defaultSize option. In the tailwind.config.js file, change the value of defaultSize to the size and unit you prefer.

Additionally, you can also use Tailwind CSS's classes to change the size of the icons.

![size](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/size.png)

```html
<div className="icon-[sharp/mastodon] w-16 h-16" />
```

### Support the `currentColor` feature for SVG.

By using the `currentColor` value for the `fill` or `stroke` property in your SVG, you can dynamically inherit the color from the parent element. This allows for easy customization and theming of SVG icons.

![currentColor](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/current-color.png)

Example usage:

```html
<!-- SVG file -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  fill="currentColor"
>
  ...
</svg>
```

```html
<!-- Component -->
<div class="icon-[folder/iconName] text-blue-500" />
```

In this example, the SVG icon will inherit the color `blue-500` from the parent element's text color.

> If the SVG does not have the currentColor property, it will render in its original color and cannot have its color changed using Tailwind CSS classes.

![color](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/color.png)

### Supports Tailwindcss Handling Hover, Focus, and Other States

![Handling](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/handling.png)

```html
<div
  className="icon-[balloon-outline] 
  hover:icon-[balloon] hover:text-violet-500"
/>
```

### Supports SVG animations

![animation](https://github.com/choice-form/tailwindcss-svg-icon/raw/e62b549947e5940e5b92ffa77dfbb791269e0bbf/assets/animations.gif)

##### Credits

This projects uses
[svgo](https://github.com/svg/svgo)

[![npm](https://img.shields.io/npm/v/svgo)](https://www.npmjs.com/package/@choiceform/tailwindcss-svg-icon)
[![docs](https://img.shields.io/badge/docs-svgo.dev-blue)](https://svgo.dev/)

## License

[MIT](LICENSE) License © 2023 [Choiceform](https://github.com/choice-form)
