


let fireworks = [];

function loop() {
    c.fillStyle = "rgba(0,0,0,.2)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    if (Math.round(random(0, 25)) < 2) {
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        if (fireworks[i].done()) {
        }
    }


    if (fireworks.length >= 100) {
        fireworks.splice(0, 1);

    }

    navbar[0].innerHTML = fireworks.length;
   
}

window.addEventListener('resize', ()=> {
    init();
});


let interval = setInterval(loop, 30);  


