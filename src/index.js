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