import axios from 'axios'

const categories = document.querySelectorAll('.category')
const albums = document.querySelector('.albums')
const tabs = document.querySelector('.tabs')

const fetchAlbumsOnHover = () => {
  categories.forEach((category) => {
    category.addEventListener('mouseover', (event) => {
      const name = event.target.innerText
      albums.innerHTML = ""
      switch(name) {
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
      retrieveAlbumsFromApi(name)
    })
  })
}

const retrieveAlbumsFromApi = (name) => {
  axios.post('/albums', {
    name: name
  })
  .then((data) => {
    data.data.forEach((album) => {
      const info = `<div class="card">
                      <div class="card-pic">
                      </div>
                      <div class="card-info">
                        <p>${album.size}</p>
                        <p>${album.price.toString()}</p>
                      </div>
                    </div>`
      albums.insertAdjacentHTML('beforeend', info)
    })
  })
}

export default fetchAlbumsOnHover;
