const prevButtonBack = document.getElementById('prevBack');
const nextButtonBack = document.getElementById('nextBack');
const backendQuadros = document.querySelectorAll('.backendQuadro');
const backends = document.querySelector('.backends');

let activeBack = 0;
const totalBack = backendQuadros.length;
let timerBack;

function update(direction) {
    document.querySelector('.backendQuadro.active').classList.remove('active')

    if (direction > 0) {
        activeBack = activeBack + 1;
        if (activeBack === totalBack) {
            activeBack = 0
        }
    }
    else if (direction < 0) {
        activeBack = activeBack - 1;
        if (activeBack < 0) {
            activeBack = totalBack - 1;
        }
    }
    backendQuadros[activeBack].classList.add('active');

 

}

clearInterval(timerBack)
timerBack =  setInterval(() => {
    update(1)
}, 5000);


prevButtonBack.addEventListener('click', function () {
    update(-1)

})
nextButtonBack.addEventListener('click', function () {
    update(1)

})


const prevButtonFront = document.getElementById('prevFront');
const nextButtonFront = document.getElementById('nextFront');
const frontendQuadros = document.querySelectorAll('.frontendQuadro');
const frontends = document.querySelector('.frontends');

let activeFront = 0;
const totalFront = frontendQuadros.length;
let timerFront;

function update(direction) {
    document.querySelector('.frontendQuadro.active').classList.remove('active')

    if (direction > 0) {
        activeFront = activeFront + 1;
        if (activeFront === totalFront) {
            activeFront = 0
        }
    }
    else if (direction < 0) {
        activeFront = activeFront - 1;
        if (activeFront < 0) {
            activeFront = totalFront - 1;
        }
    }
    frontendQuadros[activeFront].classList.add('active');

 

}

clearInterval(timerFront)
timerFront =  setInterval(() => {
    update(1)
}, 5000);


prevButtonFront.addEventListener('click', function () {
    update(-1)

})
nextButtonFront.addEventListener('click', function () {
    update(1)

})