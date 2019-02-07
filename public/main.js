const rollDice = event => {
  let valueDice = Math.floor(Math.random(0, 6))
  const _h4 = document.createElement('h4')
  _h4.textContent = valueDice
  document.querySelector('h4').appendChild(_h4)
}

const main = () => {
  const button = document.querySelector('.draw')
  button.addEventListener('click', rollDice)
}
document.addEventListener('DOMContentLoaded', main)
