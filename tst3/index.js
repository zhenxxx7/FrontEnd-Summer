//oop
const mobil = {
    merk: 'Toyota',
    tipe: 'Avanza',
    tahun: 2019,
    warna: 'Hitam',
    harga: 1000000,
    print: function () {
        console.log(`${this.merk} ${this.tipe} ${this.tahun} ${this.warna} ${this.harga}`);
    }   //end print
}
mobil.print();
//class
class Mobil {
    constructor(merk, tipe, tahun, warna, harga) {
        this.merk = merk;
        this.tipe = tipe;
        this.tahun = tahun;
        this.warna = warna;
        this.harga = harga;
    }
    print() {
        console.log(`${this.merk} ${this.tipe} ${this.tahun} ${this.warna} ${this.harga}`);
    }
}
let mobil1 = new Mobil('Toyota', 'Avanza', 2019, 'Hitam', 1000000);
mobil1.print();

//inheritance
class MobilSport extends Mobil {
    constructor(merk, tipe, tahun, warna, harga) {
        super(merk, tipe, tahun, warna, harga);
    }
    print2() {
        console.log(`${this.merk} ${this.tipe} ${this.tahun} ${this.warna}` + ' status = sold out');
    }
}
let mobil2 = new MobilSport('Lamborghini', 'Aventador', 2020, 'Merah', 25000000);
mobil2.print();
mobil2.print2();
