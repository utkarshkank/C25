class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y,this.r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill(128,128,128)
			//rect(0,0,this.w, this.h);
            ImageMode(CENTER);
            image(this.image,0,0,this.r);
			pop()
			
	}

}

































