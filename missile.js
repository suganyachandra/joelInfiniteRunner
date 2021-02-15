class Missile{
    constructor(x,y,width,height){
      var  options={
            isStatic:true,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.image=loadImage("missile.png");
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);

    }
    display(){
        strokeWeight(4);
        stroke("red");
  
       
        fill(255);
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
    }
    spawn() {
        if (frameCount % 60 === 0) {
          this.body= new Missile(random(1,1200),random(1,700),75,75);
        }
    }
}
    

