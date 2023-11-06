# @nutriot/morphagene-options

> Helper for editing Morphagene `options.txt` files

[![License](https://img.shields.io/github/license/nutriot/morphagene-options?color=blue&style=for-the-badge)](https://github.com/nutriot/morphagene-options/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@nutriot/morphagene-options?style=for-the-badge)](https://www.npmjs.org/package/@nutriot/morphagene-options)
[![Build](https://img.shields.io/github/actions/workflow/status/nutriot/morphagene-options/default.yml?style=for-the-badge)](https://github.com/nutriot/morphagene-options/actions)

## Installation

`npm install --save @nutriot/morphagene-options`

## Usage

```ts
import { parse, stringify } from '@nutriot/morphagene-options';
```

### `parse`

Usage: `parse(optionsString, strict = true)`

Parses an `options.txt` file into a JavaScript object.

### `stringify`

Usage: `stringify(optionsObject, strict = true)`

Stringifies a JavaScript object into an `options.txt` file

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
