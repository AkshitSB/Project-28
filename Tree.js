class Tree {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tree.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
};