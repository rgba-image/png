import * as assert from 'assert'
import * as fs from 'fs'
import { fromPng, toPng } from '..'

const pngBuffer = new Uint8Array( fs.readFileSync( './src/test/fixtures/pattern.png' ) )

describe( 'png', () => {
  it( 'round trips', () => {
    const image1 = fromPng( pngBuffer )
    const png = toPng( image1 )
    const image2 = fromPng( png )

    assert.deepEqual( image1, image2 )
  })
})
