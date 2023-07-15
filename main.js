canvas=document.getElementById('myCanvas');

ctx= canvas.getContext("2d");

GC_width=75;
GC_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

GC_x=5;
GC_y=225

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar
	greencar_imgTag.src = greencar_image;
	}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, GC_x, GC_y, GC_width, GC_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(GC_y >= 0)
	{
		GC_y= GC_y - 10
		uploadBackground()
		uploadgreencar()
	}
}

function down()
{
	if(GC_y <= 350)
	{
		GC_y= GC_y + 10
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
	if(GC_x >= 0)
	{
		GC_x= GC_x - 10
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	if(GC_x <= 750)
	{
		GC_x= GC_x + 10
		uploadBackground()
		uploadgreencar()
	}
}


























ctx.beginPath()
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(415,255,40,0,360)
ctx.stroke();