//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const header = 'Team                           | MP |  W |  D |  L |  P'

class Team {
  constructor(name) {
    this.name = name,//.padEnd(31),
    this.W = 0,
    this.D = 0,
    this.L = 0,
    this.MP = 0,
    this.P = 0,
    this.printScore = '${this.name}|  ${this.MP} |  ${this.W} |  ${this.D} |  ${this.L} |  ${this.P}'
  }
}

//const poly1 = new Polygon();

export const tournamentTally = score => {

  if(!score) return header

  // console.log(paragraph.replace("Ruth's", "my"));

  let teams = score.replaceAll(/\b(win|loss|draw|\n)\b/g, '').split(';')
  teams.pop()

  const teamsNames = new Set(teams)
  //console.log(teams)

  const uniqueTeams = [...teamsNames].map(name => new Team(name))


  //console.log(uniqueTeams)
  

  const scores = score.replaceAll('\n', ';').split(';')
  //console.log(scores)

  for(let i = 0; i<scores.length-2; i+=3){

    // ne fonctionne pas car le nom dans l'objet contient des espaces a la fin

    if(scores[i+2] === 'win'){
      let winnerTeam =  uniqueTeams.find(team => team.name === scores[i])
      //console.log(winnerTeam)
      winnerTeam.W += 1
      let looserTeam = uniqueTeams.find(team => team.name === scores[i+1])
      looserTeam.L +=1
    }

    if(scores[i+2] === 'loss'){
      let winnerTeam =  uniqueTeams.find(team => team.name === scores[i+1])
      winnerTeam.W += 1
      let looserTeam = uniqueTeams.find(team => team.name === scores[i])
      looserTeam.L +=1
    }

    if(scores[i+2] === 'draw'){
      let firstTeam =  uniqueTeams.find(team => team.name === scores[i])
      firstTeam.D += 1
      let secondTeam = uniqueTeams.find(team => team.name === scores[i+1])
      secondTeam.D +=1
    }
    
  }

  uniqueTeams.forEach(team => team.MP = team.W+team.D+team.L)
  uniqueTeams.forEach(team => team.P = 3*team.W+team.D)
  uniqueTeams.forEach(team => team.printScore = '\n'+`${team.name.padEnd(31)}|  ${team.MP} |  ${team.W} |  ${team.D} |  ${team.L} |  ${team.P}`)
  //console.log('=========================')
  //console.log(uniqueTeams)

  let output = "Team                           | MP |  W |  D |  L |  P"

  //console.log(uniqueTeams)

  uniqueTeams.forEach(team => output += team.printScore)

  console.log(output)
  return output

  /*

  
  convertir le string en tableau

  creer un objet TEAM pour chaque equipe avec une boucle for
  
  dans une deuxieme boucle for lui attribuer les infos (win,loss,...)

  stocker les TEAM dans un tableau TEAMS

  boucler sur le tableau TEAMS pour afficher les infos avec .printScore

  */

};
