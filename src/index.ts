import { PNG, PNGOptions } from 'pngjs'
import { createImage } from '@rgba-image/create-image'
import { CreateImage } from '@rgba-image/common'

export type FromPng = ( pngBuffer: Uint8Array ) => ImageData
export type ToPng = ( imageData: ImageData, options?: PNGOptions ) => Uint8Array

export const PngFactory = ( createImage: CreateImage ) => {
  const fromPng: FromPng = ( pngBuffer: Uint8Array ) => {
    const png = PNG.sync.read( Buffer.from( pngBuffer ) )
    const { width, height, data } = png
    const pngData = new Uint8ClampedArray( data )

    return createImage( width, height, pngData )
  }

  const toPng: ToPng = ( imageData: ImageData, options?: PNGOptions ) => {
    const { width, height, data } = imageData

    options = { ...options, ...{ width, height } }

    const png = new PNG( options )

    png.data = Buffer.from( <any>data )

    return new Uint8Array( PNG.sync.write( png ) )
  }

  return { fromPng, toPng }
}

export const { fromPng, toPng } = PngFactory( createImage )
