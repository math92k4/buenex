import { initCursor } from './cursor.js'

document.addEventListener('DOMContentLoaded', init)

function init() {
  initCursor()

  // window.addEventListener('mousemove', movePlanet)
  movePlanet()
}

function movePlanet2(event) {
  const planet = document.querySelector('#globe')
  const planetBC = planet.getBoundingClientRect()
  console.log(planetBC)
  const planetSize = planet.offsetHeight
  const planetX = planetBC.x + planetSize / 2
  const planetY = planetBC.y + planetSize / 2

  let newX
  if (event.clientX < planetX) {
    newX = (event.clientX - planetX) / 15 + 'px'
  } else {
    newX = ((planetX - event.clientX) * -1) / 15 + 'px'
  }

  let newY
  if (event.clientY < planetY) {
    newY = (event.clientY - planetY) / 15 + 'px'
  } else {
    newY = ((planetY - event.clientY) * -1) / 15 + 'px'
  }
  planet.style.setProperty('--new-x', newX)
  planet.style.setProperty('--new-y', newY)
}

function movePlanet() {
  const planet = document.querySelector('#globe')
  const planetWidth = 150
  const originalX = planet.getBoundingClientRect().x + planetWidth
  const originalY = planet.getBoundingClientRect().y + planetWidth

  let mouseY = 0
  let mouseX = 0

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - originalX) / 10
    mouseY = (e.clientY - originalY) / 10
  })
  const delay = 100
  let revisedX = 0
  let revisedY = 0

  function animatePlanet() {
    requestAnimationFrame(animatePlanet)

    revisedX += (mouseX - revisedX) / delay
    revisedY += (mouseY - revisedY) / delay

    planet.style.setProperty('--new-x', revisedX + 'px')
    planet.style.setProperty('--new-y', revisedY + 'px')
  }

  animatePlanet()
}
