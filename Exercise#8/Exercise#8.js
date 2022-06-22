//Buatlah sebuah class bernama Orang
//Buatlah constructor yang memiliki parameter berupa properti yaitu nama dan umur. Di dalam constructor, assign parameter nama ke dalam variabel nama dengan keyword this di depan variabelnya. Lalu assign parameter umur ke dalam variabel umur dengan keyword this di depan variabelnya
//Buatlah method bernama bekerja di luar blok kode constructor yang mengembalikan data string `${this.nama} sedang bekerja seperti biasa`Buatlah method bernama bekerja di luar blok kode constructor yang mengembalikan data string `${this.nama} sedang bekerja seperti biasa`
//Di luar blok kode class, buatlah sebuah objek bernama user1 sebagai instance dari class Orang. Isi argumen parameter nama dan umur,sesuai dengan nama dan umur anda
//Lakukan console.log() pada method bekerja() melalui objek user1 yang telah dibuat sebelumnya. Cek pada tab Console untuk melihat data

class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja() {
        return `${this.nama} sedang bekerja seperti biasa`;
    }
}
let user1 = new Orang('Jordy', 19);
console.log(user1.bekerja());

//Buatlah sebuah class bernama Orang. Buatlah constructor yang memiliki parameter berupa properti yaitu nama dan umur. Di dalam constructor, assign parameter nama ke dalam variabel nama dengan keyword this di depan variabelnya. Lalu assign parameter umur ke dalam variabel umur dengan keyword this di depan variabelnya
//Buatlah method bernama tidur di luar blok kode constructor yang mengembalikan data string `${this.nama} sedang tidur`. Buatlah method bernama makan di luar blok kode constructor yang mengembalikan data string `${this.nama} sedang makan`
//Buatlah class Pelajar yang meng-extends dari class Orang
//Buatlah constructor yang memiliki parameter nama, umur, dan namaSekolah
//Di dalam constructor, tambahkan kode method super() yang memiliki argumen nama dan umur
//Buatlah properti namaSekolah menggunakan keyword this
//Assign properti namaSekolah dengan parameter namaSekolah yang dimiliki oleh constructor
//Di luar blok kode constructor, buatlah method bernama belajar yang mengembalikan nilai string `${this.nama} belajar di ${this.namaSekolah}`
//Di luar blok kode class, buatlah instance objek dari class Pelajar bernama user. Berikan argumen "John", 17, dan "Unklab"
//Lakukan console.log() pada variabel user. Cek pada tab Console untuk melihat data

class Orang1 {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    tidur() {
        return `${this.nama} sedang tidur`;
    }
    makan() {
        return `${this.nama} sedang makan`;
    }
}
class Pelajar extends Orang1 {
    constructor(nama, umur, namaSekolah) {
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar() {
        return `${this.nama} belajar di ${this.namaSekolah}`;
    }
}
let user = new Pelajar('John', 17, 'Unklab');
console.log(user.belajar());
