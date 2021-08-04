class Box {
    constructor(x, y, width, height, color){
      var options = {
        'restitution':0.8,
        'friction':0.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.Visibilty = 255;
        World.add(world, this.body);
      }
      display(){
              
        if(this.body.speed < 3){
          var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        } else{
          World.remove(world, this.body);
          tint(255,this.visibilty);
        }
       
        
      }
}