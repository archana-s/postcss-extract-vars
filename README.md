# postcss-extract-vars [![Build Status][ci-img]][ci]

[PostCSS] postcss-extract-vars
Extracts the custom variables set to root scope and stores it in the file provided.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/archana-s/postcss-extract-vars.svg
[ci]:      https://travis-ci.org/archana-s/postcss-extract-vars

```css
:root {
    --color-primary: red;
    --color-secondary: blue;
}
.button{

}
.others{

}
```

```css
:root {
    --color-primary: red;
    --color-secondary: blue;
}
```

## Usage

```js
postcss([ require('postcss-extract-vars') ])
```

## Options
```js
{
    file: <PATH TO OUTPUT FILE>
}
```

See [PostCSS] docs for examples for your environment.
