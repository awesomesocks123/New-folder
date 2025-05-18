let num = document.getElementById("dice");
const diceResult = document.getElementById("result");
let val;
function getRandomInt() {
  return Math.floor(Math.random() * (6 - 1) + 1);
}
let dices = [];
let output = "";
for (let i = 0; i < num.value; i++) dices.push(getRandomInt());
console.log(dices);

function roll() {
  for (let i = 0; i < num.value; i++) dices.push(getRandomInt());
  console.log(dices);
  for (const dice of dices) {
    output += `<img src="dice_images/Dice-${dice}.svg" alt="Dice" class="w-30 h-30" />`;
  }
  diceResult.innerHTML = output;
  dices = [];
  output = "";
}
