function decimal(x){
			return x/100;
		}
		
		function px(x){
			return x/10;
		}
		
		
		const fileInput = document.querySelector("#layer"),
		filterOptions = document.querySelectorAll(".editor-button input"),
		filterName = document.getElementById("nam"),
		filterValueShow = document.getElementById("val"),
		filterSlider = document.querySelector(".editor-body .form-range"),
		rotateOptions = document.querySelectorAll(".flipper-button button"),
		viewerField = document.querySelector(".viewer-image"),
		viewerBoard = document.querySelector("#room"),
		resetFilterBtn = document.querySelector("#reset"),
		chooseImgButton = document.querySelector("#chosm"),
		saveImgBtn = document.getElementById("save"),
		widthField = document.getElementById("img-width"),
		heightField = document.getElementById("img-height");
		let themeLine = "";
		
		let resoScaleWidth, resoScaleHeight;
		
		let widthFieldFV = viewerField.naturalWidth, 
		heightFieldFV =  viewerField.naturalHeight;
		
		function resoScaleAdapt(){
			if(viewerField.naturalWidth >= viewerField.naturalHeight){
				resoScaleHeight = viewerField.naturalWidth / viewerField.naturalHeight;
				resoScaleWidth = viewerField.naturalHeight / viewerField.naturalWidth;
				widthFieldFV = viewerField.naturalWidth;
				heightFieldFV =  viewerField.naturalHeight;
				console.log(resoScaleHeight+"/"+resoScaleWidth);
			}
			else{
				resoScaleWidth = viewerField.naturalWidth / viewerField.naturalHeight;
				resoScaleHeight = viewerField.naturalHeight / viewerField.naturalWidth;
				 widthFieldFV = viewerField.naturalWidth;
				heightFieldFV =  viewerField.naturalHeight;
				console.log(resoScaleHeight+"/"+resoScaleWidth);
			}
		}
		
		resoScaleAdapt();
		
		function resolutionShow(){
			document.getElementById("img-width").value = viewerField.naturalWidth;
			document.getElementById("img-height").value = viewerField.naturalHeight;
		}
		
		let blur = 0,
			brightness = 100,
			contrast = 100,
			grayscale = 0,
			hue = 0,
			invert = 0,
			opacity = 100,
			saturate = 100,
			sepia = 0;
			
		let rotate = 0, flipHorizontal = 1, flipVertical = 1;
	
		
		resolutionShow();
			
		const applyFilter = () => {
			viewerField.style.filter = "blur("+blur/10+"px)"+
			" brightness("+brightness+"%)"+
			" contrast("+contrast+"%)"+
			" grayscale("+grayscale+"%) "+
			" hue-rotate("+hue+"deg) "+
			" invert("+invert+"%)"+
			" opacity("+opacity+"%)"+ 
			" saturate("+saturate+"%)"+ 
			" sepia("+sepia+"%)";
			viewerField.style.transform = "rotate("+rotate+"deg) scale("+flipVertical+" ,"+flipHorizontal+") ";
		}
		
		const loadImage = () => {
			let file = fileInput.files[0];
			if(!file) return;
			console.log(file);
			viewerField.src = URL.createObjectURL(file);
			setTimeout(function(){
				resolutionShow();
				resoScaleAdapt();
				viewerField.height = viewerField.naturalHeight;
				viewerField.width = viewerField.naturalWidth;
			}, 11);
		}
		
		//Filter button event
		
		filterOptions.forEach(option => {
			option.addEventListener("click", () => {
				for(let x = 0; x < 9; x++){
				document.querySelectorAll(".fliter")[x].classList.add("btn-"+themeLine+"secondary");
				document.querySelectorAll(".fliter")[x].classList.remove("btn-"+themeLine+"primary");
				option.classList.remove("btn-"+themeLine+"secondary");
				option.classList.add("btn-"+themeLine+"primary");
				filterName.innerText = option.value;
				}
				
				if(option.id === "brightness"){
					filterSlider.value = brightness;
					filterValueShow.innerText = brightness+"%";
					filterSlider.max = "700";
				}
				else if(option.id === "blur"){
					filterSlider.value = blur;
					filterValueShow.innerText = (blur/10)+"px";
					filterSlider.max = "100";
				}
				else if(option.id === "contrast"){
					filterSlider.value = contrast;
					filterValueShow.innerText = contrast+"%";
					filterSlider.max = "300";
				}
				else if(option.id === "grayscale"){
					filterSlider.value = grayscale;
					filterValueShow.innerText = grayscale+"%";
					filterSlider.max = "100";
				}
				else if(option.id === "hue"){
					filterSlider.value = hue;
					filterValueShow.innerText = hue+"°";
					filterSlider.max = "360";
				}
				else if(option.id === "invert"){
					filterSlider.value = invert;
					filterValueShow.innerText = invert+"%";
					filterSlider.max = "100";
				}
				else if(option.id === "opacity"){
					filterSlider.value = opacity;
					filterValueShow.innerText = opacity+"%";
					filterSlider.max = "100";
				}
				else if(option.id === "saturate"){
					filterSlider.value = saturate;
					filterValueShow.innerText = saturate+"%";
					filterSlider.max = "700";
				}
				else if(option.id === "sepia"){
					filterSlider.value = sepia;
					filterValueShow.innerText = sepia+"%";
					filterSlider.max = "100";
				}
				
			});
		});
		
		//Update Filter
		
		const updateFilter = () => {
			const selectedFilter = document.querySelector(".fliter.btn-"+themeLine+"primary");
			var type;
			
			if(selectedFilter.id === "blur"){
				blur = filterSlider.value;
				type = "px";
			}
			else if(selectedFilter.id === "brightness") {
				brightness = filterSlider.value;
				type = "%";
			}
			else if(selectedFilter.id === "contrast") {
				contrast = filterSlider.value;
				type = "%";
			}
			else if(selectedFilter.id === "grayscale") {
				grayscale = filterSlider.value;
				type = "%";
			}
			else if(selectedFilter.id === "hue"){
				hue = filterSlider.value;
				type = "°";
			}
			else if(selectedFilter.id === "invert"){
				invert = filterSlider.value;
				type = "%";
			}
			else if(selectedFilter.id === "opacity"){
				opacity = filterSlider.value;
				type = "%";
			}
			else if(selectedFilter.id === "saturate"){
				saturate = filterSlider.value;
				type = "%";
			}
			else if(selectedFilter.id === "sepia"){
				sepia = filterSlider.value;
				type = "%";
			}
			
			
			if(selectedFilter.id === "blur"){
				filterValueShow.innerText = (blur/10)+type;
			}
			else{
				filterValueShow.innerText = filterSlider.value+type;
			}
			applyFilter();
		
		}
		
		rotateOptions.forEach(option => {
			option.addEventListener("click", () => {
				if(option.id === "left") rotate -= 45;
				else if(option.id === "right") rotate += 45;
				else if(option.id === "horizontal") flipHorizontal = flipHorizontal === 1 ? -1 : 1;
				else if(option.id === "vertical") flipVertical = flipVertical === 1 ? -1 : 1;
				applyFilter();
				console.log(flipHorizontal);
			});
		});
		
		const resetFilter = () => {
			blur = 0;
			brightness = 100;
			contrast = 100;
			grayscale = 0;
			hue = 0;
			invert = 0;
			opacity = 100;
			saturate = 100;
			sepia = 0;
			rotate = 0;
			flipHorizontal = 1;
			flipVertical = 1;
			filterOptions[0].click();
			applyFilter();
		}
		
		const saveImage = () => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			
			canvas.width = 	widthField.value;
			canvas.height = heightField.value;
			viewerField.width = widthField.value;
			viewerField.height = heightField.value;
			console.log(canvas.width + " / " + canvas.height);
			
			ctx.filter = "blur("+blur/10+"px)"+
			" brightness("+brightness+"%)"+
			" contrast("+contrast+"%)"+
			" grayscale("+grayscale+"%) "+
			" hue-rotate("+hue+"deg) "+
			" invert("+invert+"%)"+
			" opacity("+opacity+"%)"+ 
			" saturate("+saturate+"%)"+ 
			" sepia("+sepia+"%)";
			
			ctx.translate(canvas.width/2, canvas.height/2);
			if(rotate !== 0) ctx.rotate(rotate * Math.PI / 180);
			ctx.scale(flipVertical, flipHorizontal);
			ctx.drawImage(viewerField, canvas.width/-2, canvas.height/-2, canvas.width, canvas.height);
			type = document.getElementById("type").value;
			
			const link = document.createElement("a");
			link.download = "image."+type;
			if(type === "ico") type = "x-icon";
			link.href = canvas.toDataURL("image/"+type);
			link.click();
		}
		
		fileInput.addEventListener("change", loadImage);
		filterSlider.addEventListener("input", updateFilter);
		resetFilterBtn.addEventListener("click", resetFilter);
		saveImgBtn.addEventListener("click", saveImage);
		widthField.addEventListener("input", function(){
				applyModifiedResolution(widthFieldFV, widthField.value, "width");
			});
		heightField.addEventListener("input", function(){
				applyModifiedResolution(heightFieldFV, heightField.value, "height");
			});
		
		function aniSet(){
			let ani = document.getElementById("animation");
			let selector = document.querySelectorAll("*");
			if(ani.innerText === "Animation on"){
				for(let x = 0; x < selector.length; x++){
					selector[x].style.transition = "0s";
				}
				ani.innerText = "Animation off";
				ani.classList.remove("btn-"+themeLine+"primary");
				ani.classList.add("btn-"+themeLine+"secondary");
			}
			else{
				for(let x = 0; x < selector.length; x++){
					selector[x].style.transition = "0.5s";
				}
				ani.innerText = "Animation on";
				ani.classList.add("btn-"+themeLine+"primary");
				ani.classList.remove("btn-"+themeLine+"secondary");
			}
		}
		
		function resolutionCalc(firstValue, lastValue){
			return lastValue/firstValue;
		}
		
		function applyModifiedResolution(firstValue, lastValue, type){
			console.log(firstValue+" "+lastValue);
			if(type === "width"){
				widthFieldFV = widthField.value == 0 ? 1 : widthField.value;
				if(heightField.value == 0) heightField.value = resoScaleHeight;
				else if(heightField.value == 1) heightField.value = resoScaleHeight;
				heightField.value = Math.round(heightField.value * resolutionCalc(firstValue, lastValue));
				heightFieldFV = heightField.value == 0 ? 1 : heightField.value;
			}
			else if(type === "height"){
				heightFieldFV = heightField.value == 0 ? 1 : heightField.value;
				if(widthField.value == 0) widthField.value = resoScaleWidth;
				else if(widthField.value == 1) widthField.value = resoScaleWidth;
				let stay = widthField.value * resolutionCalc(firstValue, lastValue);
				console.log(stay);
				widthField.value = Math.round(stay);
				widthFieldFV = widthField.value == 0 ? 1 : widthField.value;
			}
			
		}
		
		function darkTheme(){
			const themeCheck = document.getElementById("togca").checked;
			if(themeCheck){
				$(".tema").addClass("bg-dark");
				$("label").addClass("text-white");
				let themes = ["primary", "secondary", "success", "danger", "warning"];
				for(let i = 0; themes.length > i; i++){
					$(".btn-"+themes[i]).addClass("btn-outline-"+themes[i]);
					$(".btn-"+themes[i]).removeClass("btn-"+themes[i]);
				}
				themeLine = "outline-";
			}
			else{
				$(".tema").removeClass("bg-dark");
				$("label").removeClass("text-white");
				let themes = ["primary", "secondary", "success", "danger", "warning"];
				for(let i = 0; themes.length > i; i++){
					$(".btn-outline-"+themes[i]).addClass("btn-"+themes[i]);
					$(".btn-outline-"+themes[i]).removeClass("btn-outline-"+themes[i]);
				}
				themeLine = "outline-";
				$(".yes").css("box-shadow", "0 0 10px rgba(0,0,0,0.3)");
			}
		}
		
	
	