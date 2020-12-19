
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particleArray=[];
var numberOfParticles=300;

const mouse = {
	x: null,
	y: null
}

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
   
});

setInterval(function(){
	mouse.x = undefined;
	mouse.y = undefined;
},100);

class Particle{
	
	constructor(x,y,size,color,weight){
		this.x=x;
		this.y=y;
		this.size=size;
		this.color=color;
		this.weight=weight;
		
	}
	draw(){
	 ctx.beginPath();
	 ctx.arc(this.x, this.y, this.size, 0, Math.PI*2,false);
	 ctx.fillStyle=this.color;
	 ctx.fill();
		
		
	}

	update(){
		this.size -= 0.1;
		if(this.size<0){
			this.x = (mouse.x+((Math.random()*20)-10));
			this.y = (mouse.y + ((Math.random()*20)-10));
			this.size = (Math.random()*5)+10;
			this.weight = (Math.random()*2)-0.5;
		}
		this.y += this.weight;
		this.weight += (Math.random()*0.2)-0.01;
		//this.weight=this.weight;
		if(this.y>canvas.height-this.size){
			this.weight *= -0.2;
			
		}
		
	}

}


function init(){
	let hue=300;
	particleArray=[];
	for(let i = 0; i < numberOfParticles; i++){
		//console.log(i)
		let x = Math.random()*canvas.width;
		let y = Math.random()*canvas.height;
		let size = (Math.random()*5)+5;
		let color = 'hsl('+hue+', 100%,70%)';
		let weight = 1;
		particleArray.push(new Particle(x,y,size,color,weight));
		hue+=0.5;
	}
}


function animate(){
 //console.log("in animate")
 ctx.clearRect(0,0,canvas.width,canvas.height);
 for(let i = 0; i < particleArray.length;i++){
	 particleArray[i].update();
	 //particleArray[i].draw();
 }
    console.log(particleArray)
	connect();
	requestAnimationFrame(animate);
}

init();
animate();

function random_rgba() {
    var o = Math.round, r = Math.random, s = 250;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(0.5) + ')';
}

function connect(){
	//console.log("in connect")
	console.log(particleArray)
	let opacityValue = 1;
	console.log(particleArray.length)
	for( let a = 0; a < particleArray.length; a++){
		for(let b = a; b < particleArray.length; b++){
			let distance = ((particleArray[a].x-particleArray[b].x)*(particleArray[a].x-particleArray[b].x)
			+(particleArray[a].y-particleArray[b].y)*(particleArray[a].y-particleArray[b].y));
			
			if(distance<10000){
			    opacityValue = 1-(distance/4000);
				ctx.strokeStyle=particleArray[a].color;
				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.moveTo(particleArray[a].x,particleArray[a].y);
				ctx.lineTo(particleArray[b].x,particleArray[b].y);
				ctx.stroke();
			}
		}
	}
	
}





















