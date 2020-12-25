class Rope{
    constructor(bodyA,pointB){
        var option= {
            bodyA  : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 300
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(myWorld,this.rope);
    }
    
    display(){
        var ptA = this.rope.bodyA.position;
        var ptB = this.pointB;
        push();
        strokeWeight(3);
        stroke("black");
        line(ptA.x,ptA.y,ptB.x,ptB.y);
        pop();
    }
}