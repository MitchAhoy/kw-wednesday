const scoreList = document.querySelector('#score-list')
const renderScores = (doc) => {
    const player = document.createElement('div') 
    const name = document.createElement('span')
    const score = document.createElement('span')
    const addScore = document.createElement('img')
    const minusScore = document.createElement('img')

    addScore.setAttribute('src', '../../public/images/up-arrow.svg')
    minusScore.setAttribute('src', '../../public/images/down-arrow.svg')
    addScore.setAttribute('class', 'score-arrow add-score')
    minusScore.setAttribute('class', 'score-arrow minus-score')


    player.setAttribute('data-id', doc.id)
    name.textContent = `${doc.data().name}: `
    score.textContent = doc.data().score

    player.appendChild(addScore)
    player.appendChild(name)
    player.appendChild(score)
    player.appendChild(minusScore)
    scoreList.appendChild(player)

}

db.collection('scores').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderScores(doc)
    })
})

