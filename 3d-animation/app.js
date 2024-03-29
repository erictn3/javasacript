// Movement Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container')
// Items

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    console.log('hey')
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // Popout
    title.style.transform = 'translateZ(-300px)';
})

// Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    // Popback
    title.style.transform = 'translateX(0px)';
})

