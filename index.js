let start_btn = document.querySelector('#start')
let game_filed = document.querySelector('#game')
let time = document.querySelector('#time')
let result = document.querySelector('#result')
let resultHeader = document.querySelector('#result-header')
let timeHeader = document.querySelector('#time-header')
let input = document.querySelector('#game-time')

let score = 0
let isGameStarted = false

start_btn.addEventListener('click', () => {
    score = 0
    resultHeader.classList.add('hide')
    timeHeader.classList.remove('hide')
    setGameTime()
    isGameStarted = true
    start_btn.classList.add('hide')
    game_filed.style.backgroundColor = '#fff'
    let interval = setInterval(() => {
        let time_value = parseFloat(time.textContent)
        if (time_value <= 0) {
            // end game
            clearInterval(interval)
            endGame()

        } else {
            time.textContent = (time_value - 0.1).toFixed(1)
        }

    }, 100)

    renderBox()
})

game_filed.addEventListener('click', (e) => {
    if (!isGameStarted) {
        return
    }

    if (e.target.dataset.box) {
        score++
        renderBox()
    }
})

input.addEventListener('change', () => {
    time.textContent = input.value.toFixed(1)
})



const setGameScore = () => {
    result.textContent = score.toString()
}

const setGameTime = () => {
    time.textContent = input.value.toFixed(1)
}


const endGame = () => {
    isGameStarted = false
    start_btn.classList.remove('hide')
    game_filed.style.backgroundColor = '#ccc'
    game_filed.innerHTML = ''
    timeHeader.classList.add('hide')
    resultHeader.classList.remove('hide')
    setGameScore()
}

const renderBox = () => {
    game_filed.innerHTML = ''
    let box = document.createElement('div')
    let boxSize = getRandom(30, 100)
    let game_filed_size = game_filed.getBoundingClientRect()
    let maxTop = game_filed_size.height - boxSize
    let maxLeft = game_filed_size.width - boxSize


    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = 'black'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    game_filed.insertAdjacentElement('afterbegin', box)
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min)
}
