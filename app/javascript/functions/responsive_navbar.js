const responsiveNavbar = () => {
  const mediaQuery = window.matchMedia( "(max-width: 670px)")

  mediaQuery.addListener(widthChange)
  widthChange(mediaQuery)
}

const widthChange = (mq) => {

  const startButton = document.querySelector('.start-button')
  const navbar = document.querySelector('.navbar')

  if (mq.matches) {
    startButton.parentNode.removeChild(startButton)
  }
}

export default responsiveNavbar;
