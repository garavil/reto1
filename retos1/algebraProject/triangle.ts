import { Point } from "./point";

export class Triangle{
    private vertex1 : Point;
    private vertex2 : Point;
    private vertex3 : Point;
    constructor(vertex1:Point, vertex2:Point, vertex3:Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    calculateLengthSides():number[]{
        let dist1 = this.vertex1.calculateDistance(this.vertex2);
        let dist2 = this.vertex2.calculateDistance(this.vertex3);
        let dist3 = this.vertex3.calculateDistance(this.vertex1);
        let arrayNum = [dist1, dist2, dist3];
        return arrayNum
    }
}