class SlingShot{
constructor(bodyA,bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness: 0.02,
    length: 40
}
this.sling= Constraint.create(options)
World.add(world,this.sling)
}
display(){
    strokeWeight(4)
    //line(x1,y1,x2,y2)
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    
}



}