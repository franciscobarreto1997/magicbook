const changeNavbarColor = () => {

  const navbar = document.querySelector('.navbar')
  const container = document.querySelector('.home-page-banner')

  document.addEventListener('scroll', () => {
    let rect = container.getBoundingClientRect()
    if (rect.y < -10) {
      navbar.style.backgroundColor = "black";
      navbar.style.transition = "all 0.5s";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  })
}

export default changeNavbarColor;
