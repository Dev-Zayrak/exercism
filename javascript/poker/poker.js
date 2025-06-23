//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  //                0    1    2    3    4     5    6    7    8    9   10   11   12
const CARDVALUE = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export const bestHands = (hands) => {

  let bests = [];
  let straightFlushs = [];
  let fourOfAKinds = [];


  const HANDS = hands.map(hand => hand.split(" ").sort((cardOne, cardTwo) => CARDVALUE.indexOf(cardOne.slice(0, -1)) - CARDVALUE.indexOf(cardTwo.slice(0, -1))));

  //  console.log('hands', hands)
  //  console.log('HANDS', HANDS)


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
  // for (let i = 0; i < HANDS.length; i++) {
  //   if (isStraight(HANDS[i]) && isFlush(HANDS[i])){
  //     straightFlushs.push(isStraight(HANDS[i]));
  //   }
  // }
  for (const hand of HANDS) {
    if (isStraight(hand) && isFlush(hand)){
      straightFlushs.push(isStraight(hand));
    }
  }

  if (straightFlushs.length === 1) {
    return [hands[HANDS.indexOf(straightFlushs[0])]];
  }

  if (straightFlushs.length > 1) {
    let topHands = straightFlushs
      .sort((handOne, handTwo) => CARDVALUE.indexOf(handOne[0].slice(0, -1)) - CARDVALUE.indexOf(handTwo[0].slice(0, -1)))
      .filter(hand => hand[0].slice(0, -1) === straightFlushs[0][0].slice(0, -1)
    );
    for (const hand of topHands) {
      bests.push(hands[HANDS.indexOf(hand)]);
    }
    return bests.flat();
  }
  // TEST FOUR OF A KIND
  for (const hand of HANDS) {
    if (isFourOfAKind(hand)) {
      fourOfAKinds.push(isFourOfAKind(hand));
    }
  }

  if (fourOfAKinds.length === 1) {
    return [hands[HANDS.indexOf(fourOfAKinds[0])]];
  }
  if (fourOfAKinds.length > 1) {
    let topHands = fourOfAKinds
      .sort((handOne, handTwo) => CARDVALUE.indexOf(handOne[0].slice(0, -1)) - CARDVALUE.indexOf(handTwo[0].slice(0, -1)))
      .filter(hand => hand[0].slice(0, -1) === fourOfAKinds[0][0].slice(0, -1)
    );

    if (topHands.length === 1) {
      for (const hand of topHands) {
      bests.push(hands[HANDS.indexOf(hand)]);
    }
    return bests.flat(); 
    }
  
    let tops = topHands
      .sort((handOne, handTwo) => handTwo[4].slice(0, -1) - handOne[4].slice(0, -1))
      .filter(hand => hand[4].slice(0, -1) === topHands[0][4].slice(0, -1));
    for (const hand of tops) {
      bests.push(hands[HANDS.indexOf(hand)]);
    }
    return bests.flat();
  }


  // TEST FULL HOUSE

  for (const hand of HANDS) {
    isPaire2(hand)
    //if (isThreeOfAKind(hand) && isPair(hand))
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
  let color = hand[0].slice(-1);
  let indexAcesStarts = [0, 9, 10, 11, 12];
  let isAceStart = hand.map(card => CARDVALUE.indexOf(card.slice(0, -1))).filter((element, i) => element === indexAcesStarts[i]).length;

  if (isAceStart === 5) {
    return [`5${color}`, `4${color}`, `3${color}`, `2${color}`, `A${color}`];
  }
  if (CARDVALUE.indexOf(hand[0].slice(0, -1)) + 4 ===  CARDVALUE.indexOf(hand[4].slice(0, -1))) {
    return hand;
  }
}

const isFourOfAKind = hand => {
  let indexCards = hand.map(card => CARDVALUE.indexOf(card.slice(0, -1)));

  let test = indexCards.filter(index => index === indexCards[2]);

  if (test.length === 4) {
    return hand[0].slice(0, -1) === hand[3].slice(0, -1) ? hand : hand.reverse();
  }
}



const isThreeOfAKind = hand => hand.filter(card => card.slice(0, -1) === hand[2].slice(0, -1)).length === 3 ? true : false;


const isPair = hand => {
  if (hand[0].slice(0, -1) === hand[1].slice(0, -1) && hand[0].slice(0, -1) !== hand[2].slice(0, -1)) {
    return true;
  }
  if (hand[1].slice(0, -1) === hand[2].slice(0, -1) && hand[0].slice(0, -1) !== hand[3].slice(0, -1)) {
    return true;
  }
  if (hand[2].slice(0, -1) === hand[3].slice(0, -1) && hand[0].slice(0, -1) !== hand[4].slice(0, -1)) {
    return true;
  }
  if (hand[3].slice(0, -1) === hand[4].slice(0, -1)) {
    return true;
  }
  return false; 
}

const isPaire2 = hand => {
  let two = false;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].slice(0, -1) === hand[i+1].slice(0, -1) && hand[i].slice(0, -1) !== hand[i+2].slice(0, -1)) {
      two = true;
    }
  }
  return two;
}

// const isPaire = hand => {

//   if (hand.length === 1) {
//     return false;
//   }

//   if (hand.length === 2){
//     return hand[0].slice(0, -1) === hand[1].slice(0, -1) ? true : false;
//   }

//   if (hand[0].slice(0, -1) === hand[1].slice(0, -1) && hand[0].slice(0, -1) !== hand[2].slice(0, -1)) {
//     return true;
//   }
//   hand[0].slice(0, -1) === hand[2].slice(0, -1) ? hand.splice(0, 3) : hand.shift;

//   return isPaire(hand);
// } 

//BB
//BBAAA

//BC
//C
//AAA

//AABCD
//CD
//AAD
//AA


/*
  lister toutes les mains
  verifier si chaque main corresponds a la meilleure possible, et descendre 
  jusqu'a trouver la meilleure.
  Si egaliter renvoier toutes les mains egales.


  liste des mains 

    royal flush (quinte flush royale) -
    straight flush (quinte flush) -
    four of a kind (carre) -
    full house (full) -
    flush (couleur)
    straight (suite)
    three of a kind (brelan)
    two pair
    pair
    carte la plus haute


  


 */