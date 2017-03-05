# babel-plugin-directory-named-module

## Example

Babel plugin to resolve

```js
import module from 'path/to/module'
```

into

```js
import module from 'path/to/module/module.js'
```

## Usage

```bash
npm install babel-plugin-directory-named-module --save-dev
```

Edit `.babelrc`

```json
{
  "plugins": [
    "directory-named-module"
  ]
}
```
