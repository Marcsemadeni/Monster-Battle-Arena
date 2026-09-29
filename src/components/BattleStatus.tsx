export type BattleStatusProps = {
  playerName: string
  playerHealth: number
  monsterName: string
  monsterHealth: number
}

function BattleStatus({
  playerName,
  playerHealth,
  monsterName,
  monsterHealth,
}: BattleStatusProps) {
  return (
    <div className="panel">
      <h2>Battle Status</h2>
      <p>
        {playerName}: {playerHealth} HP
      </p>
      <p>
        {monsterName}: {monsterHealth} HP
      </p>
    </div>
  )
}

export default BattleStatus
