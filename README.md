# postcss-extract-vars [![Build Status][ci-img]][ci]

[PostCSS] postcss-extract-vars Extracts the custom variables set to root scope.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/GITHUB_NAME/PLUGIN_NAME.svg
[ci]:      https://travis-ci.org/GITHUB_NAME/PLUGIN_NAME

```input css
:root {
    --color-primary: red;
    --color-secondary: blue;
}
.button{

}
.others{

}
```

```output
:root {
    --color-primary: red;
    --color-secondary: blue;
}
```

## Usage

```js
postcss([ require('postcss-extract-vars') ])
```

See [PostCSS] docs for examples for your environment.
