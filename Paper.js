class paper {

	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.5
         
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		 this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		this.image = loadImage("photos/cpaper.png");
}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(9);
			fill(255,0,0)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}