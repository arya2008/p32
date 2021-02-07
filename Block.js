class block{
    constructor(x,y,width,height){
    var options={
        restitution:0.1,
        friction:0.1,
        isStatic=false
    }
    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    this.visibility=255;
    World.add(world,this.body)
}
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
display(){
    if(this.body.speed<3){
      super.display()
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop()
    }
  }
  score(){
    if(this.Visiblity<0 &&this.Visiblity>-1005){
      score++
    }
  }
}