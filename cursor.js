export function initCursor() {
  const csrLayer = document.querySelector('#cursor_layer')
  const innerCsr = document.createElement('div')
  const outerCsr = document.createElement('div')

  innerCsr.classList.add('inner_csr')
  outerCsr.classList.add('outer_csr')

  csrLayer.appendChild(outerCsr)
  csrLayer.appendChild(innerCsr)

  window.addEventListener('mousemove', mouseMoved)
}

function mouseMoved(event) {
  const y = event.clientY
  const x = event.clientX
  moveCircle(x, y)
}

function moveCircle(x, y) {
  const innerCsr = document.querySelector('.inner_csr')
  const outerCsr = document.querySelector('.outer_csr')
  innerCsr.style.top = y + 'px'
  innerCsr.style.left = x + 'px'
  outerCsr.style.top = y + 'px'
  outerCsr.style.left = x + 'px'
}
