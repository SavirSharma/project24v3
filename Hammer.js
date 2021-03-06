class Hammer{
    constructor(x,y){
        var options={
            "restitution":0.5,
            "friction":1,
            "density":2
        }
        this.body= Bodies.rectangle(x,y,50,30,options);
        this.width=75;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle= this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("orange");
        strokeWeight(4);
        stroke("black");
        rect(0,0,this.width,this.height);
        pop();
    } 
}