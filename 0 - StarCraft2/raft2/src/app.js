let minerals = 0;
var enemy = 0;
let vespine = 0;
let army = 0;
let level1 = 1000;
let level2 = 500;
let level3 = 400;
let level4 = 200;

function stop() {
  clearInterval(intervalID);
}
const mCV = document.getElementById('mineralsCounter');
const mB = document.getElementById('getMinerals');
const vCV = document.getElementById('vespineCounter');
const vB = document.getElementById('getVespine');
const aCV = document.getElementById('armyCounter');
const aB = document.getElementById('getArmy');
const eCV = document.getElementById('enemyCounter');
const attB = document.getElementById('attack');
const surrB = document.getElementById('surrender-section_wrapper');

mB.addEventListener('click', () => {
  minerals++;
  mCV.innerHTML = minerals;
});
vB.addEventListener('click', () => {
  vespine++;
  vCV.innerHTML = vespine;
});
aB.addEventListener('click', () => {
  if (minerals <= 1) {
    return;
  }
  if (vespine <= 1) {
    return;
  }
  minerals = minerals - 3;
  mCV.innerHTML = minerals;
  vespine = vespine - 1;
  vCV.innerHTML = vespine;
  army++;
  aCV.innerHTML = army;
});
attB.addEventListener('click', () => {
  enemy = enemy - army * (level2 / 100);
  army = 0;
  aCV.innerHTML = army;
  eCV.innerHTML = enemy;
  if (enemy <= 0) {
    stop();
  }
  if (enemy >= 100) {
    stop();
  }
});
intervalID = setInterval(function () {
  enemy++;
  eCV.innerHTML = enemy;
}, level2);
surrB.addEventListener('click', () => {
  stop();
  minerals = 0;
  enemy = 0;
  vespine = 0;
  army = 0;
  eCV.innerHTML = enemy;
  aCV.innerHTML = army;
  mCV.innerHTML = minerals;
  vCV.innerHTML = vespine;

  setTimeout(() => {
    intervalID = setInterval(function () {
      enemy++;
      eCV.innerHTML = enemy;
    }, level2);
  }, level2 * 10);
});
