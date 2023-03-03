 //video
		function startCam(){
			var video = document.querySelector('video');
			navigator.mediaDevices.getUserMedia({ video: true}).then(function(stream) {
				video.srcObject = stream;
				video.onloadedmetadata = function(e) {
					video.play();
				};
				video.style.transform = 'scaleX(-1)';
			}).catch(function(err) {
				console.log("The following error occurred: " + err.name);
				alert("Mohon untuk izinkan akses!!");
			});
			return video;
		}
		
		//capture
		let curr = {nilai : 0};
		
		function capture(){
			let type = document.getElementById("type").value;
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			canvas.width = 475;
			canvas.height = 400;
			// Draw the video frame to the canvas
			context.scale(-1, 1);
			context.drawImage(startCam(), -canvas.width, 0, canvas.width, canvas.height);

			// Convert the canvas to a data URL
			if(type == "ico") type = "x-icon";
				var dataURL = canvas.toDataURL('image/'+type);

				// Create a link element to trigger a download
				var link = document.createElement('a');
				
				document.getElementById("wadah").innerHTML += "<img src=\""+dataURL+"\" class=\"bagan\"\">";
				
				//remove info
				
				removeElm("mimiti");
				
				//tampilkan list gambar yang telah diambil
				
				tampilGambar(dataURL, type);
				
				var conp = document.getElementsByClassName("bagan").length - 1;
				runTrans(conp);
				curr.nilai = conp;
				
				var save = document.getElementById("save");
				save.style.display = "block";
				save.addEventListener("click", function(){
					if(type == "x-icon") type = "ico";
					link.download = 'image.'+type;
					link.href = dataURL;
					link.click();
					});	
		}
		
		
		function trans(act){
			let count = document.getElementsByClassName("bagan");
			countElm = count.length - 1;
			let current = curr.nilai;
			if(act == true){
				if(current == countElm){
					curr.nilai = 0;
				
					count[curr.nilai].style.transform = "translateX(0)";
					count[curr.nilai].style.filter = "opacity(1)";
					count[countElm].style.transform = "translateX(200px)";
					count[countElm].style.filter = "opacity(0)";
					
				}
				else{
					curr.nilai++;
					let yus = curr.nilai - 1;
					count[curr.nilai].style.transform = "translateX(0)";
					count[curr.nilai].style.filter = "opacity(1)";
					count[yus].style.transform = "translateX(200px)";
					count[yus].style.filter = "opacity(0)";
					
				}
			}
			else if(act == false){
				if(current == 0){
					curr.nilai = countElm;
					
					count[curr.nilai].style.transform = "translateX(0)";
					count[curr.nilai].style.filter = "opacity(1)";
					count[0].style.transform = "translateX(-200px)";
					count[0].style.filter = "opacity(0)";
					
				}
				else{
					curr.nilai--;
					let yus = curr.nilai + 1;
				
					count[curr.nilai].style.transform = "translateX(0)";
					count[curr.nilai].style.filter = "opacity(1)";
					count[yus].style.transform = "translateX(-200px)";
					count[yus].style.filter = "opacity(0)";
				}
			}
			console.log(curr.nilai);
		}
		
		function runTrans(req){
			$(".bagan").css("filter", "opacity(0)");
			document.getElementsByClassName("bagan")[req].style.filter = "opacity(1)";
		}
		
		
		function playSound(soundfile){
			let snd = new Audio(soundfile);
			snd.play();
		}
		
		function removeElm(element){
			if(document.contains(document.getElementById(element))){
				document.getElementById(element).remove();
			}
		}
		
		function summoned(url){
			$.ajax({
				type: "POST",
				dataType: "html",
				url: "js/dataEditorPage.html",
				success: function(data) {
					$("#wadah-editor").html(data);
					setTimeout(function(){
					document.querySelector(".viewer-image").src = url;
					}, 110);
					document.getElementById("camera").style.display = "none";
					document.getElementById("close-modal").click();
				}
			});
		}
		
		function tampilGambar(data,type){
			document.querySelector(".modal-body").innerHTML +=
			"<div class=\"img-ted\" onclick=\"summoned('"+data+"')\"><img src=\""+data+"\" width=\"50px\""+
			"style=\"border-radius : 5px; transform : scaleX(-1);\" class=\"m-2\">."+type+"</div>";
		}
		
		function minTog(){
			document.getElementById("fored").classList.toggle("min");
		}
		
		function saveCanvas(){
			let canvas = document.getElementById("room");
			let link = document.createElement("a");
			link.download = 'image.png';
			link.href = canvas.toDataURL("image/png");
			link.click();
		}
		function editor(act, type){
			let val = document.getElementById(act).value;
			if(type == '') val = val/100;
			if(type == 'px') val = val/10;
			if(type == 'deg') type = "°";
			document.getElementById(act+"-val").innerText = " "+val+type;
			//filter();
		}
		
		
		//For Image Editor
		
		
		
		
		
		