const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth-260;
canvas.height=window.innerHeight-30;
ctx.globalCompositeOperation='destination-over';
let positionX=canvas.width/2;
let positionY=canvas.height/2;
let clickX = 0;
let clickY = 0;

var slider = document.getElementById("myRange");
var output = document.getElementById("Scale_val");

var border_slider = document.getElementById("Width_stroke");
var border_output = document.getElementById("Border_val");

var random_check=document.getElementById("random");

var angle_slider = document.getElementById("angle_off");
var angle_output = document.getElementById("angle_val");


var scale_inc = document.getElementById("Scale_inc");
var number_inc_val = document.getElementById("Num_inc");
var slider_number = document.getElementById("EndNumber");
var output_number = document.getElementById("End_val");
var ClearButton = document.getElementById("ClearCanvas");

var slider_hue = document.getElementById("Hue_scale");


var slider_sat = document.getElementById("Sat_scale");

var slider_light = document.getElementById("Light_scale");
var output_HSL = document.getElementById("HSL_val");

var Hue_change = document.getElementById("HueRate");
var Sat_change = document.getElementById("SatRate");
var Light_change = document.getElementById("LightRate");


var slider_trans = document.getElementById("Trans_scale");

var slider_trans_border= document.getElementById("Trans_border_scale");

var Trans_border_change = document.getElementById("TransRate");
var Trans_change = document.getElementById("TransBorderRate");

var Border_width_change=document.getElementById("border_inc")




var slider_hue_border = document.getElementById("Hue_border_scale");


var slider_sat_border = document.getElementById("Sat_border_scale");

var slider_light_border = document.getElementById("Light_border_scale");
var output_HSL_border = document.getElementById("HSL_border_val");

var Hue_border_change = document.getElementById("HueBorderRate");
var Sat_border_change = document.getElementById("SatBorderRate");
var Light_border_change = document.getElementById("LightBorderRate");




var scale_random = document.getElementById("scale_cb");
var scale_inc_random  = document.getElementById("scale_inc_cb");

var count_random = document.getElementById("count_cb");
var count_inc_random = document.getElementById("count_inc_cb");

var angle_random = document.getElementById("angle_cb");
var angle_inc_random  = document.getElementById("angle_inc_cb");

var border_width_random = document.getElementById("border_width_cb");
var border_width_inc_random = document.getElementById("border_width_inc_cb");

var fill_h_random = document.getElementById("fill_h_cb");
var fill_h_inc_random  = document.getElementById("fill_h_inc_cb");

var fill_s_random = document.getElementById("fill_s_cb");
var fill_s_inc_random = document.getElementById("fill_s_inc_cb");

var fill_l_random = document.getElementById("fill_l_cb");
var fill_l_inc_random = document.getElementById("fill_l_inc_cb");


var fill_trans_random = document.getElementById("fill_trans_cb");
var fill_trans_inc_random = document.getElementById("fill_trans_inc_cb");



var border_h_random = document.getElementById("border_h_cb");
var border_h_inc_random  = document.getElementById("border_h_inc_cb");

var border_s_random = document.getElementById("border_s_cb");
var border_s_inc_random = document.getElementById("border_s_inc_cb");

var border_l_random = document.getElementById("border_l_cb");
var border_l_inc_random = document.getElementById("border_l_inc_cb");


var border_trans_random = document.getElementById("border_trans_cb");
var border_trans_inc_random = document.getElementById("border_trans_inc_cb");



output.innerHTML = slider.value;
output_number.innerHTML = slider_number.value;
angle_output.innerHTML= angle_slider.value;
ClearCanvas.addEventListener("click", ClearFunc);

slider_hue.oninput = function() {
  output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
 
}

slider_sat.oninput = function() {
  output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
}

slider_light.oninput = function() {
  output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
}

slider_hue_border.oninput = function() {
  output_HSL_border.innerHTML = 'hsl('+slider_hue_border.value+','+ slider_sat_border.value +'%,' +slider_light_border.value+'%)';
 
}

slider_sat_border.oninput = function() {
  output_HSL_border.innerHTML = 'hsl('+slider_hue_border.value+','+ slider_sat_border.value +'%,' +slider_light_border.value+'%)';
}

