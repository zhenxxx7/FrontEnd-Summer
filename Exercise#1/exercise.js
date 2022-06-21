//Contoh menamakan variable dengan menggunakan camelCase
let namaVariabel1 = "hello";
const namaVariabel2 = "world";

// Contoh penulisan nama variabel yang benar
let nama;
let tempatTinggal;
let _nomorHandphone;
let $nomorAkunBank;

// Contoh penulisan nama variabel yang salah
let makanan pembuka; //tidak boleh ada spasi
let @username; //tidak boleh diawali dengan @
let delete; //delete itu merupakan kata kunci di JavaScript

//mendeklarasikan variabel
let nama = "Stefanus";
const namaIbuKandung = "Clara";
const umur = 20;
const apakahSudahMenikah = false;
let jumlahAnak;

// memberi nilai baru kepada variabel nama
nama = "Albert";

// memberi nilai baru kepada variabel namaIbuKandung tadi
namaIbuKandung = "Juliana";

// akan muncul error
Uncaught TypeError: Assignment to constant variable.

//menampilkan output di console
let nama = "Budi";
let umur = 20;
let apakahSudahMenikah = false;
let jumlahAnak;

// Cobalah buka tab console di developer tools browser anda
console.log(nama); // output: Budi
console.log(umur); // output: 20
console.log(apakahSudahMenikah); // output: false
console.log(jumlahAnak); // output: undefined


//-------------------------------------------------------------------------------
//arithmetic operator
//contoh operator penjumlahan
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 + bilangan2); // Output: 13

//contoh operator pengurangan
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 - bilangan2); // Output: 7

//contoh operator perkalian
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 * bilangan2); // Output: 30

//contoh operator pembagian
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 / bilangan2); // Output: 3.3333333333333335

//contoh operator pemangkatan
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 ** bilangan2); // Output: 1000

//contoh operator modulus
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 % bilangan2); // Output: 1

//contoh operator Increment/tambah 1
let bilangan = 10;
Bilangan++; 

console.log(bilangan); // Output: 11

//contoh berikut sama dengan di atas namun dituliskan tanpa operator
let bilangan = 10;

bilangan = bilangan + 1;

console.log(bilangan); // output: 11

//contoh operator Decrement/ kurang 1
let bilangan = 10;

bilangan--;

console.log(bilangan); // output: 9

//contoh berikut sama dengan di atas namun dituliskan tanpa operator
let bilangan = 10;

bilangan = bilangan - 1;

console.log(bilangan); // output: 9

//-----------------------------------------------------------------------------x
//assignment operator
//contoh assigment =
let nama = "Budi";
let umur = 20;
let apakahSudahMenikah = false;
let jumlahAnak;

console.log(nama); // Output: Budi
console.log(umur); // Output: 20
console.log(apakahSudahMenikah); // Output: false
console.log(jumlahAnak); // Output: undefined

//contoh Addition Assignment +=
let bilangan = 10;

bilangan += 5;

console.log(bilangan); // Output: 15

//contoh Subtraction Assignment -=
let bilangan = 10;

bilangan -= 5;

console.log(bilangan); // Output: 5

//contoh Multiplication Assignment *=
let bilangan = 10;

bilangan *= 5;

console.log(bilangan); // Output: 50

//contoh Division Assignment /=
let bilangan = 10;

bilangan /= 5;

console.log(bilangan); // Output: 2

//contoh Modulus Assignment %=
let bilangan = 10;

bilangan %= 5;

console.log(bilangan); // Output: 0

//contoh Exponent Assignment **=
let bilangan = 10;

bilangan **= 5;

console.log(bilangan); // Output: 100000

//-----------------------------------------------------------------------------
//String operator
//contoh operator +
let namaDepan = "Albert";
let namaBelakang = "Einstein";

console.log(namaDepan + " " + namaBelakang); // Output: Albert Einstein

//contoh operator +=
let kata = "Halo ";

kata += "Dunia";

console.log(kata); // Output: Halo Dunia

//contoh jika kita menggabungkan string dengan number maka akan menghasilkan string
let kata = "Kambing ada ";
let bilangan = 5;

console.log(kata + bilangan); // Output: Kambing ada 5


//-----------------------------------------------------------------------------
//relational operator
//contoh operator == /loose equality
let bilangan = 10;

console.log(bilangan == 10); // Output: true
console.log(bilangan == 8); // Output: false
console.log(bilangan == "10"); // Output: true

console.log("3.14" == 3.14) // Output: true

//contoh operator === /strict equality
let bilangan = 10;

console.log(bilangan === 10); // Output: true --> nilai dan tipe data sama
console.log(bilangan === "10"); // Output: false --> nilai sama tetapi tipe data tidak sama

