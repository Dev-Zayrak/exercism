//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const header = 'Team                           | MP |  W |  D |  L |  P'
class Team {
  constructor(name) {
    this.name = name,
    this.W = 0,
    this.D = 0,
    this.L = 0,
    this.MP = 0,
    this.P = 0,
    this.printScore = ''
  }
}

export const tournamentTally = score => {

  if(!score) return header

  let teams = score.replaceAll(/\b(win|loss|draw|\n)\b/g, '').split(';')
  teams.pop()
  const uniqueTeams = [...new Set(teams)].map(name => new Team(name))
  const scores = score.replaceAll('\n', ';').split(';')

  for(let i = 0; i<scores.length-2; i+=3){
    if(scores[i+2] === 'win'){
      uniqueTeams.find(team => team.name === scores[i]).W += 1
      uniqueTeams.find(team => team.name === scores[i+1]).L += 1
    }
    if(scores[i+2] === 'loss'){
      uniqueTeams.find(team => team.name === scores[i+1]).W += 1
      uniqueTeams.find(team => team.name === scores[i]).L += 1
    }
    if(scores[i+2] === 'draw'){
      uniqueTeams.find(team => team.name === scores[i]).D += 1
      uniqueTeams.find(team => team.name === scores[i+1]).D += 1
    }
  }

  uniqueTeams.forEach(team => team.MP = team.W+team.D+team.L)
  uniqueTeams.forEach(team => team.P = 3*team.W+team.D)
  uniqueTeams.forEach(team => team.printScore = '\n'+`${team.name.padEnd(31)}|${team.MP.toString().padStart(3)} |${team.W.toString().padStart(3)} |${team.D.toString().padStart(3)} |${team.L.toString().padStart(3)} |${team.P.toString().padStart(3)}`)

  uniqueTeams.sort((teamA, teamB) => {
    if(teamB.P !== teamA.P) return teamB.P - teamA.P
    else if (teamA.name < teamB.name) return -1
  })
  
  let output = header

  uniqueTeams.forEach(team => output += team.printScore)

  return output
};
