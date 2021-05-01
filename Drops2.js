class createDropT{
    constructor(x,y){
        var options = {
            friction: 0.01,
            restitution:0.51           
        }
        this.rainT = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rainT);
    }

    updateYT(){     
        if(this.rainT.position.y > height){

            Matter.Body.setPosition(this.rainT, {x:random(0,400), y:random(0,400)})
        }
    }

    showDropT(){
        fill("grey")
        ellipseMode(CENTER);
        ellipse(this.rainT.position.x,this.rainT.position.y,this.radius,this.radius);
    }
}