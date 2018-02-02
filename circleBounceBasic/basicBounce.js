var x = 200;
var y = 200;
var dx = (Math.random() - 0.5)*12;
var dy = (Math.random() - 0.5)*12;
var radius = 30;

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();

	if(x + radius > innerWidth || x - radius < 0){
		dx = -dx;
	}

	if(y + radius > innerHeight || y - radius < 0){
		dy = -dy;
	}

	x += dx;
	y += dy;
}

animate();
