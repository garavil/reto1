import { Point } from "./point";

let myPoint = new Point(1,7)
let anotherPoint = new Point(1,2)

myPoint.setX(1)
myPoint.setY(7)
console.log(myPoint.getX())
console.log(myPoint.getY())
console.log(myPoint.toString())
console.log(myPoint.distanceToOrigin())
console.log(myPoint.calculateDistance(anotherPoint))