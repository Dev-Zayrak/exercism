//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  //                0    1    2    3    4     5    6    7    8    9   10   11   12
const CARDVALUE = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export const bestHands = (hands) => {

  let bests = [];
  let straightFlushs = [];


  const HANDS = hands.map(hand => hand.split(" ").sort((cardOne, cardTwo) => {
    let a = CARDVALUE.indexOf(cardOne.slice(0, -1));
    let b = CARDVALUE.indexOf(cardTwo.slice(0, -1));
    return a - b;
  }));

  console.log('hands', hands)
  console.log('HANDS', HANDS)


  // TEST ROYAL FLUSH
  for (const hand of HANDS) {
    if (isRoyalFlush(hand)) {
      bests.push(hands[HANDS.indexOf(hand)]);
    }
  }
  if (bests.length > 0) {
    return bests.flat();
  }



  // TEST STRAIGHT FLUSH
  for (let i = 0; i < HANDS.length; i++) {
    if (isStraight(HANDS[i]) && isFlush(HANDS[i])){
      straightFlushs.push(HANDS[i]);
    }
  }

  if (straightFlushs.length === 1) {
    return [hands[HANDS.indexOf(straightFlushs[0])]];
  }
  if (straightFlushs.length > 1) {
    let topHands = straightFlushs
      .sort((handOne, handTwo) => handTwo[0].slice(0, -1) - handOne[0].slice(0, -1))
      .filter(hand => hand[0].slice(0, -1) === straightFlushs[0][0].slice(0, -1)
    );

    for (const hand of topHands) {
      bests.push(hands[HANDS.indexOf(hand)]);
    }
    return bests.flat();
  }


  // TEST FOUR OF A KIND
  for (const hand of HANDS) {
    //if ()
  }


 

  
  
};

const isRoyalFlush = hand => {
  let perfectSuite = hand.reduce((acc, card, index) => acc + (card.slice(0, -1) === CARDVALUE[index] ? 1 : 0), 0);

  if (perfectSuite === 5 && isFlush(hand)) {
    return hand;
  }
};


const isFlush = hand => hand.filter(card => card.slice(-1) === hand[0].slice(-1)).length === 5 ? true : false;

const isStraight = hand => {
  let indexCards = hand.map(card => CARDVALUE.indexOf(card.slice(0, -1)));
  let indexAcesStarts = [0, 9, 10, 11, 12];
  let isAceStart = indexCards.filter((element, i) => element === indexAcesStarts[i]).length;

  if (isAceStart === 5) {
    return hand;
  }

  let sumOfIndex = indexCards.reduce((acc, cv) => acc + cv);
  let sumOfIndexIfStraight = indexCards[0] * 5 + 1 + 2 + 3 + 4;

  if (sumOfIndex === sumOfIndexIfStraight){
    return hand;
  }
}

const isFourOfAKind = hand => {
  let indexCards = hand.map(card => CARDVALUE.indexOf(card.slice(0, -1)));

  let test = indexCards.filter(index => index === indexCards[2]);

}

/*
  lister toutes les mains
  verifier si chaque main corresponds a la meilleure possible, et descendre 
  jusqu'a trouver la meilleure.
  Si egaliter renvoier toutes les mains egales.


  liste des mains 

    royal flush (quinte flush royale)
    straight flush (quinte flush)
    four of a kind (carre) -
    full house (full)
    flush (couleur)
    straight (suite)
    three of aa kind (brelan)
    two pair
    pair
    carte la plus haute


  


 */