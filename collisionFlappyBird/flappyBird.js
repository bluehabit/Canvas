var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

ctx.width = 288;
ctx.height = 512;

//images
var bg = new Image();
var fg = new Image();
var bird = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var gap = 85;

bird.dx = 50;
bird.dy = 50;

pipeNorth.dx = 195;
pipeNorth.dy = 0;


bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
bird.src = 'images/bird.png';
pipeNorth.src = 'images/pipeNorth.png';
pipeSouth.src = 'images/pipeSouth.png';

var allImages = [];
allImages.push(bird);
allImages.push(pipeNorth);

var x = 50; 


window.addEventListener('load', function(){
	gap += pipeNorth.height;
	draw();
})

function draw(){
	ctx.drawImage(bg,0,0);
	ctx.drawImage(bird,bird.dx,bird.dy);
	ctx.drawImage(pipeNorth, pipeNorth.dx, 0);
	ctx.drawImage(pipeSouth, 195, gap);
	// ctx.fillRect(x,250,55,55)
	// x+=1; 
	
	allImages.forEach(function(image){
		border(image);
	})

	if(intersection(pipeNorth, bird)){
		console.log('hit')
		ctx.fillStyle = 'red';
		ctx.fillRect(bird.dx,bird.dy,bird.width,bird.height);
	}


	bird.dy++;
	pipeNorth.dx--;

	ctx.drawImage(fg,0,bg.height - fg.height);

	ctx.clearRect(0,0,cvs.widdth,cvs.height);
	requestAnimationFrame(draw);
}

function border(image){
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;
	ctx.strokeRect(image.dx, image.dy, image.width, image.height);
}


function intersection(a,b){
   return (a.dx <= b.dx + b.width &&
          b.dx <= a.dx + a.width &&
          a.dy <= b.height + b.dy &&
          b.dy <= a.height + a.dy);
}

//pipeNorth.height --> 242
//pipeNorth.width --> 52
