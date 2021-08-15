class tower{
constructor(x,y,w,h){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,this.w,this.h,options)
this.w=w
this.h=h
World.add(world,this.body)
this.towerImg=loadImage("assets/tower.png")

}
display(){
   var pos=this.body.position
   var angle=this.body.angle
   push ()
   translate(pos.x,pos.y)
   rotate (angle)
  imageMode(CENTER)
  image(this.towerImg,0,0,this.w,this.h)
  pop ()
}

}