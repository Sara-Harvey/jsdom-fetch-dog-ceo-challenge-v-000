console.log('%c HI', 'color: firebrick')

let breeds = []

function fetchDogPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      for (const image in json.message) {
        renderDogPics(json.message[image])
      }
    })
}

function renderDogPics(dogPic) {
  const main = document.getElementById('dog-image-container')
  const image = document.createElement('img')

  image.src = dogPic
  main.appendChild(image)
}