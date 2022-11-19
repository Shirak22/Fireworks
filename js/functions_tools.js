let canvas = document.querySelector('#canvas'); 
let c = canvas.getContext('2d'); 
let navbar = document.querySelectorAll('[data-navbar] li a'); 


init();

function init(){

    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 

}
function random(max, min){
    this.max = max ; 
    this.min = min ; 
    let x = Math.random()* (this.max -this.min) + this.min; 
    return x ; 
}


function circle(x,y,radius,color){
    this.radius = radius; 
    this.x = x; 
    this.y = y; 
    this.color = color;

        c.fillStyle = this.color;
      
        c.beginPath();
    
        c.arc(this.x, this.y,this.radius, 0, Math.PI * 2  ); 
        c.fill();
}
