//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const header = 'Team                           | MP |  W |  D |  L |  P'

class Team {
  constructor(name) {
    this.name = name.padEnd(31),
    this.MP = 0,
    this.W = 0,
    this.D = 0,
    this.L = 0,
    this.P = 0,
    this.printScore = `${this.name}|  ${this.MP} |  ${this.W} |  ${this.D} |  ${this.L} |  ${this.P}`
  }
}

//const poly1 = new Polygon();

export const tournamentTally = score => {

  if(!score) return header

  // console.log(paragraph.replace("Ruth's", "my"));

  let teams = score.replace(`\n`, '').split(';')

  let scores = score.split(`\n`)


  console.log(teams)


  const teamsName = new Set()

  for(let i = 0; i<scores.length; i++){
    if(scores[i] === 'win' || scores[i] === 'loss' || scores[i] === 'draw') continue
    teamsName.add(scores[i])
    //console.log(scores[i])
  }

  const setIter = teamsName.keys();

  //console.log(setIter.next().value); // "foo"
  //console.log(setIter.next().value); // "bar"
  //console.log(setIter.next().value); // "baz"

  /*

  const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

  
  convertir le string en tableau

  creer un objet TEAM pour chaque equipe avec une boucle for
  
  dans une deuxieme boucle for lui attribuer les infos (win,loss,...)

  stocker les TEAM dans un tableau TEAMS

  boucler sur le tableau TEAMS pour afficher les infos avec .printScore

  */

};
