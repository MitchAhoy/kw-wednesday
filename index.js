'use strict'

const wordUrl = 'http://puzzle.mead.io/puzzle?wordCount=1'
let imageUrl = 'http://api.giphy.com/v1/gifs/search?api_key=8goq10d21Zi31ssEtoViPyFv9bwrkXES&q='

const getData = async () => {

  const responseWord = await fetch(wordUrl)
  const word = await responseWord.json()
  console.log(word.puzzle)

  const responseImg = await fetch(imageUrl + word.puzzle)
  const image = await responseImg.json()

  const data = Promise.all([image['data'][0].images.downsized_large.url, word.puzzle])

  return data
}

const render = async () => {
  const data = await getData()

  document.querySelector('#game-img').setAttribute('src', data[0])
  document.querySelector('#game-word').innerHTML = data[1]
}

render()

document.querySelector('#reset').addEventListener('click', render)

