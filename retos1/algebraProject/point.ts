export class Point{
    private x: number;
    private y: number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    setX(x:number){
        this.x = x;
    }
    getX():number{
        return this.x
    }
    setY(y:number){
        this.y = y;
    }
    getY():number{
        return this.y
    }
    toString():string{
        return '('+this.x+','+this.y+')'
    }
    distanceToOrigin():number{
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
    calculateDistance(anotherPoint:Point):number{
        return Math.sqrt((this.x- anotherPoint.x)*(this.x- anotherPoint.x) + (this.y- anotherPoint.y)*(this.y- anotherPoint.y))
    }
}
