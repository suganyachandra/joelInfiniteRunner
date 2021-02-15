class Helicopter{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.image=loadImage("helicopter.png");
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)      
        World.add(world,this.body);
    }
    display(){
        strokeWeight(4);
        stroke("red");
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
       
        
      
     


  
    }


    

}