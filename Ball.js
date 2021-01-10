class Ball {
    constructor(x, y,radius ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //properties
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        ellipseMode(CENTER)
        ellipse(this.x , this.y , this.radius , this.radius);
      }
    }