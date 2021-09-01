export function initCursor() {
  const csrLayer = document.querySelector('#cursor_layer')
  const innerCsr = document.createElement('div')
  const outerCsr = document.createElement('div')

  innerCsr.classList.add('inner_csr')
  outerCsr.classList.add('outer_csr')

  csrLayer.appendChild(outerCsr)
  csrLayer.appendChild(innerCsr)

  window.addEventListener('mousemove', mouseMoved)

  let mousePosX = 0,
    mousePosY = 0,
    mouseCircle = document.querySelector('.outer_csr')

  document.onmousemove = (e) => {
    mousePosX = e.pageX
    mousePosY = e.pageY
  }

  let delay = 10,
    revisedMousePosX = 0,
    revisedMousePosY = 0

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow)

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay

    mouseCircle.style.top = revisedMousePosY + 'px'
    mouseCircle.style.left = revisedMousePosX + 'px'
  }
  delayMouseFollow()
}

function mouseMoved(event) {
  const y = event.clientY
  const x = event.clientX
  moveCircle(x, y)
}

function moveCircle(x, y) {
  const innerCsr = document.querySelector('.inner_csr')
  // const outerCsr = document.querySelector('.outer_csr')
  innerCsr.style.top = y + 'px'
  innerCsr.style.left = x + 'px'
  // outerCsr.style.top = y + 'px'
  // outerCsr.style.left = x + 'px'
}