slider_light_border.oninput = function() {
  output_HSL_border.innerHTML = 'hsl('+slider_hue_border.value+','+ slider_sat_border.value +'%,' +slider_light_border.value+'%)';
}


angle_slider.oninput = function() {
  angle_output.innerHTML =this.value;
}



slider.oninput = function() {
  output.innerHTML = this.value;
}
slider_number.oninput = function() {
  output_number.innerHTML = this.value;
}




border_slider.oninput = function() {
  border_output.innerHTML = this.value/10;
  console.log(this.value);
}

const mouse = {
	x: null,
	y: null
}

canvas.addEventListener('click', function(event) {
    var rect =  canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
	clickX = x;
	clickY = y;
    console.log("x: " + x + " y: " + y); 
	var random = document.getElementById("random");
    if (random.checked) {
	   setRandoms();
       
    }
	animate()
}, false);


function setRandoms(){
	if (scale_random.checked){
		slider.value=Math.random()*300;
		output.innerHTML=slider.value;
	}
	if (scale_inc_random.checked){
		scale_inc.value=Math.random()*4-2;
		//output_number.innerHTML=slider.value;
	} 

	if (count_random.checked){
		slider_number.value=Math.random()*300;
		output_number.innerHTML=slider_number.value;
	}
	if (count_inc_random.checked){
		number_inc_val.value=Math.random()*5;
		//output_number.innerHTML=slider.value;
	}
	
	if (angle_random.checked){
		angle_slider.value=Math.random()*3600;
		angle_output.innerHTML = angle_slider.value;
		//output_number.innerHTML=slider.value;
	}
	
    if (border_width_random.checked){
		border_slider.value=Math.random()*100;
		//output_number.innerHTML=slider_number.value;
	}
	
	if(border_width_inc_random.checked){
		Border_width_change.value=Math.random();
		
	}
	
	if (fill_h_random.checked){
		slider_hue.value=Math.random()*200;
		output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (fill_s_random.checked){
		slider_sat.value=Math.random()*100;
		output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (fill_l_random.checked){
		slider_light.value=Math.random()*100;
		output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (fill_h_inc_random.checked){
		Hue_change.value=Math.random()*2-1;
		//output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (fill_s_inc_random.checked){
		Sat_change.value=Math.random()*2-1;
		//output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (fill_l_inc_random.checked){
		Light_change.value=Math.random()*2-1;
		//output_HSL.innerHTML = 'hsl('+slider_hue.value+','+ slider_sat.value +'%,' +slider_light.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (fill_trans_random.checked){
		slider_trans.value=Math.random()*100;
		
	}
	
	
	if (border_h_random.checked){
		slider_hue_border.value=Math.random()*200;
		output_HSL_border.innerHTML = 'hsl('+slider_hue_border.value+','+ slider_sat_border.value +'%,' +slider_light_border.value+'%)';
	}
	
	if (border_s_random.checked){
		slider_sat_border.value=Math.random()*100;
		output_HSL_border.innerHTML = 'hsl('+slider_hue_border.value+','+ slider_sat_border.value +'%,' +slider_light_border.value+'%)';
		//output_number.innerHTML=slider.value;
	}
	
	if (border_l_random.checked){
		slider_light_border.value=Math.random()*100;
		output_HSL_border.innerHTML = 'hsl('+slider_hue_border.value+','+ slider_sat_border.value +'%,' +slider_light_border.value+'%)';
		//output_number.innerHTML=slider.value;
	
	}
	
	if (border_h_inc_random.checked){
		Hue_border_change.value=Math.random()*2-1;
		
	}
	
	if (border_s_inc_random.checked){
		Sat_border_change.value=Math.random()*2-1;
		//output_number.innerHTML=slider.value;
	}
	
	if (border_l_inc_random.checked){
		Light_border_change.value=Math.random()*2-1;
		
		//output_number.innerHTML=slider.value;
	}
}
function ClearFunc(){
	console.log("pushed")
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 240;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function drawFlower(draw_number,draw_angle,draw_scale,draw_hue,stroke_hue, strokeWidth, X, Y){
	let angle = draw_angle;
	let radius = draw_scale;
	let positionX =  draw_number* Math.sin(angle) + X;
	let positionY =   draw_number*Math.cos(angle) + Y;
	ctx.fillStyle=draw_hue;
	ctx.strokeStyle=stroke_hue;
	ctx.lineWidth=strokeWidth;
	var selectedValue = $('#Shape_pick').val();
	switch (selectedValue) {
    // Your switch body here.
		  case "Circle":
		    console.log("circle");
			ctx.beginPath();
			ctx.arc(positionX, positionY,radius, 0, Math.PI*2);
			//ctx.stroke();
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			 break;
			
		  case "Square":
			console.log("square");
			ctx.beginPath();
			ctx.rect(positionX, positionY, radius, radius);
			//ctx.stroke();
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			 break;
		  case "HLine":
		     console.log("h.line");
			console.log("square");
			ctx.beginPath();
			ctx.rect(positionX, positionY, radius, 1);
			//ctx.stroke();
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			 break;
			
		  case "Cross":
			ctx.beginPath();
			ctx.rect(positionX, positionY, radius, radius/10);
			//ctx.stroke();
			ctx.fill();
			ctx.beginPath();
			ctx.rect(positionX +radius/2, positionY -radius/2, radius/10, radius);
			//ctx.stroke();
			ctx.closePath();
			ctx.fill();
			
			 break;
			 
		  case "Arrow":
		     
			ctx.beginPath();
			ctx.rect(positionX, positionY, radius, radius/10);
			ctx.stroke();
			ctx.fill();
			ctx.beginPath();
			ctx.rect(positionX +radius, positionY -radius, radius/10, radius);
			//ctx.stroke();
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			 break;
			
		  case "VLine":
   		    ctx.beginPath();
			ctx.rect(positionX, positionY, 1, radius);
			//ctx.stroke();
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			 break;
	}
	//ctx.arc(positionX, positionY,radius, 0, Math.PI*2);

	

	
}

function animate(){
	var number =0;
	var angle = 0;
	var angle_offset = parseFloat(angle_slider.value/10);
	var scale= parseFloat(slider.value/10);
	
	var hue = parseInt(slider_hue.value);
	var sat = parseInt(slider_sat.value);
	var light = parseInt(slider_light.value);
	var trans = parseFloat(slider_trans.value/100);
	
	var hue_border = parseInt(slider_hue_border.value);
	var sat_border = parseInt(slider_sat_border.value);
	var light_border = parseInt(slider_light_border.value);
	var trans_border = parseFloat(slider_trans_border.value/100);
		
		
	var draw_color= "hls()";
	var draw_color_border = 'hsla('+hue_border+','+sat_border+'%,'+light_border+'% , 0.2)';
	var stroke_hue = Math.random()*350;
	var number_limit=slider_number.value;
	var number_inc= parseFloat(number_inc_val.value);
	var hue_inc= parseFloat(Hue_change.value);
	var sat_inc= parseFloat(Sat_change.value);
	var light_inc= parseFloat(Light_change.value);
    var hue_border_inc= parseFloat(Hue_change.value);
	var sat_border_inc= parseFloat(Sat_change.value);
	var light_border_inc= parseFloat(Light_change.value);
	var scale_inc_val=parseFloat(scale_inc.value);
	//var trans_inc_val=parseFloat(trans_inc.value);
	var trans_= parseFloat(Trans_change.value);



	var strokeWidth=parseFloat(border_slider.value/10);
	while(number <number_limit){
		draw_color = 'hsla('+hue+','+sat+'%,'+light+'%,' + trans+')';
		draw_color_border = 'hsla('+hue_border+','+sat_border+'%,'+light_border+'%,' + trans_border + ')';
		drawFlower(number,angle,scale,draw_color, draw_color_border,strokeWidth,clickX, clickY);
		hue += hue_inc;
		sat += sat_inc;
		light += light_inc;
		stroke_hue+= hue_inc;
		number += number_inc;
		angle += angle_offset;
		console.log(draw_color_border);
	    scale += scale_inc_val;
		strokeWidth+= parseFloat(Border_width_change.value)//Trans_border_change;
		hue_border += parseFloat(Hue_border_change.value);
		sat_border += parseFloat(Sat_border_change.value);
		light_border += parseFloat(Light_border_change.value);
		
	}
	return;
	
	
}
// animate();
 
 