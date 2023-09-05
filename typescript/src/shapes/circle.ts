class Circle implements Shape {
    private radius: number
    computeArea: () => number
    constructor(radius: number) {
        this.radius = radius
        this.computeArea = function (): number {
            return Math.PI * radius * radius
        }
    }
}

// function circle(radius: number): Shape {
//     return {
//         radius,
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }

export { Circle }
