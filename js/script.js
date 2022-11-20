


let fireworks = [];
song();

function loop() {
    c.fillStyle = "rgba(0,0,0,.2)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    if (Math.round(random(0, 100)) < 2) {
        fireworks.push(new Firework());
        
        fireworks.push(new Firework());
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {

        fireworks[i].update();
        if (fireworks[i].done()) {
        }
    }


    if (fireworks.length >= 15) {
        fireworks.splice(0, 1);

    }

   
}

window.addEventListener('resize', ()=> {
    init();
});


let interval = setInterval(loop, 30);  



function song(){
    let audio = new Audio('../Audio/music.mp3'); 
    audio.volume = 0.4;
    
    audio.play();
}