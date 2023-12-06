let cupcake = 3;
let cookie = 2;
let total = 120;

total = (cupcake * 50) + (cookie * 50);

/*
const role = 'manager';
if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else if (role === 'ceo') {
    console.log('СЕО');
} else {
    console.log('Иди от сюда, мы тебя не знаем!');
}


switch (role) {
    case 'manager':
        console.log('менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('СЕО');
        break;
    default:
        console.log('Иди от сюда, мы тебя не знаем!');
}

// document.querySelector('.button').addEventListener('click', function() {
//     document.querySelector('.panel').input
// });


// const newElement = document.createElement('button');
// newElement.setAttribute('user-id', 1);
// newElement.classList.add('button');
// newElement.innerText('Button');

// document.querySelector('.test').appendChild(newElement);

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input){
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    const textString = JSON.stringify({
        text: input
    });
    localStorage.setItem('text', textString);
};

switch (role) {
    case 'manager':
    case 'admin':
        console.log('не глава');
        break;
    case 'ceo':
        console.log('Глава');
        break;
    default:
        console.log('Иди от сюда, мы тебя не знаем!');
}



const num = 1;
switch(true) {
    case num > 0:
        console.log('Положительно...');
        break;
    case num < 0:
        console.log('Отрицательно...');
        break;
    default:
        console.log('Нуль...')
}

const bmwX3 = 839000;
const mersedesBENZ = 321000;
const bmx = 21000;
const budget = 40000;

let message;
if (budget > bmwX3) {
    massage = 'bmv';
} else if (budget > mersedesBENZ) {
    massage = 'mersedes';
} else {
    massage = 'велосипед';
}

console.log(`${bmwX3} стоит: `);
console.log(`${mersedesBENZ} стоит: `);
console.log(`${bmx} стоит: `);

console.log(`Я хочу купить ${massage}`);



const str = 10 > 0 ? 'gbljhfp' : '';


const res = prompt('Сколько будет 7 +/- 15  ?');
switch(true) {
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот!');
}






// const secret = 39;
const base = 12;
const speed = 2;
const iq = 110;

const level = (base + speed) * iq;
const lvl = level/100;
const yourAGEtarget = 14;

console.log('Power = ' + base);
console.log('Speed = ' + speed);
console.log('Brains = ' + iq);

console.log('У вас ' + level + ' очков');
console.log('Ваш уровень ' + lvl);
console.log('У вас ' + (lvl - yourAGEtarget) + ' преимущества над оппонентом...');





const isAdmin = true;
const canEdit = true;
console.log(`Can i edit a system file? ${isAdmin && canEdit}..`);
console.log(`Can i edit a user file? ${isAdmin || canEdit}..`);

const isEdited = true;
const isSUDO = true;
console.log(`Can you access the file? ${
    isAdmin && canEdit && (!isEdited || isSUDO)
}..`);



console.log('Vasya' || 'Oleg');
console.log(false || 'Oleg');
console.log('Vasya' || false);
console.log(false || false);
console.log('Vasya' && 'Oleg');
console.log(false && 'Oleg');
console.log('Vasya' && false);
console.log(false && false);

let a;
a = 'Marina';
const username = a || 'Petya';
console.log(username);


const filename = isAdmin && 'file.mp3';
console.log(filename);



let username = 'Vasya';
console.log(username || 'Undefined user');






____________________
Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
Он не забанен (isBanned)
Игра не куплена (isExist)
Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.

let balance = 1001;
let bonusBalance = 101;
let isBanned = false;
let isExist = true;
let isSelling = true;

const enter = (balance > 1000|| bonusBalance > 100) && (!isBanned) && (isExist) && (isSelling);

console.log(`Can buy this game - ${enter ? 'Yes' : 'No'}`);


function logName() {
    console.log('Ohh Shhiiiiiiiiit!..');
}
logName();

function userName(name, surname) {
    console.log(`My name is ${name} ${surname}`);
}
userName('Ivan', 'Dyrak');

function myBalanceForDad(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}
console.log(myBalanceForDad(39124.08, 4, 0.06) + 155);



function powerOfTwo (num) {
    return num * num;
}
console.log(powerOfTwo(3));

function powerOfDouble (num) {
    return num ** num;
}
console.log(powerOfDouble(3));

const poft1 = (num) => num * num;
console.log(poft1(6));

const poft2 = num => num * num;
console.log(poft2(6));


const toP = (num, power) => num ** power;
console.log(toP(2, 3));

const toPowerArrow = (num = 1, power = 2) => num ** power;
console.log(toPowerArrow(10000000000000));

function CanAccessWebsite(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
};
console.log(CanAccessWebsite(14));

const Can = age => age < 18 ? false : true;
console.log(Can(21));




const kgToUSD = 100;
const kmToUSD = 100;

function getW(present) {
    return present * kgToUSD;
}
function getD(distance) {
    return distance * kmToUSD;
}

function ExchangePrice(present1, present2, distance) {
    const price1 = getW(present1);
    const price2 = getW(present2);
    const price3 = getD(distance);
    return price1 + price2 + price3;
}

console.log(`Each of you will pay ${ExchangePrice(1, 1, 1) / 2}$ for this!`);


Задание для упражнения:
Пользователь:
Возраст
Наличие работы
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$?
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24-х лет и он имеет работу.
100$ если ему просто больше 24-х лет и 0 в ином случае.
Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.



function laptopCredit(age, hasJob = false) {
    switch(true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(macOS, age, money, hasJob = false) {
    const credits = laptopCredit(age, hasJob);
    return macOS <= money + credits;
}

console.log(canBuy(2000, 25, 1000, true));



const role1 = 'manager';
const role2 = 'user';
const role3 = 'VIPuser';

const roles = ['manager', 'user', 'VIPuser'];
const usrs = ['user', 'VIPuser'];
const userInfo = ['Anya', 15];


console.log(roles);
console.log(roles[3]);
console.log(userInfo);

console.log(roles.at(0));
console.log(roles.at(-1));

const ages = [2040 - 2022, 10 > 0 ? 5 : 3];
console.log(ages);

const userNames = new Array('Vasya', 'Petya', 'Katya');
console.log(userNames);

function square(el) {
    return el + el;
}
console.log(square());



const users = ['01', '01', '01'];
console.log(users);
users[0] = '02';
users[1] = '02';
users[2] = '02';
users[4] = '03';
console.log(users);

users.push('03');



const user = ['Annya', 'Viika', 'katua'];
console.log(user);
const arrLength = user.push('Nikita');
console.log(arrLength);
user.unshift('Vasuya');
console.log(user);
const el = user.pop();
console.log(el);
console.log(user);

const el2 = user.shift();
console.log(el2);
console.log(user);



const userRole = ['user', 'admin', 'f*ck up'];
// console.log(userRole.indexOf('admin'));
if (userRole.indexOf('VIPuser') >= 0) {
    console.log('Yess!');
} else {
    console.log(userRole[2]);
}

console.log(userRole.includes('admin'));
console.log(userRole.includes('VIPuser'));
if (userRole.includes('admin')) {
    console.log('Yes-s!');
} else {
    console.log(userRole[2]);
}
/*
const role = 'manager';
if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else if (role === 'ceo') {
    console.log('СЕО');
} else {
    console.log('Иди от сюда, мы тебя не знаем!');
}


switch (role) {
    case 'manager':
        console.log('менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('СЕО');
        break;
    default:
        console.log('Иди от сюда, мы тебя не знаем!');
}


switch (role) {
    case 'manager':
    case 'admin':
        console.log('не глава');
        break;
    case 'ceo':
        console.log('Глава');
        break;
    default:
        console.log('Иди от сюда, мы тебя не знаем!');
}



const num = 1;
switch(true) {
    case num > 0:
        console.log('Положительно...');
        break;
    case num < 0:
        console.log('Отрицательно...');
        break;
    default:
        console.log('Нуль...')
}

const bmwX3 = 839000;
const mersedesBENZ = 321000;
const bmx = 21000;
const budget = 40000;

let message;
if (budget > bmwX3) {
    massage = 'bmv';
} else if (budget > mersedesBENZ) {
    massage = 'mersedes';
} else {
    massage = 'велосипед';
}

console.log(`${bmwX3} стоит: `);
console.log(`${mersedesBENZ} стоит: `);
console.log(`${bmx} стоит: `);

console.log(`Я хочу купить ${massage}`);



const str = 10 > 0 ? 'gbljhfp' : '';


// const res = prompt('Сколько будет 7 +/- 15  ?');
// switch(true) {
//     case res === 'Я не робот':
//     case Number(res) === 22:
//     case Number(res) === -8:
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот!');
// }






// const secret = 39;
const base = 12;
const speed = 2;
const iq = 110;

const level = (base + speed) * iq;
const lvl = level/100;
const yourAGEtarget = 14;

console.log('Power = ' + base);
console.log('Speed = ' + speed);
console.log('Brains = ' + iq);

console.log('У вас ' + level + ' очков');
console.log('Ваш уровень ' + lvl);
console.log('У вас ' + (lvl - yourAGEtarget) + ' преимущества над оппонентом...');





const isAdmin = true;
const canEdit = true;
console.log(`Can i edit a system file? ${isAdmin && canEdit}..`);
console.log(`Can i edit a user file? ${isAdmin || canEdit}..`);

const isEdited = true;
const isSUDO = true;
console.log(`Can you access the file? ${
    isAdmin && canEdit && (!isEdited || isSUDO)
}..`);



console.log('Vasya' || 'Oleg');
console.log(false || 'Oleg');
console.log('Vasya' || false);
console.log(false || false);
console.log('Vasya' && 'Oleg');
console.log(false && 'Oleg');
console.log('Vasya' && false);
console.log(false && false);

let a;
a = 'Marina';
const username = a || 'Petya';
console.log(username);


const filename = isAdmin && 'file.mp3';
console.log(filename);



let username2 = 'Vasya';
console.log(username2 || 'Undefined user');






// ____________________
// Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
// Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// Он не забанен (isBanned)
// Игра не куплена (isExist)
// Игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат.

let balanceq = 1001;
let bonusBalance = 101;
let isBanned = false;
let isExist = true;
let isSelling = true;

const enter = (balanceq > 1000|| bonusBalance > 100) && (!isBanned) && (isExist) && (isSelling);

console.log(`Can buy this game - ${enter ? 'Yes' : 'No'}`);


function logName() {
    console.log('Ohh Shhiiiiiiiiit!..');
}
logName();

function userName(name, surname) {
    console.log(`My name is ${name} ${surname}`);
}
userName('Ivan', 'Dyrak');

function myBalanceForDad(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}
console.log(myBalanceForDad(39124.08, 4, 0.06) + 155);



function powerOfTwo (num) {
    return num * num;
}
console.log(powerOfTwo(3));

function powerOfDouble (num) {
    return num ** num;
}
console.log(powerOfDouble(3));

const poft1 = (num) => num * num;
console.log(poft1(6));

const poft2 = num => num * num;
console.log(poft2(6));


const toP = (num, power) => num ** power;
console.log(toP(2, 3));

const toPowerArrow = (num = 1, power = 2) => num ** power;
console.log(toPowerArrow(10000000000000));

function CanAccessWebsite(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
};
console.log(CanAccessWebsite(14));

const Can = age => age < 18 ? false : true;
console.log(Can(21));




const kgToUSD = 100;
const kmToUSD = 100;

function getW(present) {
    return present * kgToUSD;
}
function getD(distance) {
    return distance * kmToUSD;
}

function ExchangePrice(present1, present2, distance) {
    const price1 = getW(present1);
    const price2 = getW(present2);
    const price3 = getD(distance);
    return price1 + price2 + price3;
}

console.log(`Each of you will pay ${ExchangePrice(1, 1, 1) / 2}$ for this!`);


// Задание для упражнения:
// Пользователь:
// Возраст
// Наличие работы
// Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$?
// Он может брать не только свои деньги, но и взять кредит.
// Ему дадут 500$, только если ему больше 24-х лет и он имеет работу.
// 100$ если ему просто больше 24-х лет и 0 в ином случае.
// Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.



function laptopCredit(age, hasJob = false) {
    switch(true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(macOS, age, money, hasJob = false) {
    const credits = laptopCredit(age, hasJob);
    return macOS <= money + credits;
}

console.log(canBuy(2000, 25, 1000, true));



const role1 = 'manager';
const role2 = 'user';
const role3 = 'VIPuser';

const roles2 = ['manager', 'user', 'VIPuser'];
const usrs = ['user', 'VIPuser'];
const userInfo = ['Anya', 15];


console.log(roles2);
console.log(roles2[3]);
console.log(userInfo);

console.log(roles2.at(0));
console.log(roles2.at(-1));

const ages = [2040 - 2022, 10 > 0 ? 5 : 3];
console.log(ages);

const userNames = new Array('Vasya', 'Petya', 'Katya');
console.log(userNames);

function square(el) {
    return el + el;
}
console.log(square());



const users = ['01', '01', '01'];
console.log(users);
users[0] = '02';
users[1] = '02';
users[2] = '02';
users[4] = '03';
console.log(users);

users.push('03');



const user = ['Annya', 'Viika', 'katua'];
console.log(user);
const arrLength = user.push('Nikita');
console.log(arrLength);
user.unshift('Vasuya');
console.log(user);
const el = user.pop();
console.log(el);
console.log(user);

const el2 = user.shift();
console.log(el2);
console.log(user);



const userRole = ['user', 'admin', 'f*ck up'];
// console.log(userRole.indexOf('admin'));
if (userRole.indexOf('VIPuser') >= 0) {
    console.log('Yess!');
} else {
    console.log(userRole[2]);
}

console.log(userRole.includes('admin'));
console.log(userRole.includes('VIPuser'));
if (userRole.includes('admin')) {
    console.log('Yes-s!');
} else {
    console.log(userRole[2]);
}


const roles = ['admin', 'user', 'manager', 'VIPuser'];
console.log(roles);

const resa = roles.slice(2);
console.log(resa);

const rese = roles.slice(0, 3);
console.log(rese);

const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice();
console.log(res4);

console.log(roles);

// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

const res6 = roles.splice(2, 1);
console.log(res6);
console.log(roles);

const йa = '1';
console.log(йa);

a = '2';
console.log(a);


const ALLoperations = [100, -10, 20, -30, 50];

// 1 method
const GOODoperations = [];
for (const operation of ALLoperations) {
    if (operation > 0) {
        GOODoperations.push(operation);
    }
}
console.log(GOODoperations);

// 2 method
const GOODoperations2 = ALLoperations.filter(operation => {
    return operation > 0;
});
const BADoperations2 = ALLoperations.filter(operation => {
    return operation < 0;
});
console.log(BADoperations2);

// const Xoperations = prices.filter(operation => {
//     return operation > 0;
// });
// const Yoperations = prices.filter(operation => {
//     return operation < 0;
// });
// console.log(Xoperations - Yoperations);  

// Имеется массив изменения цен prices, где внутри
// 1й элемент массива является ценой в момент Х,
// 2й - ценой в момент Y.
// Нужно преобразовать данные в массив, где будут отображены
// только положительные изменения цен: [100, 150]


const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);

const operations = [100, -20, 7, -30, 50];
let balance = 0;
for (const  operation of operations) {
    balance += operation; }
console.log(balance);


const finalEl = operations.reduce((acc, value) => {
    return acc += value;
}, 0)
console.log(finalEl);


const minEl = operations.reduce((acc, operation) => {
    if (operation > acc) {
        return acc;
    } else {
        return operation;
    }
}, 0)
console.log(minEl);


// Найти среднее значение последоватедьности
// чисел с помощью reduce

const arr = [2, 4, 4, 10];
const middleEl = arr.reduce((acc, el, i) => {
    if (i !=arr.length - 1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0)
console.log(middleEl);

// (0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)
let element1 = 0;
let element2 = 0;
console.log(`Element1 = ${element1}`);
console.log(`Element2 = ${element2}`);
console.log(`Are they the same? (element1 = element2 ? 'yes' : 'false')`);
console.log(element1 = element2 ? 'yes' : 'false');

let element3 = 1;
let element4 = 1;
console.log(`Element3 = ${element3}`);
console.log(`Element4 = ${element4}`);
console.log(`Are they the same? (element3 = element4 ? 'yes' : 'false')`);
console.log(element3 = element4 ? 'yes' : 'false');

const arr3 = [2, 4, 4, 10, 20];
GT5element = arr3.find(el => el > 5);
GT5index = arr3.findIndex(el => el > 5);
console.log(GT5index);

// finder = arr.findIndex(el);

'Написать функцию, которая возвращает true, если элемент есть, и false, если нет.'
const arr2 = [2, 4, 4, 10, 20];
function some(array, element) {
    const res = array.find(el => el === element);
    return res == undefined ? false : true;
}
console.log(some(arr2, 2));

console.log(arr2.some(el => el === 0));

const prices2 = [[2, 3], [[3, 4], [[4, 5], [[5, 6], [[6, 7], [[7, 8], [8, 9]]]]]]];

const res0 = prices2.flat();
const res1 = prices2.flat(6);
const res2 = prices2.flatMap(el => el.concat([1]));
console.log(res0);
console.log(res1);
console.log(res2);

const users1 = ['dina', 'alim', 'bulat', 'sabit', 'latifa'];
console.log(users1);
users1.sort();
console.log(users1);

const roles = ['admin', 'user', 'manager', 'VIPuser'];
console.log(roles);

const res = roles.slice(2);
console.log(res);

const res2 = roles.slice(0, 3);
console.log(res2);

const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice();
console.log(res4);

console.log(roles);

// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

const res6 = roles.splice(2, 1);
console.log(res6);
console.log(roles);

const users2 = [100, -300, -100, 50, 480];
console.log(users2);
users2.sort();
console.log(users2);

users2.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
});
console.log(users2);

users2.sort(a, b => a - b);
console.log(users2);

console.log(new Array(3, 2));

const username = 'Vasa Pypkin';
console.log(username);
console.log(username[0]);
console.log(username[1]);
console.log(username.charAt(2));
console.log(username.length);
console.log(username.indexOf('ypv'));
console.log(username.lastIndexOf('a'));
console.log(username.includes('a'));
console.log(username.slice(5));
console.log(username.slice(4));
console.log(username.slice(5, 10));


console.log(username.slice(5, 4));
console.log(username.slice(5, 5));
console.log(username.slice(5, 6));
console.log(username.slice(5, 7));
console.log(username.slice(5, 8));
console.log(username.slice(5, 9));

const str = "Вася aka Terminator Perdinator Пупкин";


// my method
console.log(str.slice(0, 4));
console.log(str.slice(31, 37));

// his method
const finale = str.slice(0, str.indexOf(' '));
console.log(finale);
const surname = str.slice(
    str.lastIndexOf(' ') + 1,
    str.length
);
console.log(surname);

const str2 = ' Вася Пупкина';

console.log(str2.includes('п'));
console.log(str2.startsWith(' '));
console.log(str2.endsWith('н'));

console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

console.log(str2.replace('В', 'Ф'));
console.log(str2.replace('П', 'Д'));

console.log(str2.replaceAll('а', 'и'));
console.log(str2.replace(/а/g, 'и'));
// new String
// new Array

const str3 = ' Вася Пупкина \nd';

console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

// Задание: проверить является ли это номером телефона России
// верные
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
// не верные
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isRussianNumber(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll('-', '');
    num = num.replaceAll(' ', '');
    if (num.length !=11) {
        return false;
    }
    let onlyNumbers = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumbers = false;
            break;
        }
    }
    return onlyNumbers;
}

const numb = '+7 (987) 172-81-41';
console.log(`Is it a Russian number - '${isRussianNumber(numb)}',
            the number is: '${numb}'`);

const userFullName = 'Vasya Pupkin Vasilyevich';
console.log(userFullName.split(' '));
const [fn, mn, ln] = userFullName.split(' ');
console.log(fn);
console.log(mn);
console.log(ln);

const numbir = (num) => num + num;
console.log(numbir(5));


const film = 'star*';
const film2 = '*wars';
const fishtext = 'lorem ipsum dolor ambrez ip ';

console.log(film.padStart(20, '*'), film2.padEnd(20, '*'));
console.log(fishtext.repeat(4));

const card = '2342834503458353';
console.log(card.slice(-4).padStart(16, '*'));

// const na = ['Ivan', 'Pypkin', 24];
// const BybaUser = {
//     name: 'Mike',
//     surname: 'Vozalvsky',
//     age: 6,
//     skills: [
//         NaN,
//         NaN
//     ]
// };
// console.log(BybaUser);
// console.log(BybaUser.skills[0]);

// const res = prompt('Enter a user parameter');
// console.log(BybaUser[res]);

const object1 = {
    name: 'alim',
    surname: 'isakov',
    age: 14,
    skills: [
        'BJJ',
        'Judo',
        'Styypid'
    ]
}

console.log(object1);
console.log(object1.skills);
console.log(object1['skills']);

const u = [
    {name: 'Vasya', age: 30},
    {name: 'Katya', age: 18},
    {name: 'Anya', age: 40},
    {name: 'Petya', age: 25},
];

console.log(u);
console.log(u.sort((a,b)=>a.age-b.age));


const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'Dev0ps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    }
];
console.log(users);


const usersDta = users.map(user => {
    return {
        fullname: `${user.name} ${user.surname}`,
        skillNum: `${user.skills.length}`
    };
});
console.log(usersDta);


const user = {
    name: 'Griptont',
    surname: 'Kripdonitovich',
    age: 24
};
console.log(user);

// Реализовать методы увеличения и уменьшения баланса,
// при котором каждая операция сохраняется в массив
// operations в виде { reason: 'Оплата налогов', sum: -100 }.
// Возвращается true, если успешно и false, если не хватает баланса.
// Также реализовать метод вывода числа операций по кошельку

const wallet = {
    balance: 0,
    operations: [],
    add: function(reason, sum) {
        this.balance += sum;
        this.operations.push(
            {reason: reason, sum: sum}
        );
        return true;
    },
    remove: function(reason, sum) {
        if (this.balance < sum) {
            return false;
        } else {
            this.balance -= sum;
            this.operations.push(
                {reason: reason, sum: -sum}
            );
            return true;
        }
    },
    getOparationLength: function() {
        return this.operations.length;
    },
    check: function() {
        return this.balance;
    },
};

console.log(wallet.add('hello', 2000));
console.log(wallet.check());
console.log(wallet.remove('hello', 5000));
console.log(wallet.remove('hello', 1000));
console.log(wallet.check());
console.log(wallet.operations);
console.log(wallet.remove('hello', 5000));


let user = {
    name: 'j0death',
    age: 666,
    city: 'nocity'
};

const additionalData1 = {
    skills: [],
    shit: 'normal'
};

user.test = '0;';

user = {
    ...user,
    ...additionalData1
};

console.log(user);

// Сделать объект склад с методами добавления на склад,
// поиска по складу товара и расчет веса.


const warehouse = {
goods: [],
findGoodById: function (id) {
    switch (id) {
        case id = car.id:
            return car;
        case id = chair.id:
            return chair;
        case id = paper.id:
            return paper;
        default:
            return false;
    }
},
addGood: function (id, kg, name) {
    return this.goods.push(name = {
        id: id,
        weight: {
            kg: kg
            }
        });
    },
getWeightKg: function (id) {
    switch (id) {
        case id = 1:
            return car.weight.kg;
        case id = 2:
            return chair.weight.kg;
        case id = 3:
            return paper.weight.kg;
        default:
            return false;
    }
},
};

// Товары
const car = {
id: 1,
weight: {
    kg: 1000
},
brand: 'Ford'
}

const chair = {
id: 2,
weight: {
    kg: 2
}
}

const paper = {
id: 3,
color: 'red'
}

console.log(warehouse.getWeightKg(1));
console.log(warehouse.findGoodById(1));
console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.addGood(paper));

// const sum = 1;
// console.log('Start');
// console.log(sum);

// function add5(n) {
//     n = n;
//     if (n > 100) {
//         return n;
//     }
//     console.log(n);
//     return add5(n);
// }

// add5(sum);
// console.log('Ended');


console.log(b);
const a = 3;
var b = 2;
console.log(b);


addUser();
function addUser() {
    console.log('User added!');
}
addUser();



'use strict';

console.log(this);
function addNum(num1, num2) {
    console.log(this);
    return num1 + num2;
}

addNum();

const addNum2 = (num1, num2) => {
    console.log(this);
    return num1 + num2;
}

addNum2();

console.log(name);


const company = {
    name: 'OOO Agro',
    employees: {
        name: 'Sveta',
        getName: function () {
            return this.name;
        }
    },
    ceo: {
        name: 'Vasa',
        getName: function () {
            return this.name;
        }
    },
    getName: function () {
        return this.name;
    }
}

function a() {
    console.log(arguments[0]);
}
a(1);

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.getName());


const bmv = {
    mark: 'BMV',
    model: 'X5',
    year: 2022,
    damages: []
};

audi.addDamage('Tire', 1);
bmv.addDamage = audi.addDamage;
bmv.addDamage('Engine', 4);

const addDamageFunc = audi.addDamage;
addDamageFunc.call(audi, 'Wheel', 2);
addDamageFunc.apply(audi, ['Bumper', 2]);

const audi = {
    mark: 'Audi',
    model: 'A3',
    year: 2021,
    damages: []
};

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({part, rate});
        console.log(`Add a damaged ${part}, damage rate - ${rate}`);
    }
};

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Wing', 3);
console.log(audi);

function removePassword(reset) {
    if(reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    login: 'a@a.ru',
    password: '12345'
};

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user);

(function() {
    console.log('Start');
})();
*/
// Сделать функию пользователя которая берет за основу userInfo
// и за счет замыкания создает новый объект,
// с которым можно работать как user1().increase(100)

// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increase(sum) {
//         this.balance += sum;
//         this.operations++;
//     }
// };
// function user() {
//     const userObj =  userInfo;
//     return function() {
//         return userObj;
//     }
// }
// const user1 = user();
