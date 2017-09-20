# babel-plugin-s2s-action-root
[![Build Status](https://travis-ci.org/akameco/babel-plugin-s2s-action-root.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-s2s-action-root)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> compose action types


## Install

```
$ npm install --save-dev babel-plugin-s2s-action-root
```

### Example

#### IN:

```
```


#### OUT:

```
// @flow
import type { Action as AppAction } from "../app/actionTypes";
import type { Action as BobAction } from "../bob/actionTypes";

export type Action = AppAction | BobAction;
```


### Usage

```
{
  ['s2s-action-root', {
    input: 'containers/**/actionTypes.js',
    output: 'types/action.js',
    globOptions: {}
  }]
}
```

#### input

type: `string` <br>
required: true

glob pattern.

#### output

type: `string` <br>
required: true

outputh path.

#### blobOptions

See https://github.com/isaacs/node-glob#options

## License

MIT © [akameco](http://akameco.github.io)
