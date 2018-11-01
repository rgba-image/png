"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const __1 = require("..");
const pngBuffer = new Uint8Array(fs.readFileSync('./src/test/fixtures/pattern.png'));
describe('png', () => {
    it('round trips', () => {
        const image1 = __1.fromPng(pngBuffer);
        const png = __1.toPng(image1);
        const image2 = __1.fromPng(png);
        assert.deepEqual(image1, image2);
    });
});
//# sourceMappingURL=index.js.map