<canvas></canvas>

<style>
canvas {
	border: 1px solid black;
}

body {
	margin: 0;
}

</style>

<script>

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//fillRect will take in whatever fillStyle
//prcedes it thats how you target a specific shape

//rectangle
var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400,100,100,100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300,300,100,100);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'red';
c.stroke();

//arcs or circle
for (var i = 0; i < 3; i++){
	var x  = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = `rgb(${generateRGB()},${generateRGB()},${generateRGB()})`;
	c.stroke();
}

function generateRGB(){
	return Math.floor(Math.random() * 255) + 1;
}



//you can reinstantiate a variable within a for loop



</script>
