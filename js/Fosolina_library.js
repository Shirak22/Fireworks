


class Fosolina {
    constructor(context){
        this.context = context; 
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

