const rabbit = document.getElementById('rabbit');
const message = document.getElementById('message');

rabbit.addEventListener('click', () => {
    message.innerText = "Yay! You clicked me!";
    rabbit.src = '../assets/rabbit_happy.png';

    setTimeout(() => {
        rabbit.src = '../assets/rabbit_idle.png';
        message.innerText = "Click me to play!";
    }, 2000);
});

setInterval(() => {
    const actions = ['../assets/rabbit_idle.png', '../assets/rabbit_jump.png'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    rabbit.src = randomAction;
}, 5000);
