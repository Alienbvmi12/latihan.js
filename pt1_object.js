
//Object literal

var karakter = {
	nama: 'pecorine',
	umur: 17,
	power: 100,
	princessStrike : function(){
		return this.power - 20;
	}
}

//Object Function declaration

function waifu(nama, power){
	let waifu = {};
	waifu.nama = nama;
	waifu.power = power;
	waifu.serang = function(cost){
		return this.power - cost;
	}
	return waifu;
}

var koko = waifu('kokkoro', 80);

//Object Constructor function

function villain(nama, power){
	this.nama = nama;
	this.power = power;
	this.ultimate = function(){
		this.power =  this.power-(this.power*(40/100));
		return 'sisa power = '+this.power;
	}
}

var aizen = new villain('aizen', 10000);

//Object.create()

var Objsamsak = {
	pukul: function(){
		this.dura = this.dura-this.atk;
		return 'sisa dura = '+this.dura;
	}
}

function samsak(nama, dura, atk){
	let kar = Object.create(Objsamsak);
	kar.nama = nama;
	kar.dura = dura;
	kar.atk = atk;
	
	return kar;
}

var darkness = samsak('darkness', 700, 50);
	
	
//Object prototype

function pacar(nama, umur){
	this.nama = nama;
	this.umur = umur;
}
pacar.prototype.lovelv = 100;
pacar.prototype.cium = function(){
	this.lovelv = this.lovelv+50;
	return "Love level jadi = "+this.lovelv;
}

var violet = new pacar('violet', 17);

//class

class Mc{
	constructor(nama, power){
		this.nama = nama;
		this.power = power;
	}
	basicAtk(){
		this.power = this.power - 1;
		return "sisa power: "+this.power;
	}
	ultimate(){
		this.power = this.power-20;
		return "sisa power: "+this.power;
	}
}

var kirito = new Mc('kirito', 1000);

//Yang sebenarnya terjadi di belakang layar

/*

Misal kita membuat sebuah Array

let angka = [];

diubah oleh javascript menjadi ==>

let angka = new Array();

diubah oleh javascript menjadi ==>

function Array(){
	let this = Object.create(Array.prototype);
}


semua method yang biasa kita gunakan secara default sudah terisi di dalam Atribut objek prototype.

*/





