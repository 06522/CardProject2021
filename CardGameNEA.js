/* This code was written by Katie MacQuillin in 2021.
This is a 2 player card game where the objective is to get the most cards by winning each round.
It is a game of luck. This code should compare the cards drawn by the players to see who wins.*/

//This subroutine is used to generate a random number from 0 to the parameter
function randomInRange(max) {
  return Math.floor(Math.random() * max);
}

//This subroutine is used to shuffle the elements within the array cards by swapping pairs
function shuffle(cards) {
  for (let n = 0; n < 30; n++) {
    colour1 = randomInRange(3);
    colour2 = randomInRange(3);
    num1 = randomInRange(10);
    num2 = randomInRange(10);
    card1 = cards[colour1][num1];
    card2 = cards[colour2][num2];
    //lines 20,21 and 22 swap the elements within the array
    temp = card1;
    card1 = card2;
    card2 = temp;
    cards[colour1][num1] = card1;
    cards[colour2][num2] = card2;
  }
  return cards;
}

//This subroutine is used to order a deck of cards
function populate(cards) {
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
  return cards;
}

const cards = [[],[],[]];
console.log(populate(cards));
console.log(shuffle(cards));