# png

Convert PNG to and from ImageData

## install

`npm install @rgba-image/png`

## usage

```typescript
fromPng: ( pngBuffer: Uint8Array ) => ImageData
toPng: ( imageData: ImageData, options?: PNGOptions ) => Uint8Array
```

Convert an `ImageData` instance to PNG:

```js
const { toPng } = require( '@rgba-image/png' )
const fs = require( 'fs' )

// create imageData here

const buffer = toPng( imageData )

fs.writeFileSync( 'out.png', buffer )
```

Convert a PNG to `ImageData`:

```js
const { fromPng } = require( '@rgba-image/png' )
const fs = require( 'fs' )

const png = fs.readFileSync( 'in.png' )
const imageData = fromPng( png )
```

## options

Uses [pngjs](https://github.com/lukeapage/pngjs) for encoding/decoding

`toPng` optionally takes [`PNGOptions`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pngjs/index.d.ts) which are passed through to pngjs

## License

MIT License

Copyright (c) 2018 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.