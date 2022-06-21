//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Buatlah sebuah function bernama helloWorld. Di dalam function, tambahkan return statement new Promise. Isi parameter Promise dengan callback function yang memiliki parameter resolve. Di dalam Promise, tambahkan method setTimeOut. Isi parameter pertama setTimeOut dengan callback function yang berisi resolve string "Hello World!". Argumen kedua berisi durasi time out sebesar 2000.
//Panggil function messages di luar blok kode function messages yang sudah dibuat. Statement string Hello World! akan keluar setelah 2 detik. Cek pada tab Console untuk melihat data
//Buatlah sebuah async function bernama messages. Di dalam function, buatlah sebuah variabel bernama msg dan isi dengan statement await helloWorld(). Lakukan console.log() variabel msg di dalam function messages.
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    });
}
async function messages() {
    let msg = await helloWorld();
    console.log(msg);
}
messages();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Buatlah sebuah function bernama ambilDataUser()
//Gunakan fetch() untuk mengambil data dari end-point API berikut "https://reqres.in/api/users” 
// Gunakan promise untuk melakukan fetch(). Tambahkan .then() di bawah kode fetch(). Isi parameter .then() berupa callback function yang memiliki argumen bernama response.Di dalamnya lakukan return terhadap response dan gunakan method .json()
// Tambahkan .then() yang kedua di bawah kode then() yang pertama. Isi parameter .then() berupa callback function yang memiliki argumen bernama users. Di dalamnya lakukan console.log() terhadap variabel users. (note: yg tampilkan key ‘data’ saja)
// Panggil function ambilDataUser() di luar blok kode function ambilDataUser. Cek pada tab Console untuk melihat data.
function ambilDataUser() {
    let promise = new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            resolve(users);
        })
        .catch(err => {
            reject(err);
        });
})
return promise;
}
ambilDataUser().then(users => {
console.log(users);
}
).catch(err => {
console.log(err);
}
);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Ubahlah fungsi ambilDataUser( ) yang sudah dikerjakan di nomor 2 dengan menggunakan Async Await
async function ambilDataUser() {
    let response = await fetch('https://reqres.in/api/users');
    let users = await response.json();
    console.log(users.data);
}
ambilDataUser();
