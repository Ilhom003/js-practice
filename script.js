    // let person ={
    //     name:'Ilhom',
    //     age:19,
    // }

    // console.log(person) 

    // Functions

    // function great(firstName, lastName){
    //     console.log('Assalomu alaykum, ' + firstName + ' ' + lastName)
    // }
    // great('Ilhom', 'Abdulahatov');

    // function square(number){
    //     return number * number
    // }
    // let squareResult = square(2)
    // console.log(squareResult);


    // Opertors

    // let x =7;
    // let y =3;
    // console.log(x+y);
    // console.log(x-y);
    // console.log(x/y);
    // console.log(x*y);
    // console.log(x%y);
    // console.log(x**y);

    // console.log(++x);
    // console.log(x++);
    // console.log(x);

    // console.log(x--);
    // console.log(x);

    // x +=3;
    // console.log(x);

    // Solishtiruv va tenglik operatorlari

    // let x = 2;
    // console.log(x >= 1);

    // console.log('3'=== 3);
    // console.log('3'== 3);

    // x = 10;
    // y = 5;
    // console.log(x >y)

    // x=5;
    // console.log(x!== '5')

    // console.log('12' == '12');

    // Ternary shartli operatori

    // let points = 40;
    // let result = points>60 ? "O'tdi" : "O'tmadi"

    // console.log('Imtihon natijasi:', result);

    // let date = new Date()
    // let hour = date.getHours();
    // let minute = date.getMinutes();
    // console.log('Hour: ' , hour, 'Minute: ', minute);
    // let isOfficeOpen = (hour>=9 && minute>= 0)
    // console.log(isOfficeOpen)


// let color1 ="oq";
// let color2 = "qora";

// let colorTemp = color1;
// color1 = color2;
// color2 = colorTemp;

// console.log(color1);
// console.log(color2);

// let x = 7;

// if (x>=6 && x< 12){
//     console.log("Xayrli tong");
// }
// else if (x>=12 && x<18){
//     console.log("Xayrli kun");
// }
// else {
//     console.log("Xayrli kech");
// }


// let word = 'pencil';
// switch (word){
//     case 'pencil':
//         console.log('qalam');
//         break;

//         case 'book':
//         console.log('kitob');
//         break;

//         default:
//             console.log('Nomalum soz')
// }

// let word = 'pencil';

// if (word = 'pencil'){
//     console.log('qalam')
// }else if ( word = 'book'){
//     console.log('kitob')
// }else{
//     console.log('nomalum soz')
// }


// for(let i=1; i<5; i++){
//     if (i%2 !==0)
//     console.log(i);
// }

// let i=0;
// while(i<=5){
//     if (i%2 !==0)console.log(i);
//     i++
// }

// const person = {
//     name:'Ilhom',
//     age:19
// }

// for (let key in person)
// console.log(key, person[key])

// const colors = ['oq','qora', 'yashil','moviy'];
// for (let index in colors)
// console.log(index,colors[index])

// for (let color of colors)
// console.log(color)


// let number = getMax(3,2);
// console.log(number)
// function getMax(a,b){
//     if(a>b)
//     return a;
//     else
//     return b;
// }

// const number = getMax(1,2)
// console.log(number)
// function getMax(a,b){
//     if (a>b)
//     return a;
//     else (a<b)
//     return b
// }

// const lenght = isLandscape(5,6)
// console.log(lenght)
// function isLandscape(width,height) {
//     if (width>height)
//     return width;
//     else
//     return height;
// }

// let result = fizzBuzz(3)
// console.log(result)
// function fizzBuzz (input) {
//     if (typeof input !== 'number')
//     return 'Son emas';
//     if (input % 3 ===0 && input % 5===0)
//     return 'FizzBuzz';
//     if (input%3===0)
//     return 'Fizz';
//     if (input%5===0)
//     return 'Buzz'
//     return input;

// }



// const SPEED_LIMIT =70;
// const KM_PER_POINT = 5;
//  checkSpeed(70);

//  function checkSpeed(speed) {
//      if (speed <= SPEED_LIMIT)
//      console.log('ok');
//      else{
//          const points = math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);
//          if (points>=12){
//              console.log(`Guvohnoma olib qo'yiladi`);
//          }
//          else{
//              console.log(points)
//          }
//     }
//  }

// console.log(sum(10));

