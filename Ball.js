class Ball{
    constructor(x,y,width,height,angle){
        var option = {
            //restitution = 0.8,
            density : 1.0,
            frictionAir : 0.005
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}