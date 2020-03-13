import axios from 'axios'

const fetchAlbumsOnHover = () => {
  const categories = document.querySelectorAll('.category')
  const albums = document.querySelector('.albums')

  categories.forEach((category) => {
    category.addEventListener('mouseover', (event) => {
      const name = event.target.innerText
      retrieveAlbumsFromApi(name)
    })
  })
}

const retrieveAlbumsFromApi = (name) => {
  axios.post('/albums', {
    name: name
  })
  .then((data) => {
    console.log(data.data)
  })
}

export default fetchAlbumsOnHover;
