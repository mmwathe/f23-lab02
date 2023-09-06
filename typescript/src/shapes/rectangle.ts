import { Shape } from './shape'
function rectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
                    return width * height
    }

    }
}

export { rectangle }
