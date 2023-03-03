
/*

//Contoh arrow function

//dua+ parameter

let waifu =  (nama, umur) => "Aishteru "+nama+"-chan, walau umurmu "+umur+" tahun";

console.log(waifu('Azusa', "300"));

//satu parameter 

let waifa =  nama => "Aishteru "+nama+"-chan!!!>////<";

console.log(waifa('Azusa'));

//jika tanpa parameter harus pakai kurung, jika isi function hanya return, tidak perlu pakai {} dan return

//contoh lain

let kanojo = ['Katarina', 'Azusa', 'Fubuki'];

let kann =  kanojo.map(nama => nama.length);

for(let i = 0; i < kanojo.length; i++){
	console.log("Namanya: "+kanojo[i]+", Panjangnya: "+kann[i]);
	
}

console.log();

//Pake objek

let kann2 =  kanojo.map(nama => ({nama: nama, jumlahHuruf: nama.length}));

console.table(kann2);

*/

//Yang kedua, penerapan

const box = document.querySelector('.box');
box.addEventListener('click', function(){
	
	let satu = 'size';
	let dua = 'caption';
	
	if(this.classList.contains(satu)){
		[satu, dua] = [dua, satu];
	}
	
	this.classList.toggle(satu);
	
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});