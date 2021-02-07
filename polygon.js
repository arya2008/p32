class polygon{
    constructor(x,y,r){
    var options={
        restitution:0.1,
        friction:0.1,
        isStatic=true
    }
    this.body=Bodies.circle(x,y,width,height)
    this.r=r
    World.add(world,this.body)
}
    display(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
   
}