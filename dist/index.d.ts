import { PNGOptions } from 'pngjs';
import { CreateImage } from '@rgba-image/common';
export declare type FromPng = (pngBuffer: Uint8Array) => ImageData;
export declare type ToPng = (imageData: ImageData, options?: PNGOptions) => Uint8Array;
export declare const PngFactory: (createImage: CreateImage) => {
    fromPng: FromPng;
    toPng: ToPng;
};
export declare const fromPng: FromPng, toPng: ToPng;
