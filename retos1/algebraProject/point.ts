class Point{
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
}

let point = new Point(70,95)

point.setX(70)
point.setY(95)
console.log(point.getX())
console.log(point.getY())
point.toString()