// //async adalah library untuk mengambil data dari server
// //contoh async.js
// // async function getData(){
// //     let data = await fetch("https://jsonplaceholder.typicode.com/users");
// //     let dataJson = await data.json();
// //     return dataJson;
// // }
// // console.log(getData());

// //asynchronous javascript adalah sebuah bahasa pemrograman yang menggunakan asynchronous method yang mengambil data dari server
// //contoh penggunaan asynchronous javascript adalah dengan menggunakan library async.js 

// //prommise
// //promise adalah sebuah object yang menyimpan data yang akan di return dari asynchronous method 
// //contoh
// let condition = true;
// let promise = new Promise((resolve, reject) => {
//     if(condition){
//         resolve("success");
//     }
//     else{
//         reject("error");
//     }
// });
// // promise.then(result => {
// //     console.log(result);
// // }
// // ).catch(error => {
// //     console.log(error);
// // });

// //async/await
// //async/await adalah sebuah syntax y yang digunakan untuk mengambil data dari server
// //contoh
// const getData = async () => {
//     try
//     {
//         const res = await new Promise;
//         console.log(res);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// getData();

//fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

//axios
(async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
})();
