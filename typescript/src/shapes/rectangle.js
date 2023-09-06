"use strict";
// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRectangle = exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.computeArea = function () {
            return width * height;
        };
    }
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function newRectangle(width, height) {
    return new Rectangle(width, height);
}
exports.newRectangle = newRectangle;
