const scoreList = document.querySelector('#score-list')
const addScore = document.querySelectorAll('.add-score')
const minusScore = document.querySelectorAll('.minus-score')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('#modal')
const showScores = document.querySelector('#show-scores')

const addOne = (doc) => {
    const increment = firebase.firestore.FieldValue.increment(1)
    db.collection('scores').doc(doc.id).update({score: increment})

}
const minusOne = (doc) => {
    const decrement = firebase.firestore.FieldValue.increment(-1)
    db.collection('scores').doc(doc.id).update({score: decrement})
}

const renderScores = doc => {
    const player = document.createElement('div') 
    const name = document.createElement('span')
    const score = document.createElement('span')
    const addScore = document.createElement('img')
    const minusScore = document.createElement('img')

    addScore.addEventListener('click', () => addOne(doc))
    minusScore.addEventListener('click', () => minusOne(doc))

    addScore.setAttribute('src', '../../public/images/up-arrow.svg')
    minusScore.setAttribute('src', '../../public/images/down-arrow.svg')
    addScore.setAttribute('class', 'score-arrow add-score')
    minusScore.setAttribute('class', 'score-arrow minus-score')
    player.setAttribute('class', 'player')
    score.setAttribute('class', 'player-score')


    player.setAttribute('data-id', doc.id)
    name.textContent = `${doc.data().name}: `
    score.textContent = doc.data().score

    player.appendChild(addScore)
    player.appendChild(name)
    player.appendChild(score)
    player.appendChild(minusScore)
    scoreList.appendChild(player)
}

const reRenderScore = doc => {
    const score = document.querySelector(`[data-id=${doc.id}]`)
    score.textContent = `${doc.data().name}: ${doc.data().score}`
}

db.collection('scores')
    .onSnapshot(snapshot => {
        const changes = snapshot.docChanges()
        changes.forEach(change => {
            if (change.type == 'added') {
                renderScores(change.doc)
            } else if (change.type == 'modified') {
                reRenderScore(change.doc)
            }
        })
})



closeBtn.addEventListener('click', () => modal.setAttribute('class', 'hide-scores') )
showScores.addEventListener('click', () => modal.removeAttribute('class', 'hide-scores') )
