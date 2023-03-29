import { Point } from "./point";

let myPoint = new Point(1,7)
let anotherPoint = new Point(-5,2)
let anotherPoint1 = new Point(2,10)
let anotherPoint2 = new Point(5,-5)

myPoint.setX(1)
myPoint.setY(7)
console.log(myPoint.getX())
console.log(myPoint.getY())
console.log(myPoint.toString())
console.log(myPoint.distanceToOrigin())
console.log(myPoint.calculateDistance(anotherPoint))
console.log(myPoint.calcularQuadrant())
console.log(myPoint.calcultateNearest([anotherPoint, anotherPoint1, anotherPoint2]))
