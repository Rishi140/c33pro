class Snow
{
    constructor(x,y,r)
    {
        var options=
        {
            restitution:0.4,
            isStatic:false,

        }
        this.r=8;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image=loadImage("snow4.webp")
       
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        strokeWeight("1")
        stroke("white")
        fill("white")
        push();
        Snow.lifetime=300
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop(); 
    }
}