let start_btn = document.querySelector('#start')
let game_filed = document.querySelector('#game')

start_btn.addEventListener('click', () => {
    start_btn.classList.add('hide');
    game_filed.style.backgroundColor = '#fff'
    renderBox()
})


const renderBox = () => {

}
