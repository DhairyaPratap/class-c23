class Cannon{
constructor(x,y,w,h,angle){
    this.w=w
    this.h=h
    this.angle=angle
    this.x=x
    this.y=y
}
display(){
    fill("#676e6a")
    push ()
    translate (this.x,this.y)
    rotate (this.angle)
    rect (-10,-20,this.w,this.h)
    pop ()
    arc (this.x-40,this.y+80,180,230,PI,TWO_PI)
    noFill()
}

}