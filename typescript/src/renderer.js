"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRenderer = void 0;
function newRenderer(rectangle) {
    return {
        draw: function () {
            var area = rectangle.computeArea();
            console.log("Shape drawn\n" + "Its area is " + area);
        }
    };
}
exports.newRenderer = newRenderer;
