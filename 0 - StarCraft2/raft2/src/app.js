let minerals = 0;
var enemy = 0;
let vespine = 0;
let army = 0;

let level1 = 1000;
let level2 = 500;
let level3 = 400;
let level4 = 200;
let level5 = 100;
let difficulty = level2;

function stop() {
  clearInterval(intervalID);
}
const mineralsCounter = document.getElementById('mineralsCounter');
const enemyCounter = document.getElementById('enemyCounter');
const vespineCounter = document.getElementById('vespineCounter');
const armyCounter = document.getElementById('armyCounter');
const getMinerals = document.getElementById('getMinerals');
const getVespine = document.getElementById('getVespine');
const getArmy = document.getElementById('getArmy');
const AttackBtn = document.getElementById('attack');
const looseBtn = document.getElementById('surrender-section_wrapper');

const revenge = document.getElementById('revenge');
const next = document.getElementById('next');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function restart() {
  return setTimeout(() => {
    intervalID = setInterval(function () {
      enemy++;
      enemyCounter.innerHTML = enemy;
    }, difficulty);
  }, difficulty);
}

revenge.addEventListener('click', () => {
  restart();
  enemy = 0;
  document.getElementById('backpopup1').classList.toggle('isVisible');
});

next.addEventListener('click', () => {
  restart();
  minerals = 0;
  vespine = 0;
  army = 0;
  enemy = 0;
  document.getElementById('backpopup2').classList.toggle('isVisible');
});

getMinerals.addEventListener('click', () => {
  //minerals
  minerals++;
  mineralsCounter.innerHTML = minerals;
});
getVespine.addEventListener('click', () => {
  //vespine
  vespine++;
  vespineCounter.innerHTML = vespine;
});
getArmy.addEventListener('click', () => {
  //army
  if (minerals <= 2) {
    return;
  }
  if (vespine <= 1) {
    return;
  }
  minerals = minerals - 2;
  mineralsCounter.innerHTML = minerals;
  vespine = vespine - 1;
  vespineCounter.innerHTML = vespine;
  army++;
  armyCounter.innerHTML = army;
});
AttackBtn.addEventListener('click', () => {
  //attack
  enemy = enemy - army * 2;
  army = 0;
  armyCounter.innerHTML = army;
  enemyCounter.innerHTML = enemy;
  if (enemy <= 0) {
    stop();
    document.getElementById('backpopup2').classList.toggle('isVisible');
  }
  if (enemy >= 100) {
    stop();
    document.getElementById('backpopup1').classList.toggle('isVisible');
  }
});

intervalID = setInterval(function () {
  enemy++;
  enemyCounter.innerHTML = enemy;
}, difficulty);

looseBtn.addEventListener('click', () => {
  stop();
  minerals = 0;
  vespine = 0;
  army = 0;
  enemy = 0;
  enemyCounter.innerHTML = enemy;
  armyCounter.innerHTML = army;
  mineralsCounter.innerHTML = minerals;
  vespineCounter.innerHTML = vespine;

  document.getElementById('backpopup1').classList.toggle('isVisible');
});
