import { Point } from "./point";
import { Triangle } from "./triangle";

let punto1 = new Point(4,6)
let punto2 = new Point(7,10)
let punto3 = new Point(-5,-3)

let myTriangle = new Triangle (punto1, punto2, punto3)

let longitud = myTriangle.calculateLengthSides()
console.log(longitud)