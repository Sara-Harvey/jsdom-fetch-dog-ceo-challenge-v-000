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

function fetchDogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      // the return value is an Array containing all of the keys at the top level of the Object
      breeds = Object.keys(json.message)
      // display all dog breeds on page
      renderDogBreeds(breeds)
      // filter breeds that start with a particular letter
      addBreedSelectListener()
    })
}

function renderDogBreeds(breeds) {
  const ul = document.getElementById('dog-breeds')

  for (breed of breeds) {
    const li = document.createElement('li')

    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', changeColor)
  }
}