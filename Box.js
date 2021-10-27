class Box {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 0.3,
      density: 1.0,
      isStatic : true
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    this.packageIMG=loadImage("package.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("red");
    image(this.packageIMG, 0, 0, this.width, this.height);
    pop();
  }
}
