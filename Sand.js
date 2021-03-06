class Sand {
    constructor(x,y){
    
        var options={
            "restitution":1.3,
            "friction":5,
            "density":1
        }
        this.body= Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        strokeWeight(4);
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(0,0,10);
        pop();
    }
}