// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

class rectangle implements Shape {
    private width: number
    private height: number
    computeArea: () => number
    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.computeArea = function (): number {
            return width * height
        }
    }

}
// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

export { rectangle }
