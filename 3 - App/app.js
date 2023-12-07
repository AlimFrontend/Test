'use strict';

console.log(Date());

/*
(>_<)
(-_-)
(=_=)
(х_х)
("_")
(@_@)
(^_^)
(^-^)
(0_0)
(#_#)
(b_d)
(!_!)
(*_*)
(*-*)
(+_+)
()_()
(^w^)
('-')
('_')
(~_~)
(:_:)
[]_[]
{}_{}
(i_i)
(`-`)


class Player {
  #health;

  get getHP() {
    return this.#health;
  }

  constructor(health) {
    this.#health = health;
  }

  receveDamage(damage) {
    if (damage > this.#health) {
      return console.log(`🗣️ You are dead! Restart?`);
    }
    this.#health = this.#health - damage;
    console.log(`🗣️ You are ${damage} DMG down! You have ${this.#health} HP!`);
  }

  receveHeal(heal) {
    this.#health = this.#health + heal;
    console.log(`🗣️ Healed ${heal} HP to you) You have ${this.#health} HP!`);
  }
};

class EnemyBoss {
  #health;

  get getHP() {
    return this.#health;
  }

  constructor(health) {
    this.#health = health;
  }

  receveDamage(damage) {
    if (damage > this.#health) {
      return console.log(`💀 Dealt a Critical Hit to Boss! Boss is OVERdead!`);
    }
    this.#health = this.#health - damage;
    console.log(`⚔️ Dealt ${damage} DMG to Boss! Boss has ${this.#health} HP left!`);
  }
};

class Enemy {
  health;

  get getHP() {
    return this.health;
  }

  constructor(health) {
    this.health = health;
  }

  receveDamage(damage) {
    if (damage > this.health) {
      Player.receveHeal(5);
      return console.log(`💀 Dealt a Critical Hit to enemy! Enemy is dead!`);
    }
    this.health = this.health - damage;
    console.log(`⚔️ Dealt ${damage} DMG to enemy! Enemy has ${this.health} HP left!`);
  }
};


class Sword {
  #damage;

  get getDMG() {
    return this.#damage;
  }

  constructor(damage) {
    this.#damage = damage;
  }

  heal(player) {
    player.receveHeal(this.#damage + 1);
  }

  hitEnemy(enemy, player) {
    enemy.receveDamage(this.#damage);
    player.receveDamage(this.#damage - this.#damage / 2);
  }
  overKill(enemy) {
    enemy.receveDamage(this.#damage * 10);
  }
};


class Orge extends Enemy {
  constructor(health) {
    super(health);
  }

  receveDamage(damage) {
    if (Math.random() > 0.5) {
      if (damage > this.health) {
        Player.health + 5;
        return console.log(`💀 Dealt a Critical Hit to Orge! Orge will revenge you!...`);
      }
      this.health = this.health - damage;
      console.log(`⚔️ Dealt ${damage} DMG to Orge! Orge is angry!`);
    }
  }
};

class Shadow extends Enemy {
  constructor(health) {
    super(health);
  }

  receveDamage(damage) {
    if (Math.random() > 0.99) {
      if (damage > this.health) {
        Player.health + 10;
      }
      this.health = this.health - damage;
      console.log(`💀 You got a Hit on Shadow! Shadow melts in fury!...`);
    }
    if (Math.random() > 0.1) {
      Player.health - 1;
    }
  }
};


const goblinWeak = new Enemy(10);
const goblinMedeum = new Enemy(25);
const goblinStrong = new Enemy(50);
const goblinBoss = new EnemyBoss(100);
const orge = new Orge(55);
const shadow = new Shadow(1);
const sword = new Sword(4);
const knight = new Player(25);

console.log(`Your first enemy: "goblinWeak"! It's HP is ${goblinWeak.getHP}!`);
console.log(`Your avarage enemy: "goblinMedeum"! It's HP is ${goblinMedeum.getHP}!`);
console.log(`Your toughest enemy: "goblinStrong"! It's HP is ${goblinStrong.getHP}!`);
console.log(`Your enemy boss: "goblinBoss"! It's HP is ${goblinBoss.getHP}!`);
console.log(`Your most buff enemy: "orge"! It's HP is ${orge.getHP}!`);
console.log(`Your deadliest enemy: "shadow"! It's HP is ${shadow.getHP}!`);
console.log(`Your sword: "sword"! It's DMG is ${sword.getDMG}!`);
console.log(`You are a "knight"! Your health is ${knight.getHP}!`);

console.log('sword.hitEnemy(enemy, player);');
console.log('sword.heal(player);');
console.log('sword.overKill(enemy);');










console.log('Hello');
const flightTickets = ['Russia', 'Canada', 'Canada', 'Africa'];

const setOfFlightTickets = new Set(flightTickets);
console.log(flightTickets);
console.log(setOfFlightTickets.size);
console.log(setOfFlightTickets.has('Russia'));

for (const flightTicket of setOfFlightTickets) {
  console.log(flightTicket);
}

const myFamily = new Map();
myFamily
  .set('Dinis', 'Bronze 1')
  .set('Rumia', 'Guest')
  .set('Alim', 'Elite 1')
  .set('Dina', 'Bronze 2')
  .set('Bulat', 'Platinum 2')
  .set('Sabit', 'Bronze 3')
  .set('Latifa', 'Guest');

console.log(myFamily);



const battleShht = new Map([
  ['Alim', 'Eliter'],
  ['Bulat', 'LazyAss'],
]);

console.log(battleShht);

const weatherMapObj = new Map([
  ['Moscow', 'Capital of Russia'],
  ['London', 'Capital of Great Britain'],
  ['Rome', 'Capital of Italy'],
])
console.log(weatherMapObj);

for (const wetherMapEl of weatherMapObj) {
  console.log(wetherMapEl[0]);
  console.log(wetherMapEl[1]);
}

for (const entry of weatherMapObj) {
  console.log(entry);
}

for (const [key, value] of weatherMapObj) {
  console.log(key);
  console.log(value);
}

console.log(weatherMapObj.keys());
console.log(weatherMapObj.values());
console.log([...weatherMapObj.keys()]);
console.log([...weatherMapObj.values()]);



let weather = new Map([
  ['Key1', 'Value1'],
  ['Key2', 'Value2'],
  ['Key3', 'Value3']
])

// Realisation 1
// weather
//   .set('Key1', 'Value2')
//   .set('Key2', 'Value3')
//   .set('Key3', 'Value1');

// console.log(weather);

// Realisation 2
// let weatherMapping = new Map([...weather].map(el => el.reverse()));
// console.log(weatherMapping);


let a = {a: 1};
let b = {b: 2}; 
let set = new WeakSet([a, b]);
a = null;

console.log(set);

setTimeout(() => {
  console.log(set);
}, 1000);



function randomizer(min, max) {
  return Math.round(Math.random() * (min + max))
};

console.log(randomizer(1, 20));

// isOdd
// isEven

console.log(Number.MAX_SAFE_INTEGER);

let a = 9_007_199_254_740_991;
console.log(a);

const option1 = {
  style: 'currency',
  currency: 'RUB'
}

console.log(`Your balance is: ${new Intl.NumberFormat('ru-RU', option1).format(150000)}`);
console.log(new Intl.NumberFormat('ru-RU', option1).format(-28934));
console.log(new Intl.NumberFormat('ru-RU', option1).format(-13849));
console.log(new Intl.NumberFormat('ru-RU', option1).format(-33231));
console.log(new Intl.NumberFormat('ru-RU', option1).format(-28547));
console.log(new Intl.NumberFormat('ru-RU', option1).format(-43259));
console.log(`Now your balance is: ${150000 - 28934 - 13849 - 33231 - 28547 - 43259}`);
console.log(`
  Remember that if your balance is below zero, you are betraying the Protocol,,,
  You have "blb yf[eq lfey ,kznm j[etdibq!" the Protocol, have a nice day!
`);

const time = new Date();

console.log(time.getTime());
console.log(Date().getFullYear(3000));

const dateShit = new Date();
const dateShit1 = new Date(2024, 10, 10);
const dateShit2 = new Date(2024, 10, 12);
function getDaysBetweenDates(date1, date2) {
  return (date1 - date2) / (1000 * 60 * 60 * 24)
}

console.log(`You have ${getDaysBetweenDates(dateShit2, dateShit1)} days left!`);


function checkYourPass(you, yourPass) {
  if (yourPass > 9) {
    return console.log(`${you}, you are strong enough to pass!`);
  } else {
    return console.log(`${you}, you are too weak to pass!`);
  }
}

checkYourPass('Alim', 1);

let letter = 'hello, my name is ****';

function remake(shit) {
  shit.replace('hello', 8900);
  shit.replace('my', 23);
  shit.replace('name', 1769);
  shit.replace('is', 45);
  return console.log(shit);
}

console.log(remake(letter));


const user1 = {
  name: 'Nita',
  aa: '01/11/2023'
};

function checkBirthday(userData) {
  const birthday = new Date(userData.aa);
  const now = new Date();
  if (birthday.getMonth() !== now.getMonth()) {
    return false;
  }
  if (birthday.getDate() !== now.getDate()) {
    return false;  
  }
  return true;
}

console.log(checkBirthday(user1));

setTimeout(() => {
  console.log('Boom 1, 2, 3, 4, 5!');
}, 3200);
setTimeout(() => {
  console.log('Boom 1, 2, 3, 4, 5!');
}, 3400);
setTimeout(() => {
  console.log('Boom 1, 2, 3, 4, 5!');
}, 3600);
setTimeout(() => {
  console.log('Boom 1, 2, 3, 4, 5!');
}, 3800);

const mark1 = performance.now();
setTimeout(() => {
  const mark2 = performance.now();
  console.log(mark2 - mark1);
}, 100);

function pizzaTimerWithForCycle(ms1) {
  for (let i = ms1; i > -1; i--) {
    console.log(`00:0${i}...`);
  }
  console.log('🍕!!!');
}
console.log(pizzaTimerWithForCycle(5));


function pizzaTimerWithSetInterval(ms2) {
  const end = new Date().getTime() + ms2;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        minute: 'numeric',
        second: 'numeric'
      }).format(new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log('🍕!!!');
  }, ms2);
}
console.log(pizzaTimerWithSetInterval(5));

const a = [1];
console.dir(a);

const User = function(email, password) {
  this.email = email;
  this.password = password + '-41-81';
}
const user1 = new User('f@k.ru', '8-987-172');
console.log(user1);


const Book = function(title, author, ratio) {
  this.title = title;
  this.author = author;
  this.ratio = ratio;
  this.isRead = false;
};

Book.prototype.read = function() {
  this.isRead = true;
}


const TLOTR = new Book('Lord Of The Ring', 'J. R. R. Tolkien', '5.0⭐');
console.log(TLOTR);
console.log('Reading the book ........................................................... Finished reading!');
TLOTR.read();
console.log(TLOTR);


const product = {id: 1, name: 'Bread', count: 1};
const Cart = function() {
  this.products = [];
};

Cart.prototype.addProduct = function(product) {
  if (this.products.find(product => product.id === product.id)) {
    return;
  }
  this.products.push(product);
};
Cart.prototype.increaseAmount = function(id) {
  this.products = this.products.map(product => {
    if (product.id === id) {
      product.count++;
      return product;
    }
    return product;
  });
};
Cart.prototype.deincreaseAmount = function(id) {
  this.products = this.products.map(product => {
    if (product.id === id) {
      product.count--;
      return product;
    }
    return product;
  }).filter(product => product.count > 0);
};



const cart = new Cart();
cart.addProduct(product);
console.log(cart);


class BookClass {
  isGood;
};


class Car {
  #vin;
}

const car = new Car;
console.log(car);



// Реализовать класс пользователя, со свойствами - логин - пароль.
// Причем пароль при установке должен переворачиваться и в таком виде храниться.
// Пароль и логин после создания изменить нельзя.
// Так же у класса добавить методы.
// - Смены пароля (передаем старый и новый пароль)
// - Сверки пароля 

class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join('');
  }
  get #password() {
    return this.#_password.split('').reverse().join('');
  }
  get login() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }
  changePassword(oldPass, newPass) {
    if(!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const user = new User('a@a.ru', '123');
console.log(user);

let challenge = 'shit';
const life = challenge;
console.log(`life is ${life}`);

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products');
request.send();

request.addEventListener('load', function() {
  const {products} = JSON.parse(this.responseText);
  console.log(products);
  const sum = products.reduce((acc, p) => acc += p.price, 0);
  console.log(sum / products.length);
});

const player = {
  nickName: 'Karina',
  hitPoints: 100
};

function shootPlayer(player, damage) {
  player.hitPoints -= damage;
  if (player.hitPoints < 10) {
    return console.log(`${player.nickName}, u have lost ${damage} HP.. Only ${player.hitPoints} HP left!!!`);
  } else if (player.hitPoints < 50) {
    return console.log(`${player.nickName}, u have lost ${damage} HP.. ${player.hitPoints} HP left(`)
  } else {
    return console.log(`${player.nickName}, u have lost ${damage} HP.. ${player.hitPoints} HP left)`)
  }
};
// shootPlayer(player, 16);
// shootPlayer(player, 70);
// shootPlayer(player, 9);

function createSelect(array) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select>
  ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
  </select>`
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
  .then(response => response.json())
  .then(data => createSelect(data))
  .catch(error => console.error(`Problem: ${error}`))
}

getCategories();


function getData(url) {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
}



getData('https://dummyjson.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
  .then( ({ products }) => {
    console.log(products);
    return getData('https://dummyjson.com/products/' + products[0].id)
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    const el = document.querySelector('.filter');
    el.innerHTML = error.message
  });


  console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(3).then((res) => console.log(res));

console.log(4);


-стихи-


function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();


    request.addEventListener('load', function() {
      resolve(this.responseText);
    });

    request.addEventListener('error', function() {
      reject(new Error(this.status));
    });

    request.addEventListener('timeout', function() {
      reject(new Error('timeout'));
    });
  })
}

myFetch('https://dummyjson.com/products')
.then(data => console.log(data))
.catch(err => console.error(err));


function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longtitude: coords.longtitude,
        })
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longtitude } = await getMyCoordinates();
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude${latitude}&longtitude${longtitude}`);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}


getMyCity()



const dummies = [
  {
    name: 'bulat',
    brains: false
  },
  {
    name: 'sabit',
    brains: false
  }
]

console.log(dummies);


function fuckHim(array, name) {
  return console.log(`${name} got fucked up (>_<)`);
}


fuckHim(dummies, 'bulat');
console.log(dummies);



function ыщьуерштп(эйцукенэ) {
    let куы = эйцукенэ;
    console.log(куы);
};


function random(min, max) {
  return console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
random(8, 23);


const wrapper = document.querySelector('.wrapper');

async function getActivity() {
  const res = await fetch('https://www.boredapi.com/api/activity');
  return res.json();
}

async function generate() {
  try {
    wrapper.innerHTML = '';
    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity()
    ]);
    console.log(data);
    for (const el of data) {
      const element = document.createElement('div');
      element.innerHTML = `${el.activity}`;
      wrapper.appendChild(element);
    }
  } catch(e) {
    console.error(e);
  }
}




*/




function generate(event) {
  console.log(`scrollX: ${window.scrollX}`);
  console.log(`scrollY: ${window.scrollY}`);
  console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`clientHeight: ${document.documentElement.clientHeight}`);
};