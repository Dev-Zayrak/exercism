//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CARDVALUE = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

export const bestHands = (hands) => {

  let bests = [];

  const HANDS = hands.map(hand => hand.split(" ").sort((cardOne, cardTwo) => {
    let a = CARDVALUE.indexOf(cardOne.slice(0, -1));
    let b = CARDVALUE.indexOf(cardTwo.slice(0, -1));
    return a - b;
  }));

  console.log('test =', HANDS)
  console.log(HANDS[0]);

  // manipuler chaque main pour tester sa 'valeur'
  //console.log(HANDS[0].cardOne.charAt(1));
  

  for (const hand of HANDS) {
    if (isRoyalFlush(hand)){
      bests.push(hands[HANDS.indexOf(hand)]);
    }
  }

  if (bests.length > 0){
    return bests.flat();
  }
  
};

// a la fin utiliser .SLICE() pour retourner le ou les meilleurs mains ?

// methode qui permet de tester si une main est quinte flush royale
// si QFR retourne vrai sinon faux
const isRoyalFlush = hand => {
  let perfectSuite = hand.reduce((acc, card, index) => acc + (card.slice(0, -1) === CARDVALUE[index] ? 1 : 0), 0);

  if (perfectSuite === 5 && isFlush(hand)){
    return hand
  }
};

const isFlush = hand => hand.filter(card => card.slice(-1) === hand[0].slice(-1)).length === 5 ? true : false;



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