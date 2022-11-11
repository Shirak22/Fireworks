'use strict'
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let _width = canvas.width = window.innerWidth; 
let _height = canvas.height = window.innerHeight; 
console.log(_width, _height); 










class Draw {
    constructor(context){
        this.context = context; 
        this.x = 0; 
        this.y =0; 
        this.width = 10; 
        this.height= 10; 
        this.color = '#fff';
    }

    rect(x, y, width, height, color ){
        this.x = x; 
        this.y =y; 
        this.width = width; 
        this.height= height; 
        this.color = color; 
        this.context.fillStyle = this.color.toString();
        this.context.fillRect(this.x, this.y, this.width,this.height); 
        
        }



        circle(x, y, radius, color ){
            this.x = x; 
            this.y = y; 
            this.radius = radius; 
            this.color = color; 
            this.context.fillStyle = this.color.toString();
            this.context.beginPath(); 
            this.context.arc(this.x, this.y, this.radius,0,Math.PI*2); 
            this.context.fill();
            
            }


        rand(Max, Min){
            this.Max = Max; 
            this.Min = Min; 

            let x = Math.random()*(this.Max - this.Min ) + this.Min;
                return Math.round(x); 
        }


}

let c = new Draw(ctx); 

console.log(c.rand(50,40));
c.rect(500,500,20,20,'#f55');

c.circle(500,400,20,'#fff'); 

