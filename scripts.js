const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length
let timer;


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
