 	let editorCanvas = {
			canvas : document.getElementById("fored"),
			start : function(){
				this.context = this.canvas.getContext("2d"); 
			}
		}
		
		function component(image, x, y) {
			this.x = x;
			this.y = y;    
			this.img = new Image;
			this.img.src = image;
			this.update = function() {
				ctx = editorCanvas.context;
				ctx.save();
				ctx.translate(this.x, this.y);        
				ctx.rotate(90);
				ctx.drawImage(img, 0, 0, this.img.width, this.img.height, 0, 0, 600, 400);
				ctx.restore();    
			}
		}
		
		function rotate(){
			let canvas = document.querySelector("#fored");
			const rotate = canvas.style.transform = "rotate("+document.getElementById("rotate").value+"deg) "+
			"rotateX("+document.getElementById("rotateX").value+"deg) "+
			"rotateY("+document.getElementById("rotateY").value+"deg) "+
			"skewX("+document.getElementById("skewX").value+"deg) "+
			"skewY("+document.getElementById("skewY").value+"deg) "+
			"scaleX("+document.getElementById("scale").value+"%) "+
			"scaleY("+document.getElementById("scale").value+"%) "+
			"translateX("+px(document.getElementById("translateX").value)+"px) "+
			"translateY("+px(document.getElementById("translateY").value)+"px) "
			;
		}
		
		function ctxPos(){
			
		}
		
		
		function toggleCanvasPos(){
			let me = document.getElementById("room").style.position;
			if(me == "absolute"){
				document.getElementById("room").style.position = "relative";
			}
			else{
				document.getElementById("room").style.position = "absolute";
			}
			console.log(me);
		}
		
		function placeImg(){
			let canvas = document.querySelector("canvas");
			let ctx = canvas.getContext("2d");
			let img = new Image;
			img.src = "901101.png";
			ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 600, 400);
			return dataURL = canvas.toDataURL("image/png");
		}
		
		dragElement(document.getElementById("room"));

		function dragElement(elmnt) {
		  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		  
		elmnt.onmousedown = dragMouseDown;

		  function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		  }

		  function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		  }

		  function closeDragElement() {
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		  }
		}
		
		function saveCanvas(){
			let canvas = document.querySelector("canvas");
			let link = document.createElement("a");
			link.download = 'image.png';
			link.href = canvas.toDataURL("image/png");
			link.click();
		}
		/*
		<hr>
				<label for="scale">Scale :</label><text id="scale-val"> 100%</text>
				<input type="range" id="scale" class="form-range" min="0" max="1000" value="100" oninput="editor('scale', '%')">
				<label for="translateX">Position-x :</label><text id="translateX-val"> 0px</text>
				<input type="range" id="translateX" class="form-range" min="-10000" max="10000" value="0" oninput="editor('translateX', 'px')">
				<label for="translateY">Position-y :</label><text id="translateY-val"> 0px</text>
				<input type="range" id="translateY" class="form-range" min="-10000" max="10000" value="0" oninput="editor('translateY', 'px')">
				<label for="rotate">Rotate :</label><text id="rotate-val"> 0°</text>
				<input type="range" id="rotate" class="form-range" min="0" max="360" value="0" oninput="editor('rotate', 'deg')">
				<label for="rotateX">Rotate-x :</label><text id="rotateX-val"> 0°</text>
				<input type="range" id="rotateX" class="form-range" min="0" max="360" value="0" oninput="editor('rotateX', 'deg')">
				<label for="rotateY">Rotate-y :</label><text id="rotateY-val"> 0°</text>
				<input type="range" id="rotateY" class="form-range" min="0" max="360" value="0" oninput="editor('rotateY', 'deg')">
				<label for="skewX">Skew-x :</label><text id="skewX-val"> 0°</text>
				<input type="range" id="skewX" class="form-range" min="0" max="360" value="0" oninput="editor('skewX', 'deg')">
				<label for="skewY">Skew-y :</label><text id="skewY-val"> 0°</text>
				<input type="range" id="skewY" class="form-range" min="0" max="360" value="0" oninput="editor('skewY', 'deg')">