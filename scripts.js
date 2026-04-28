const prevButtonBack = document.getElementById('prevBack');
const nextButtonBack = document.getElementById('nextBack');
const backendQuadros = document.querySelectorAll('.backendQuadro');
const backends = document.querySelector('.backends');

let activeBack = 0;
const totalBack = backendQuadros.length;
let timerBack;
let isHoveredBack = false;

function updateBack(direction) {
    const activeElement = document.querySelector('.backendQuadro.active');
    if (activeElement) {
        activeElement.classList.remove('active');
    }

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

function startTimerBack() {
    clearInterval(timerBack);
    if (!isHoveredBack) {
        timerBack = setInterval(() => {
            updateBack(1);
        }, 5000);
    }
}


startTimerBack();

if (prevButtonBack && nextButtonBack) {
    prevButtonBack.addEventListener('click', function () {
        updateBack(-1);
        startTimerBack();
    });

    nextButtonBack.addEventListener('click', function () {
        updateBack(1);
        startTimerBack();
    });
}

backendQuadros.forEach(quadro => {
    quadro.addEventListener('mouseenter', () => {
        isHoveredBack = true; 
        clearInterval(timerBack);
    });
    
    quadro.addEventListener('mouseleave', () => {
        isHoveredBack = false; 
        startTimerBack(); 
    });
});


const prevButtonFront = document.getElementById('prevFront');
const nextButtonFront = document.getElementById('nextFront');
const frontendQuadros = document.querySelectorAll('.frontendQuadro');
const frontends = document.querySelector('.frontends');

let activeFront = 0;
const totalFront = frontendQuadros.length;
let timerFront;
let isHoveredFront = false;

function updateFront(direction) {
    const activeElement = document.querySelector('.frontendQuadro.active');
    if (activeElement) {
        activeElement.classList.remove('active');
    }

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

function startTimerFront() {
    clearInterval(timerFront);
    // Só reinicia o cronômetro automático se o mouse NÃO estiver em cima do projeto
    if (!isHoveredFront) {
        timerFront = setInterval(() => {
            updateFront(1);
        }, 5000);
    }
}

startTimerFront();

if (prevButtonFront && nextButtonFront) {
    prevButtonFront.addEventListener('click', function () {
        updateFront(-1);
        startTimerFront();
    });

    nextButtonFront.addEventListener('click', function () {
        updateFront(1);
        startTimerFront();
    });
}

frontendQuadros.forEach(quadro => {
    quadro.addEventListener('mouseenter', () => {
        isHoveredFront = true;
        clearInterval(timerFront); 
    });
    
    quadro.addEventListener('mouseleave', () => {
        isHoveredFront = false; 
        startTimerFront(); 
    });
});