import { initCursor } from './cursor.js'

document.addEventListener('DOMContentLoaded', init)

function init() {
  initCursor()

  window.addEventListener('mousemove', movePlanet)
}

function movePlanet(event) {
  const planet = document.querySelector('#globe')
  const planetBC = planet.getBoundingClientRect()
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