// function sum(limit){
//     let sum = 0;
    
//     for(let i =0; i<=limit; i++){
//         if(i % 3 ===0 || i % 5 ===0)
//         sum +=i;
//     }
    
//     return sum;
// };




// Array
// o'z ichiga turli xil data typelarni ola oladigan karobka


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.map((item, index, arr) => (
//     console.log(arr)
// ))

// data.forEach((item, index, arr) => (
//     console.log(item.company.bs)
// ))
// console.log(arr[0])


// const btn = document.querySelector('.btn')
// const container = document.querySelector('.container')
// const deletes = document.querySelector('.delete')

// btn.addEventListener('click', () => {
//     container.classList.toggle('invisible')
// })

// deletes.addEventListener('click', () => {
//     container.classList.add('invisible')
// })

// const name = 'Ilhom'
// const surname = 'Abdulakhatov'


// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     // const p = document.createElement('p')
//     // // p.classList.add('visible')
//     // p.innerHTML = 'hello world'
//     // container.appendChild(p)



//     container.innerHTML = `
//         <p>hello ${name}</p>
//         <h1>How are you doing, ${surname}?</h1>
//     `
// })




// const data = [
//     {
//         id: 1,
//         name: 'ilhom',
//         age: 19
//     },
//     {
//         id: 2,
//         name: 'islom',
//         age: 19
//     },
//     {
//         id: 3,
//         name: 'rustam',
//         age: 19
//     },
//     {
//         id: 4,
//         name: 'sulton',
//         age: 19
//     },
// ]


// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     const malumot = data.map((item) => (
//         `
//             <p>hello ${item.name}</p>
//             <p>How are you doing, ${item.age}?</p>
//         `   
//     ))
//     container.innerHTML = malumot
// })


// const data = [
//         {
//             id: 1,
//             name: 'ilhom',
//             surname: 'Abdulakhatov',
//             age: 19
//         },
//         {
//             id: 2,
//             name: 'Rustam',
//             surname: 'Abdulakhatov',
//             age: 20
//         },
//         {
//             id: 3,
//             name: 'Sherzod',
//             surname: 'Abdulakhatov',
//             age: 21
//         },
//         {
//             id: 4,
//             name: 'Sulton',
//             surname: 'Abdulakhatov',
//             age: 21
//         },
//         {
//             id: 5,
//             name: 'ilhom',
//             surname: 'Abdulakhatov',
//             age: 69
//         },
//         {
//             id: 6,
//             name: 'ilhom',
//             surname: 'Abdulakhatov',
//             age: 19
//         },
//         {
//             id: 7,
//             name: 'ilhom',
//             surname: 'Abdulakhatov',
//             age: 19
//         },
//         {
//             id: 8,
//             name: 'ilhom',
//             surname: 'Abdulakhatov',
//             age: 19
//         },
             
//     ]

// const btn = document.querySelector('.btn')
// const table = document.querySelector('table')
// const tbody = document.querySelector('tbody')

// btn.addEventListener('click', () => {
//     table.classList.toggle('invisible')
//     const student = data.map((item) => (
//         `
//             <tr>
//                 <td>${item.id}</td>
//                 <td>${item.name}</td>
//                 <td>${item.surname}</td>
//                 <td>${item.age}</td>
//                 <td><button>delete</button></td>
//             </tr>
//         `
//     ))
    

//     tbody.innerHTML = student
// })


const data = [
    {
        id:1,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    {
        id:2,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    {
        id:3,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    {
        id:4,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    {
        id:5,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    {
        id:6,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    {
        id:7,
        name:`Ilhom`,
        surname:`Abdulakhatov`,
        userName:`Ilhom03`,
        email:`abdulahatov03`,
        search: `view`
    },
    
]

 const btn = document.querySelector('.btn')
 const table = document.querySelector('table')
 const tbody = document.querySelector('tbody')

 btn.addEventListener('click', () => {
     table.classList.toggle('invisible')
     const student = data.map((item) => (
         `
             <tr>
                 <td>${item.id}</td>
                 <td>${item.name}</td>
                 <td>${item.surname}</td>
                 <td>${item.userName}</td>
                 <td>${item.email}</td>
                 <td>${item.search}</td>
                 <td><button>delete</button></td>
             </tr>
         `
     ))
     tbody.innerHTML = student
 })
