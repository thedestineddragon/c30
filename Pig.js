class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
  display(){

console.log(this.body.speed);
if(this.body.speed>10){
  World.remove(world,this.body);

} 
else{
  super.display();
} 
}

}