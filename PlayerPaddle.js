class PlayerPaddle {
    constructor(x, y,width , height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        //properties
        this.body = Bodies.rectangle(x, y, width , height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER)
        rect(this.x , this.y , this.width , this.height);
      }
    }