// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

class square implements Shape {
    private sideLen: number
    computeArea: () => number
    constructor(sideLen: number) {
        this.sideLen = sideLen
        this.computeArea = function (): number {
            return sideLen * sideLen
        }
    }
}
export { square }