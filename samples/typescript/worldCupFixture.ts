interface IPlayer {
  readonly id: string
  name: string
  country: string
  goals: number
  active: boolean
}

interface IMatchResult {
  home: string
  away: string
  score: `${number}-${number}`
  winner?: string
}

const minGoalsForStar = 3

const players: IPlayer[] = [
  { id: 'ar-10', name: 'Valen Rios', country: 'Argentina', goals: 4, active: true },
  { id: 'br-09', name: 'Caio Luz', country: 'Brazil', goals: 5, active: true },
  { id: 'fr-07', name: 'Noe Blanc', country: 'France', goals: 2, active: false }
]

class MatchBoard {
  constructor(private readonly results: IMatchResult[]) {}

  public findWinner = (country: string) => {
    return this.results.find((result) => result.winner === country)
  }
}

const isStarPlayer = (player: IPlayer) => {
  if (!player.active) return false
  if (player.goals < minGoalsForStar) return false
  return true
}

const formatPlayerLabel = (player: IPlayer) => {
  const status = player.active ? 'active' : 'resting'
  return `${player.name} / ${player.country} / ${status}`
}

const validateMatch = (result: IMatchResult) => {
  const hasWinner = Boolean(result.winner)

  if (!hasWinner) return 'pending-review'
  if (result.home === result.away) return 'invalid-teams'
  return 'confirmed'
}

const results: IMatchResult[] = [
  { home: 'Brazil', away: 'France', score: '2-1', winner: 'Brazil' },
  { home: 'Portugal', away: 'Spain', score: '1-1' }
]

const board = new MatchBoard(results)
const featuredPlayers = players.filter(isStarPlayer)
const labels = featuredPlayers.map(formatPlayerLabel)
const brazilWin = board.findWinner('Brazil')
const portugalStatus = validateMatch(results[1])

console.info({ labels, brazilWin, portugalStatus })
