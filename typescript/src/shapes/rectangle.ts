// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

class Rectangle implements Shape {
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
function newRectangle(width: number, height: number): Rectangle {
    return new Rectangle(width, height)
}

export { Rectangle, newRectangle }
