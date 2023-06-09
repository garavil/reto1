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
    calcularQuadrant(){
        if(this.x == 0 || this.y == 0){
            return 0;
        }
        else if(this.x>0 && this.y> 0){
            return 1
        }
        else if(this.x<0 && this.y> 0){
            return 2
        }
        else if(this.x<0 && this.y< 0){
            return 3
        }
        else if(this.x>0 && this.y< 0){
            return 4
        }
    }
    calcultateNearest(arrPoints:Point[]){
        let arrDist:number[] = []
        for(let i = 0; i< arrPoints.length ; i++){
            let dist = this.calculateDistance(arrPoints[i])
            arrDist.push(dist)
        } 
        let numMin = Math.min(...arrDist)
        for (let i = 0; i< arrDist.length ; i++){
            if (arrDist[i] == numMin){
                return arrPoints[i]
            }
        }
    } 
    
}
