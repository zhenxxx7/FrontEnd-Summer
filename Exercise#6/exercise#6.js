// Rest Operator
// Rest Operator digunakan untuk menyimpan semua nilai dalam parameter ke sebuah array
// Contoh Penerapan Rest Operator pada parameter
const foo = (...params) => {
  console.log(params);
};

foo("A", "B", "C"); // Output: ["A", "B", "C"]

// Rest parameter juga bisa digunakan saat ada parameter lain pada fungsi yang sama
const bar = (param1, param2, ...params) => {
    console.log("pertama ", param1);
  console.log("kedua ", param2);
  console.log("Sisa ", params);
}

bar("A", "B", "C", "D", "E"); // Output: "A", "B", ["C", "D", "E"]

// pada dasarnya, rest parameter hanya bisa digunakan pada parameter terakhir dari fungsi dan hanya bisa ada satu parameter dalam sebuah fungsi
// jika tidak maka akan muncul error
// contohnya
const bum = (par1, ...pars, par2) => {
    console.log(par1);
    console.log(pars);
    console.log(par2);
} //output: SyntaxError: Rest parameter must be last formal parameter

//Spread Operator
//Spread Operator digunakan untuk memecah array menjadi elemen-elemen

let arrybil = [1, 2, 3, 4, 5];

// contoh tidak menggunakan spread operator
console.log(arrybil); //outputnya : [1, 2, 3, 4, 5]

//contoh dengan mengunnakan spread operator
console.log(...arrybil); //outputnya : 1 2 3 4 5

// saat menggunakan spread operator, maka array yang akan dipecahkan menjadi elemen-elemen dan outputnya bukan lagi array
// dengan spread operator, kita bisa membuat array duplicate
let arrybil2 = [...arrybil];
console.log(arrybil2); //outputnya : [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// bisa juga menggabungkan array dengan spread operator
let arrybil3 = [1, 2, 3, 4, 5];
let arrybil4 = [...arrybil3, 6, 7, 8];
console.log(arrybil4); //outputnya : [1, 2, 3, 4, 5, 6, 7, 8]

//spread operator juga memecahkan object pasangan properti-properti yang membentuknya
//contoh 
let orang = {
    nama : "john",
    umur : 30
}
//untuk menambahkan properti baru
orang.pekerjaan = "programmer";
orang.pendidikan = "S1";

//atau juga bisa dengan
let orang2 = {...orang, pekerjaan: "programmer", pendidikan: "S1"};

//untuk menggabungkan object
const obj1 = { a : 1, b : 2 };
const obj2 = { c : 3, d : 4 };
const obj3 = object.assign({}, obj1, obj2);
console.log(obj3); //outputnya : {a: 1, b: 2, c: 3, d: 4}

//bisa juga menggunakan
const obj4 = {...obj1, ...obj2};
console.log(obj4); //outputnya : {a: 1, b: 2, c: 3, d: 4}

// module 
// module merupakan sebuah file yang berisi kode JavaScript yang dapat diimpor ataupun di ekspor
// contoh penerapan module
// module yang dibuat dengan module.exports = {};
// module yang dibuat dengan module.exports.nama = "nama";
// module yang dibuat dengan module.exports.nama = function(){};
// module yang dibuat dengan module.exports.nama = () => {};
// module yang dibuat dengan module.exports.nama = class {};
// module yang dibuat dengan module.exports.nama = class {
//     constructor(){}
//     method(){}
// }

export let nama = "john";

export let people = {
    nama : "john",
    umur : 30
}

//export default
//export default merupakan sebuah keyword yang digunakan untuk mengatur sebuah nilai default yang akan diimpor ataupun di ekspor
//contoh
export default function say hello(user){
    console.log(`hello, ${user}`);
}

//import
import {nama, people, say} from "./exercise#6.js";

//import as
//import as digunakan untuk mengambil nama yang ingin di import
//contoh
import {nama as namaSaya} from "./exercise#6.js";