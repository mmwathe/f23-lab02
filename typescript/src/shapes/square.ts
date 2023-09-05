// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

class Square implements Shape {
    private sideLen: number
    computeArea: () => number
    constructor(sideLen: number) {
        this.sideLen = sideLen
        this.computeArea = function (): number {
            return sideLen * sideLen
        }
    }
}
export { Square }