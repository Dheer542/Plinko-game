class Particle{
constructor(x,y,r,colour){
    var options = {
        restitution : 0.4
    }
    this.r = r;
    this.body = Bodies.circle(x,y,r,options);
    this.colour = colour(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //imageMode(CENTER);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(0,0,this.r, this.r);
    pop();
    for(var j = 0; j < particles.length; j++){
        particle[j].display();
    }
    for(var k = 0; k < divisions.length; k++){
        divisions[k].display();
    }
}    
}