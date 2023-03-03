<!DOCTYPE html>
<html>
	<head>
		<link href="css/bootstrap/bootstrap.css" rel="stylesheet">
		<link href="css/editor.css" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<svg xmlns="http://www.w3.org/2000/svg" style="display : none;">
		<symbol id="leftsvg" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
			<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
		</symbol>
		<symbol id="rightsvg" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
			<path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
		</symbol>
		<symbol id="flip" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8Zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0Zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793Z"/>
		</symbol>
		</svg>
	</head>
	<body>
		<div id="camera">
			<div class="mt-5 yes">
				<div class="viewer">
					<div id="wadah">
						<div class="bagan p-4 pt-5" id="mimiti">
							<h2>The result will be shown here</h2>
						</div>
					</div>
					<video width="600" height="400"></video>
				</div>
				<div>
					<center>

						
					<center>
				</div>
				<div class="wadahh container pb-3 pl-3">
					<center>
					<div style="display : flex; width : 500px; justify-content: space-between;">
						<div><button onclick="trans(false)" class="btn btn-outline-primary mt-3" style="border-radius : 100%;"><</button></div>
						<select id="type" class="form-control mb-3 mt-3" style="width : 410px;">
							<option value="png">--Select image extension--</option>
							<option value="png">PNG</option>
							<option value="jpg">JPG</option>
							<option value="jpeg">JPEG</option>
							<option value="webp">WEBP</option>
							<option value="heic">HEIC</option>
							<option value="gif">GIF</option>
							<option value="tiff">TIFF</option>
							<option value="heif">HEIF</option>
							<option value="bmp">BMP</option>
							<option value="apng">APNG</option>
							<option value="avif">AVIF</option>
							<option value="ico">ICO</option>
						</select>
						<div><button onclick="trans(true)" class="btn btn-outline-primary mt-3" style="border-radius : 100%;">></button></div>
					</div>
					</center>
					<div>
						<button id="shot" onclick="capture(); playSound('cekrek.mp3');" class="btn btn-primary m-1 mb-2" style="width : 200px;">Shot</button>
					</div>
					<hr>
					<button style="display : none;" id="save" class="btn btn-primary float-start m-1">Save All</button>
					<button type="button" class="btn btn-primary float-start m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
				</div>
			</div>
			<!-- Modal -->
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
				<div class="modal-content">
				  <div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Select Image to edit</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				  </div>
				  <div class="modal-body">
				  </div>
				  <div class="modal-footer">
					<button type="button" id="close-modal" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				  </div>
				</div>
			  </div>
			</div>
		</div>
		
		<div id="wadah-editor">
		
		</div>
		
		<div id="sound"></div>
		<script src="jquery.js"></script>
		<script src="js/bootstrap/bootstrap.js"></script>
		<script src="myScript.js"></script>
		<script>startCam();</script>
		
	</body>
</html>
	