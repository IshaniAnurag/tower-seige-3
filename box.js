class box{
    constructor(x,y) {
        var options = {
            'restitution':0.2,
            'friction':0.6,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
        this.visibility=255;
      }
      display(){
        if(this.body.speed < 3){
          this.body.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           rect( this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
        }
        score(){
          if(this.Visibility<0 && this.Visibility>-1005){
            score=score+10;
          }
        }
       
      }
