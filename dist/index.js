"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPng = exports.fromPng = exports.PngFactory = void 0;
const pngjs_1 = require("pngjs");
const create_image_1 = require("@rgba-image/create-image");
const PngFactory = (createImage) => {
    const fromPng = (pngBuffer, options) => {
        const png = pngjs_1.PNG.sync.read(Buffer.from(pngBuffer), options);
        const { width, height, data } = png;
        const pngData = new Uint8ClampedArray(data);
        return createImage(width, height, pngData);
    };
    const toPng = (imageData, options) => {
        const { width, height, data } = imageData;
        options = Object.assign(Object.assign({}, options), { width, height });
        const png = new pngjs_1.PNG(options);
        png.data = Buffer.from(data);
        return new Uint8Array(pngjs_1.PNG.sync.write(png));
    };
    return { fromPng, toPng };
};
exports.PngFactory = PngFactory;
_a = exports.PngFactory(create_image_1.createImage), exports.fromPng = _a.fromPng, exports.toPng = _a.toPng;
//# sourceMappingURL=index.js.map