let start_btn = document.querySelector('#start')
let game_filed = document.querySelector('#game')

let score = 0

start_btn.addEventListener('click', () => {
    start_btn.classList.add('hide')
    game_filed.style.backgroundColor = '#fff'
    renderBox()
})

game_filed.addEventListener('click', (e) => {
    if (e.target.dataset.box) {
        score++
        renderBox()
    }
})


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
