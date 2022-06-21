const warna = ["merah", "kuning", "kelabu"];
// warna = ['putih', 'hitam', 'coklat']; // ini akan menghasilkan error karena ini akan memberikan array baru atau // Output TypeError: Assignment to constant variable
warna.push("putih"); // ini bisa dijalakan karena hanya merubah isi arranya saja
console.log(warna);

//Kelemahan lain dari deklarasi variabel menggunakan var adalah ia tidak memiliki block scoping
var nama = 'John';
var nama = 'Doe'; // ini tidak diijinkan pada ES6 'let'
console.log(nama);


//variabel yang dideklarasikan di dalam blok if-else, switch-case, while, dan for seharusnya memang tidak bisa diakses dan diubah nilainya dari luar blok tersebut
var judulBuku = "Harry Potter";

if (judulBuku === "Harry Potter") {
  var pengarang = "J.K. Rowling";
}

console.log(pengarang); // Output: J.K. Rowling

//perbadingan dengan menggunakan let
let judulBuku = "Harry Potter";

if (judulBuku === "Harry Potter") {
  let pengarang = "J.K. Rowling";
}

console.log(pengarang); // Output ReferenceError: pengarang is not defined

//penggunaan string literal
let fullName = 'John Doe';
let age = 21;

// penggunaan concatenate sangat tidak relevant untuk situasi seperti ini
let greetings = "Hallo nama saya adalah " + fullName + ". Umur saya " + age + " tahun.";
let greetings6 = `Hallo nama saya ${fullName}. Umur saya ${age}.`; // contoh penulisan string literals
console.log(greetings6);

//penggunaan operator pada string literal
let marriageValidation = `apakah saya sudah bisa memiliki SIM? ${(age >= 17)}`;
console.log(marriageValidation);

//arrow function
//fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
  };
  
  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
  // fungsi yang tidak memiliki parameter
  const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  
  console.log(namaJenisAnjing()); // Output: Pug (hasil random)

//default parameter -> untuk memberikan nilai default jika tidak diberikan nilai pada fucntion argument
function panggang(bahan = "makanannya", durasi = "yang diperlukan", suhu = "yang cocok") {
  return `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;
}
panggang("Risoles", "5 menit"); // Output: Panggang Risoles selama 5 menit pada suhu yang cocok
panggang(); // Output: Panggang makanannya selama yang diperlukan pada suhu yang cocok

//destructuring array
//gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter

//destructuring object
//sebelum ES6 kita diharuskan untuk menulis assignment satu per satu untuk tiap nilai dalam objek yang ingin dibongkar
//namun Pada Javascript ES6 kita dipersingkat dengan destructuring
let orang = {
  nama: "Joko",
  umur: 22,
  sudahMenikah: false
};

// Destrukturisasi Objek
let { nama, umur, statusMenikah } = orang;

console.log(nama); // Output: Joko
console.log(umur); // Output: 22
console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda
//jika ingin agar nama variable berbeda dari nama properti, tinggal tambahkan : lalu nama properti dan variable
let {
  namaProperti1: namaVariabelBaru1,
  namaProperti2: namaVariabelBaru2
} = namaObjek;
Contoh:
let orang = {
  name: "Joko",
  age: 22,
};

// buat variabel nama berisi nilai dari properti name pada orang
// buat variabel age berisi nilai dari properti umur pada orang
let { name: nama, age: umur } = orang;

console.log(nama); // Output: Joko
console.log(umur); // Output: 22