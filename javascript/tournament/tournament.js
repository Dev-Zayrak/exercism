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

  const scores = score.replaceAll('\n', ';').split(';')
  const teamsNames = score.replaceAll(/\b(win|loss|draw|\n)\b/g, '').split(';').filter(Boolean)
  const uniqueTeams = [...new Set(teamsNames)].map(name => new Team(name))
  const teams = {}
  
  for(const team of uniqueTeams){
    teams[team.name] = team
  }

  for(let i = 0; i<scores.length-2; i+=3){
    const [teamA, teamB, result] = [teams[scores[i]], teams[scores[i+1]], scores[i+2]]
    switch (result) {
      case 'win':
        teamA.W++
        teamB.L++
        break
      case 'loss':
        teamA.L++
        teamB.W++
        break
      case 'draw':
        teamA.D++
        teamB.D++
        break
    }
  }

  uniqueTeams.forEach(team => {
    team.MP = team.W+team.D+team.L
    team.P = 3*team.W+team.D
    team.printScore = '\n'+`${team.name.padEnd(31)}|${team.MP.toString().padStart(3)} |${team.W.toString().padStart(3)} |${team.D.toString().padStart(3)} |${team.L.toString().padStart(3)} |${team.P.toString().padStart(3)}`
  })

  uniqueTeams.sort((teamA, teamB) => {
    if(teamB.P !== teamA.P) return teamB.P - teamA.P
    else if (teamA.name < teamB.name) return -1
  })
  
  let output = header
  uniqueTeams.forEach(team => output += team.printScore)

  return output
};
