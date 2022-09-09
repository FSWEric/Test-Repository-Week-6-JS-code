// Needed to shuffle the array... this came after I built my array but had to precede the array
//Fisher-Yates (aka Knuth) Shuffle method

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
// Needed a deck of 52 cards, was easier at first to create an array of 52 elements
let deck = [
    "01-Ace of Spades", "01-Hearts", "01-Diamonds", "01-Clubs",
    "02-Spades", "02-Hearts", "02-Diamonds", "02-Clubs",
    "03-Spades", "03-Hearts", "03-Diamonds", "03-Clubs",
    "04-Spades", "04-Hearts", "04-Diamonds", "04-Clubs",
    "05-Spades", "05-Hearts", "05-Diamonds", "05-Clubs",
    "06-Spades", "06-Hearts", "06-Diamonds", "06-Clubs",
    "07-Spades", "07-Hearts", "07-Diamonds", "07-Clubs",
    "08-Spades", "08-Hearts", "08-Diamonds", "08-Clubs",
    "09-Spades", "09-Hearts", "09-Diamonds", "09-Clubs",
    "10-Spades", "10-Hearts", "10-Diamonds", "10-Clubs",
    "11-Spades", "11-Hearts", "11-Diamonds", "11-Clubs",
    "12-Queen-Spades", "12-Queen-Hearts", "12-Queen-Diamonds", "12-Queen-Clubs",
    "13-Spades", "13-Hearts", "13-Diamonds", "13-Clubs",
];
shuffle(deck);
console.log (deck);     //Log the deck to check that the deck is shuffled

// need to get a card for each player, simpler to use pop and shift to pull the first and last element for comparison
let round = 0
let player1 = 0 
let player2 = 0

while (round < 26) {

    let card1 = deck.shift();
    let cardVal1 = card1.substring(0,2);

console.log (cardVal1 + card1.substring(2,));

    let card2 = deck.pop();
    let cardVal2 = card2.substring(0,2);

console.log (cardVal2 + card2.substring(2,));


 
    if (cardVal1 > cardVal2) {          // if else statement to determine winner
        player1 ++;
        console.log("player1 Wins " + "Score " + player1 + "/" + player2);
    } else if (cardVal1 < cardVal2) {
        player2 ++;
        console.log("player2 Wins " + "Score " + player1 + "/" + player2);
    }
        else {
        console.log("Tie no points");
    }
    
round++;
    
}
    
console.log( "Player 1 score " + player1 + " Player 2 score " + player2 );
// if (player1 > player2) {
//     console.log ("Winner PLAYER 1!");
//     } else (player1 < player2) {
//         console.log ("Winner Player 2!");
//     }
console.log("Game Over " + round + " rounds played"); // logs the number of rounds played to confirm

