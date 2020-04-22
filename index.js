'use strict'
const imgEl = document.querySelector('#game-img')
const wordEl = document.querySelector('#game-word')

const wordUrl = 'https://random-word-api.herokuapp.com/word?number=1'
const imageUrl = `http://api.giphy.com/v1/gifs/search?api_key=8goq10d21Zi31ssEtoViPyFv9bwrkXES&q=game`




const getData = async () => {

  const responseWord = await fetch(wordUrl)
  const word = await responseWord.json()



  const responseImg = await fetch(imageUrl)
  const image = await responseImg.json()



  const data = Promise.all([image['data'][0].images.downsized_large.url, word[0]])

  return data
}

const render = async () => {
  const data = await getData()

  document.querySelector('#game-img').setAttribute('src', data[0])
  document.querySelector('#game-word').innerHTML = data[1]


}

render()

