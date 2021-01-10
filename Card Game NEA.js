function randomInRange(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(cards) {
  for (let n = 0; n < 30; n++) {
    colour1 = randomInRange(3);
    colour2 = randomInRange(3);
    num1 = randomInRange(10);
    num2 = randomInRange(10);
    card1 = cards[colour1][num1];
    card2 = cards[colour2][num2];
    temp = card1;
    card1 = card2;
    card2 = temp;
    cards[colour1][num1] = card1;
    cards[colour2][num2] = card2;
  }
  return cards;
}

const cards = [[],[],[]];
let colour = "";
let num = "";
for (let a = 0; a < 3; a++) {
  if (a == 0) {
    colour = "red";
  } else if (a == 1) {
    colour = "black";
  } else {
    colour = "yellow";
  }
  for (let i = 0; i < 10; i++) {
    num = (i+1).toString();
    cards[a][i] = num + " of " + colour;
  }
}

console.log(cards);
console.log(shuffle(cards));