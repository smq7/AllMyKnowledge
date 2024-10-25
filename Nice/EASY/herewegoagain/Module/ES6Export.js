// To export a constant, variable, function, or class from an ES6 module,
// simply add the keyword export before the declaration:
export const PI = Math.PI;
export function degreesToRadians(d) { return d * PI / 180; }
export class Circle {
    constructor(r) { this.r = r; }
    area() { return PI * this.r * this.r; }
}


export { Circle, degreesToRadians, PI }


// It is common to write modules that export only one value (typically a
//function or class), and in this case, we usually use export default
//instead of export:
    // export default class BitSet {
    // // implementation omitted
    // }
// перейменувати коли експортуємо
export {
    layout as calculateLayout,
    render as renderLayout
    };