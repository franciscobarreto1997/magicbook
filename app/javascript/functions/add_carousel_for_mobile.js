import axios from 'axios'

const addCarouselForMobile = () => {
  const mediaQuery = window.matchMedia( "(max-width: 670px)")

  mediaQuery.addListener(injectCarousel)
  injectCarousel(mediaQuery)
}

const injectCarousel = (mq) => {

  const tabsLeft = document.querySelector('.tabs .left')

  if (mq.matches) {

    const categories = document.querySelector('.tabs .left .categories')
    categories.parentNode.removeChild(categories)

    const carousel = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="category">
                              Verticais
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="category">
                              Horizontais
                            </div>
                          </div>
                          <div class="carousel-item">
                          <div class="category">
                              Quadrados
                          </div>
                          </div>
                        </div>
                        <a class="carousel-control-prev carousel-btn" href="#carouselExampleIndicators" role="button" data-slide="prev" id="previous">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next carousel-btn" href="#carouselExampleIndicators" role="button" data-slide="next" id="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>`
    tabsLeft.insertAdjacentHTML('afterbegin', carousel)

    const albums = document.querySelector('.albums')

    axios.post('/albums', {
      name: "Verticais"
    })
    .then((data) => {
      data.data.forEach((album) => {
        const info = `<div class="card">
        <div class="card-pic">
        </div>
        <div class="card-info">
        <p>Tamanho: ${album.size}</p>
        <p>${album.price.toString()}€</p>
        </div>
        </div>`
        albums.insertAdjacentHTML('beforeend', info)
      })
    })


    fetchAlbumsCarousel()
  }
}

const fetchAlbumsCarousel = () => {

  const carouselControls = document.querySelectorAll('.carousel-btn')

  carouselControls.forEach((control) => {
    control.addEventListener('click', (event) => {

      let category = document.querySelector('.carousel-item.active').innerText
      const tabs = document.querySelector('.tabs')
      const albums = document.querySelector('.albums')
      albums.innerHTML = ""

      if (event.target.id == "previous") {
        if (category == "Verticais") {
          category = "Quadrados"
        } else if (category == "Quadrados") {
          category = "Horizontais"
        } else {
          category = "Verticais"
        }
      } else {
        if (category == "Verticais") {
          category = "Horizontais"
        } else if (category == "Quadrados") {
          category = "Verticais"
        } else {
          category = "Quadrados"
        }
      }

      switch(category) {
        case "Verticais":
          tabs.style.backgroundColor = "#94B4B4"
          tabs.style.transition = "all 0.5s";
          break;
        case "Quadrados":
          tabs.style.backgroundColor = "#624435"
          tabs.style.transition = "all 0.5s";
          break;
        case "Horizontais":
          tabs.style.backgroundColor = "#B5ACA0"
          tabs.style.transition = "all 0.5s";
        default:
          console.log("")
      }
      retrieveAlbumsFromApi(category)
    })
  })
}

const retrieveAlbumsFromApi = (category) => {

  const albums = document.querySelector('.albums')

  axios.post('/albums', {
    name: category
  })
  .then((data) => {
    // console.log(category)
    // console.log(data)
    data.data.forEach((album) => {
      const info = `<div class="card">
                      <div class="card-pic">
                      </div>
                      <div class="card-info">
                        <p>Tamanho: ${album.size}</p>
                        <p>${album.price.toString()}€</p>
                      </div>
                    </div>`
      albums.insertAdjacentHTML('beforeend', info)
    })
  })
}




export default addCarouselForMobile;
