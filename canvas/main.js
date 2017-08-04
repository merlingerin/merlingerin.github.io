	window.onload = function() {
	    var theCanvas = document.getElementById('Canvas2');
	    if(theCanvas && theCanvas.getContext) {
	    	var ctx = theCanvas.getContext("2d");
	    	if(ctx) {

				//Blue guide line
				ctx.strokeStyle = "cyan";
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(50, 25);
				ctx.lineTo(50, 175);
				ctx.moveTo(450, 25);
				ctx.lineTo(450, 175);
				ctx.stroke();

				//Black line lineCap

				ctx.lineWidth = 25;
				ctx.strokeStyle = "black";
				ctx.lineCap = "butt";
				ctx.beginPath();
				ctx.moveTo(50,50);
				ctx.lineTo(450,50);
				ctx.stroke();
				ctx.lineCap = "round";
				ctx.beginPath();
				ctx.moveTo(50,100);
				ctx.lineTo(450,100);
				ctx.stroke();
				ctx.lineCap = "square";
				ctx.beginPath();
				ctx.moveTo(50, 150);
				ctx.lineTo(450, 150);
				ctx.stroke();
		}	    	
	}
	var theCanvas = document.getElementById('Canvas3');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {
			ctx.lineWidth = 15;
			ctx.strokeStyle = "black";
			ctx.lineJoin = "round";
			ctx.beginPath();
			ctx.moveTo(25, 150);
			ctx.lineTo(75, 50);
			ctx.lineTo(125, 150);
			ctx.stroke();
			ctx.save();

			ctx.lineWidth = 15;
			ctx.strokeStyle = "green";
			ctx.lineJoin = "round";
			ctx.lineJoin = "bevel";
			ctx.beginPath();
			ctx.moveTo(175, 150);
			ctx.lineTo(225, 50);
			ctx.lineTo(275, 150);
			ctx.stroke();

			ctx.restore();
			ctx.lineJoin = "miter";
			ctx.miterLimit = 1;
			ctx.beginPath();
			ctx.moveTo(325, 150);
			ctx.lineTo(375, 50);
			ctx.lineTo(425, 150);
			ctx.stroke();

			// ctx.lineCap = "round";
			// ctx.beginPath();
			// ctx.arc(150, 350, 100,  Math.PI, 4 * Math.PI);
			// ctx.stroke();
			// ctx.lineCap = "round";
			// ctx.beginPath();
			// ctx.arc(290, 350, 100,  Math.PI, 4 * Math.PI);
			// ctx.stroke();
			// ctx.lineCap = "round";
			// ctx.beginPath();
			// ctx.arc(430, 350, 100,  Math.PI, 4 * Math.PI);
			// ctx.stroke();
			// ctx.lineCap = "round";
			// ctx.beginPath();
			// ctx.arc(580, 350, 100,  Math.PI, 4 * Math.PI);
			// ctx.stroke();

			for (var i = 0, j = 150; i < 4; i++) {
				ctx.lineCap = "round";
				ctx.beginPath();
				ctx.arc(j, 350, 100,  Math.PI, 4 * Math.PI);
				ctx.stroke();
				j += 130;
			}

		}
	}
}

// window.onload = function() {
// 	var theCanvas2 = document.getElementById('Canvas2');
// 	if (theCanvas2 && theCanvas2.getContext) {
// 		var ctx2 = theCanvas2.getContext("2d");
	
// 	}
// }

// if(ctx) {
// 	    		// ctx.fillStyle = "green";
// 	    		// ctx.fillRect(20,20,150,150);

// 	    		// ctx.lineWidth = 5;
// 	    		// ctx.strokeStyle = "rgba(0,0,255,1)";
// 	    		// ctx.strokeRect(23,23,100,100);

// 	    		ctx.strokeStyle = "blue";
// 	    		ctx.lineWidth = "5";
// 	    		ctx.strokeRect(25,25,150,125);

// 	    		ctx.fillStyle = "green";
// 	    		ctx.fillRect(185,25,100,125);

// 	    		ctx.strokeStyle = "blue";
// 	    		ctx.fillStyle = "yellow";
// 	    		ctx.lineWidth = 5;
// 	    		ctx.strokeRect(185, 200, 100, 100);
// 	    		ctx.fillRect(185, 200, 100, 100);

// 	    		ctx.strokeStyle = "black";
// 	    		ctx.lineWidth = 10;
// 	    		ctx.strokeRect(190, 205, 90, 90);

// 	    		ctx.clearRect(15, 75, 450, 50);

// 	    		for (var i = 0; i < 10; i++) {

// 	    			ctx.beginPath();
// 	    			ctx.lineWidth = i+1;
// 	    			ctx.moveTo(25, 350 +i * 15);	
// 	    			ctx.lineTo(475, 350 +i* 15);	
// 	    			ctx.stroke();
// 	    		} 


// 		}