const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

const edge = 150;


const mouse ={
 x: null,
 y: null
}

window.addEventListener('mousemove', function(event){
	mouse.x=event.x;
	mouse.y=event.y;
})

class Root{
	constructor(x,y,color,centerX, centerY){
		this.x=x;
		this.y=y;
		var stroke = 'saddlebrown';
		this.color=color;
		this.stroke=stroke;
		this.speedX=0;
		this.speedY=0;
		this.angle=0;
		this.centerX=centerX;
		this.centerY=centerY;	
		this.sizeX= Math.random()*100;
		this.sizeY=Math.random()*50;
	}
	
	draw(){
		this.speedX +=(Math.random()-0.5)/10;
		this.speedY+=(Math.random()-0.5)/10;
		this.x +=this.speedX;
		this.y +=this.speedY;
		
		const distanceX=this.x -this.centerX;
		const distanceY = this.y- this.centerY;
		const distance= Math.sqrt(distanceX* distanceX +distanceY*distanceY);
		const radius=(-distance/edge + 1)*edge/6;
		
		if(radius>0){
			requestAnimationFrame(this.draw.bind(this));
			ctx.save();
		    ctx.translate( this.x+radius/2, this.y+radius/2 );
			this.angle +=4*Math.random()+0.5;
		    ctx.rotate(this.angle  * Math.PI / 180);
			ctx.beginPath();
			ctx.fillStyle=this.stroke;
			ctx.fillRect(0, 0, radius, radius );
			
			//ctx.fill();
			ctx.lineWidth = 0.2;
			ctx.strokeStyle ='black'
			ctx.strokeRect(0, 0, radius, radius);
			//ctx.stroke();
			ctx.lineWidth = 1;
			ctx.restore();
			
			
			
		}
	}
		
}

function branchOut(){
   const centerX=mouse.x;
   const centerY=mouse.y;
   for(let i=0; i<2;i++){
	  const root= new Root(mouse.x, mouse.y, 'black', centerX, centerY) ;
	  root.draw();
   }	
}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 240;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



window.addEventListener('resize',  function(){
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	
});

window.addEventListener('mousemove',function(){
	ctx.fillStyle='rgba(255,255,255,0.0025)';
	ctx.fillRect(0,0, canvas.width, canvas.height);
	branchOut();
	
});



