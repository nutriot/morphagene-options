# @nutriot/morphagene-options

> Helper for editing [Morphagene](https://www.makenoisemusic.com/modules/morphagene) `options.txt` files

[![License](https://img.shields.io/github/license/nutriot/morphagene-options?color=blue&style=for-the-badge)](https://github.com/nutriot/morphagene-options/blob/main/LICENSE)
[![Version: npm](https://img.shields.io/npm/v/@nutriot/morphagene-options?style=for-the-badge)](https://www.npmjs.org/package/@nutriot/morphagene-options)
[![Version: jsr](https://img.shields.io/jsr/v/@nutriot/morphagene-options?style=for-the-badge)](https://jsr.io/@nutriot/morphagene-options)
[![Build: NodeJS](https://img.shields.io/github/actions/workflow/status/nutriot/morphagene-options/node.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/nutriot/morphagene-options/actions)
[![Build: Deno](https://img.shields.io/github/actions/workflow/status/nutriot/morphagene-options/deno.yml?logo=deno&logoColor=white&style=for-the-badge)](https://github.com/nutriot/morphagene-options/actions)

## Installation 💿

`npm install --save @nutriot/morphagene-options`

## Usage 🚀

```ts
// all environments
import { parse, stringify, type MorphageneOptions } from '@nutriot/morphagene-options'

// NodeJS only
import { parseFile } from '@nutriot/morphagene-options/fs'

// Bonus: schemas for Valibot and Zod
import { valibotSchema, zodSchema } from '@nutriot/morphagene-options'
```

### API ⚙️

#### `parse`

Usage: `parse(optionsString, strict = true)`

Parses an options string into a JavaScript object.

#### `stringify`

Usage: `stringify(optionsObject, strict = true)`

Stringifies a JavaScript object into an options string

#### `parseFile`

> [!CAUTION]
> These functions are only available in NodeJS

Parses an `options.txt` file into a JavaScript object.

Usage:

```ts
parseFile.sync('options.txt', strict = true)
await parseFile.async('options.txt', strict = true)
```

## License ©️

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT).
