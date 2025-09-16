const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const backendQuadros = document.querySelectorAll('.backendQuadro');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const backends = document.querySelector('.backends');

let active = 0;
const total = backendQuadros.length
let timer;

function update(direction) {
    document.querySelector('.backendQuadro.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active = active + 1;
        if (active === total) {
            active = 0
        }
    }
    else if (direction < 0) {
        active = active - 1;
        if (active < 0) {
            active = total - 1;
        }
    }
    backendQuadros[active].classList.add('active')
    dots[active].classList.add('active')

}

clearInterval(timer)
timer =  setInterval(() => {
    update(1)
}, 5000);


prevButton.addEventListener('click', function () {
    update(-1)

})
nextButton.addEventListener('click', function () {
    update(1)

})