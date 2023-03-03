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
		<symbol id="link-logo" viewBox="0 0 16 16">
			<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
			<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
		</symbol>
		</svg>
	</head>
	<body class="tema">
	<br>
		<div id="toggle-canvas-pos">
		<center>
			<label class="switch">
				<input type="checkbox" id="togca" onclick="darkTheme()">
				<span class="slider"></span>
			</label>
		</center>
		</div>
		<div class="yes-vessel">
			<div class="yesu"></div>
			<div class="yesa"></div>
			<div class="yes tema">
				<div id="room" class="viewer" style="width : 100%; height : 400px;">
					<img class="viewer-image" src="lumine.jpg">
				</div>
				<br>
				<div class="container">
					<div class="input-group">
						<button class="btn btn-success" id="chosm" onclick="$('#layer').click();">Choose Image</button>
						<button id="save" class="btn btn-primary">Save</button>
						<button id="crop" class="btn btn-warning">Crop</button>
						<button id="reset" class="btn btn-danger">Reset filter</button>
						<button id="animation" class="btn btn-primary d-inline" onclick="aniSet()">Animation on</button>
						<select id="type" class="form-control d-inline" style="cursor : pointer;">
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
					</div>
					<input type="file" style="display : none;" accept="image/*" id="layer">
					<hr>
					<div class="row">
						<div class="col-2">
							<label>Resolution</label>
						</div>
						<div class="col-4">
							<input type="number" id="img-width" class="form-control">
						</div>
						<div class="col-1">
							<svg class="mt-1" width="30" height="30"><use xlink:href="#link-logo"/></svg>
						</div>
						<div class="col-4">
							<input type="number" id="img-height" class="form-control">
						</div>
					</div>
					
					<hr>
					<div class="d-inline-flex">
						<div class="edit-menu">
							<div class="editor-button">
								<input type="button" class="btn fliter btn-primary mb-1" value="blur" id="blur">
								<input type="button" class="btn fliter btn-secondary mb-1" value="brightness" id="brightness">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="contrast" id="contrast">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="grayscale" id="grayscale">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="hue" id="hue">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="inversion" id="invert">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="opacity" id="opacity">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="saturation" id="saturate">
								<input type="button" class="btn btn-secondary mb-1 fliter" value="sepia" id="sepia">
							</div>
							
						</div>
						<div class="edit-menu">
							<div class="flipper-button">
								<button class="btn btn-dark mb-1" style="width : 45px;" id="left">
									<svg class="bi me-2" width="20" height="20" style="filter : invert(1);"><use xlink:href="#leftsvg"/></svg>
								</button>
								<button class="btn btn-dark mb-1" style="width : 45px;" id="right">
									<svg class="bi me-2" width="20" height="20" style="filter : invert(1);"><use xlink:href="#rightsvg"/></svg>
								</button>
								<button class="btn btn-dark mb-1" style="width : 45px;" id="horizontal">
									<svg class="bi me-2" width="20" height="20" style="filter : invert(1);"><use xlink:href="#flip"/></svg>
								</button>
								<button class="btn btn-dark mb-1" style="width : 45px;" id="vertical">
									<svg class="bi me-2" width="20" height="20" style="transform : rotate(90deg);filter : invert(1);"><use xlink:href="#flip"/></svg>
								</button>
							</div>
						</div>
					</div>
					<br>
					<br>
					<div class="editor-body">
						<label id="nam">Blur</label> : <text id="val">0px</text>
						<input type="range" class="form-range" min="0" max="100" value="0">
					</div>
				</div>
				<br>
			</div>
		</div>
		
		<div id="shiso"></div>
		<!-- Modal -->
		
		<div id="sound"></div>
		<script src="js/bootstrap/bootstrap.js"></script>
		<script src="js/myEditorScript.js"></script>
	</body>
</html>
	