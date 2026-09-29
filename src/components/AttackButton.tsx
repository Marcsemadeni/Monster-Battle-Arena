export type AttackButtonProps = {
  label: string
  damage: number
  onAttack: (damage: number) => void
}

function AttackButton({ label, damage, onAttack }: AttackButtonProps) {
  return <button onClick={() => onAttack(damage)}>{label}</button>
}

export default AttackButton
