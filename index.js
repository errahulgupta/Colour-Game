var numsquare=6;
var colors= generaterandomcolors(numsquare);

var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var colorpicked = pickcolor();
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquare=3;
	colors=generaterandomcolors(numsquare);
	colorpicked=pickcolor();
	colordisplay.textContent=colorpicked;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquare=6;
	colors=generaterandomcolors(numsquare);
	colorpicked=pickcolor();
	colordisplay.textContent=colorpicked;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
});

colordisplay.textContent = colorpicked;

reset.addEventListener("click",function(){
	colors= generaterandomcolors(numsquare);

	colorpicked = pickcolor();

	colordisplay.textContent = colorpicked;
	message.textContent="";
	this.textContent="New Colors";

	for(var i=0 ; i<squares.length ; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

for(var i=0 ; i < squares.length ; i++){
 	//add initial colors to square
 	squares[i].style.background = colors[i];

 	//add click listeners to square
 	squares[i].addEventListener("click", function(){
 		//grab color of clicked square
 		var colorclicked = this.style.background;
 		

 		//compare color to picked color
 		if(colorclicked === colorpicked){
 			message.textContent="Correct"
 			changecolor(colorclicked);
 			h1.style.background=colorclicked;
 			reset.textContent = "Play Again";
 		}
 		else{
 			this.style.background="#232323";
 			message.textContent="try Again;"
 		}

 	});
}

function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	var arr = [];

	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}

	return arr;

}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", "+ b +")";

}