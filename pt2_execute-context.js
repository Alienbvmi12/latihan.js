//Cari di google visualizer javascript yang akan menampilkan bagaimana sebenarnya javascript bekerja


	//Closure

	function salam(waktu){
		return function(nama){
			console.log(waktu+" "+nama);
		}
	}
	
	var pagi = salam('Ohayou');
	var siang = salam('Kongbangwa');
	var malam = salam('Oyasuminasai');
	
	malam('Rayhan');
	
	//contoh closure 2
	
	let tambah = function(){
		let number = 0;
		return function(){
			return ++number;
		}
	}
	
	var numba = tambah();
	
	console.log(numba());
	console.log(numba());
	console.log(numba());
	console.log(numba());
	console.log(numba());
	
	//Function tanpa nama
	
	(function(){
		let lis = 88;
		console.log(lis);
	}());