"use strict"

// function playFootball(player, callback){
//     console.log(`Name of player ${player}`);
//     callback()
// }

// function goals(){
//     console.log("His shot 100 goals");
// }

// playFootball("MoSalah", goals)


// const text = "Hello world"

// // console.log(text[2])
// console.log(text.toUpperCase())
// console.log(text.indexOf("d"));
// console.log(text.slice(6,11));

// const number = 4.3;
// console.log(Math.round(number));

// const borderWidth = "12.8px"
// console.log(parseInt(borderWidth));



/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - $ {ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */

// let numberOfNews;

// function startProject() {
//   numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

//   while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
//     numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
//   }
// }
// startProject();

// const personalNewsDB = {
//   count: numberOfNews,
//   news: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberNews() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
//       b = prompt("Unga qancha baho bergan bo'lar edingiz?");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalNewsDB.news[a] = b;
//       console.log("tayyor");
//     } else {
//       console.log("Error");
//       i--;
//     }
//   }
// }

// rememberNews();

// function showPesonalLevel() {
//   if (personalNewsDB.count < 10) {
//     console.log("Juda oz sonli yangiliklar o'qilibdi");
//   } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
//     console.log("Siz klassik tomoshabinsiz");
//   } else if (personalNewsDB.count >= 30) {
//     console.log("Siz yangilklar ishqibozisiz");
//   } else {
//     console.log("Xato yuz berdi");
//   }
// }
// showPesonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalNewsDB);
//   }
// }
// showMyDB(personalNewsDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalNewsDB.genres[i - 1] = prompt(
//       `Sizning sevimli janringiz nomeri ${i}`
//     );
//   }
// }
// writeYourGenres();