//contoho operator !=
let bilangan = 10;

console.log(bilangan != 8); // Output: true --> nilai tidak sama tetapi tipe data sama
console.log(bilangan != "8"); // Output: true --> nilai dan tipe data tidak sama
console.log(bilangan != 10); // Output: false --> nilai dan tipe data sama
console.log(bilangan != "10"); // Output: false --> nilai sama tetapi tipe data tidak sama

//contoh operator !==
let bilangan = 10;

console.log(bilangan !== 8); // Output: true --> nilai tidak sama tetapi tipe data sama
console.log(bilangan !== "8"); // Output: true --> nilai dan tipe data tidak sama
console.log(bilangan !== 10); // Output: false --> nilai dan tipe data sama
console.log(bilangan !== "10"); // Output: true --> nilai sama tetapi tipe data tidak sama

//operator lebih dari
let bilangan = 10;

console.log(bilangan > 10); // Output: false
console.log(bilangan > 11); // Output: false
console.log(bilangan > 8); // Output: true

//operator kurang dari
let bilangan = 10;

console.log(bilangan < 10); // Output: false
console.log(bilangan < 8); // Output: false
console.log(bilangan < 11); // Output: true

//operator lebih dari atau sama dengan
let bilangan = 10;

console.log(bilangan >= 10); // Output: true
console.log(bilangan >= 8); // Output: true
console.log(bilangan >= 11); // Output: false

//operator kurang dari atau sama dengan
let bilangan = 10;

console.log(bilangan <= 10); // Output: true
console.log(bilangan <= 11); // Output: true
console.log(bilangan <= 8); // Output: false

//operator ternary
let makanan = "daging";

let jenisHewan = makanan === "daging"  ? "karnivora" : "herbivora";

console.log(jenisHewan); // Output: "karnivora"


//------------------------------------------------------------------------------
//contoh penggunaan operator logika
let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 && bilangan2 < 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 === 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 < 4); // Output: false

console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true


//-----------------------------------------------------------------------------
//cara mendeklarasikan fungsi

// Fungsi yang berdiri sendiri
function namaFungsi(){
    // Kode yang akan dijalankan
  }
  
  // Fungsi yang disimpan di dalam variabel
  let namaVariabelFungsi = function(){
    // Kode yang akan dijalankan
  }

  //cara memanggil fungsi
  namaFungsi();

  namaVariabelFungsi();

//contohnya
// Fungsi yang berdiri sendiri
function sapa() {
    return "Selamat Pagi!";
  }
  
  console.log(sapa()); // Output: Selamat Pagi!
  
  // Fungsi disimpan di dalam variabel
  
  let berkenalan = function() {
    return "Hallo, nama saya John."; //ini akan mengembalikan sebuah nilai ke tempat dimana fungsi dipanggil
  };
  
  console.log(berkenalan()); // Output: Hallo, nama saya John.

  console.log(berkenalan() + " nama kamu siapa?")

  console.log("Hallo, nama saya John." + " nama kamu siapa?") //ini hanya menampilkan informasi ke dalam console

//contoh fungsi yang tidak memiliki return
  let umur = 21;

function ulangTahun() {
    umur += 1;
}

console.log(ulangTahun()); // Output: undefined
//jika tidak ada return maka output atau nilai yang dikembalikan akan undefined


//-----------------------------------------------------------------------------
//contoh parameter dan argument
function operasiPerkalian(angka1, angka2){ //parameter harus berupa number agar dapat dikelola
    return angka1 * angka2;
  }
  
  console.log(operasiPerkalian(2, 6)) // Output: 12


  //contoh function hosting
  console.log(operasiPerkalian(5, 5)); // Output: 25

function operasiPerkalian(angka1, angka2) {
  return angka1 * angka2;
}

//dicontoh ini function hosting tidak berlaku karena fungsi di deklarasikan kedalam variable
console.log(operasiPerkalian(5, 5)); // Output: Uncaught ReferenceError: Cannot access 'operasiPerkalian' before initialization

const operasiPerkalian = function(angka1, angka2) {
  return angka1 * angka2;
};


//-----------------------------------------------------------------------------
//contoh lingkup global dari sebuah variable
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball


//-----------------------------------------------------------------------------
//contoh lingkup lokal dari sebuah variable
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi'; // lingkup fungsi
  const noMessi = 10; // lingkup fungsi
  if (olahraga === 'basketball') { 
     atlet = 'Kobe Bryant';
     const noKobe = 24; // lingkup blok
     console.log(noMessi); // Output: 10  
  }
  console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();