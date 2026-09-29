export type MonsterProps = {
  name: string
  type: string
  health: number
  attackDamage: number
}

function Monster({ name, type, health, attackDamage }: MonsterProps) {
  return (
    <div className="panel">
      <h2>Monster</h2>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Health: {health}</p>
      <p>Attack Damage: {attackDamage}</p>
    </div>
  )
}

export default Monster
