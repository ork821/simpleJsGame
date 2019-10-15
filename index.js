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

    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = 'black'
    box.style.top = '50px'
    box.style.left = '50px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    game_filed.insertAdjacentElement('afterbegin', box)
}
