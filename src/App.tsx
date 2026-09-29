import { useState } from 'react'
import Monster from './components/Monster'
import AttackButton from './components/AttackButton'
import BattleStatus from './components/BattleStatus'
import './App.css'

const monster_name = 'Cave Troll'
const monster_type = 'Beast'
const monster_attack_damage = 15
const max_health = 100

function App() {
  const [playerName, setPlayerName] = useState('')
  const [playerHealth, setPlayerHealth] = useState(max_health)
  const [monsterHealth, setMonsterHealth] = useState(max_health)

  const handleAttack = (damage: number) => {
    setMonsterHealth((health) => Math.max(health - damage, 0))
  }

  const handleMonsterAttack = () => {
    setPlayerHealth((health) => Math.max(health - monster_attack_damage, 0))
  }

  const handleDrinkPotion = () => {
    setPlayerHealth((health) => Math.min(health + 20, max_health))
  }

  const displayName = playerName || 'Player'

  return (
    <section id="arena">
      <h1>Monster Battle Arena</h1>

      <label>
        Player Name:
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </label>

      <h2>
        {displayName} vs. {monster_name}
      </h2>

      <div className="panel">
        <h2>Player</h2>
        <p>Health: {playerHealth}</p>
        {playerHealth <= 0 && <p>You have been defeated!</p>}
      </div>

      <Monster
        name={monster_name}
        type={monster_type}
        health={monsterHealth}
        attackDamage={monster_attack_damage}
      />

      <div className="buttons">
        <AttackButton label="Normal Attack" damage={10} onAttack={handleAttack} />
        <AttackButton label="Heavy Attack" damage={20} onAttack={handleAttack} />
        <AttackButton label="Ultimate Attack" damage={30} onAttack={handleAttack} />
      </div>

      <div className="buttons">
        <button onClick={handleMonsterAttack}>Monster Attacks</button>
        <button onClick={handleDrinkPotion}>Drink Potion</button>
      </div>

      {monsterHealth > 0 && <p>The monster is still fighting!</p>}
      {monsterHealth <= 0 && <p>The monster has been defeated!</p>}

      <BattleStatus
        playerName={displayName}
        playerHealth={playerHealth}
        monsterName={monster_name}
        monsterHealth={monsterHealth}
      />
    </section>
  )
}

export default App
