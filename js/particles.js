class Particle {
    constructor(x,y,firework,color){
        this.x = x; 
        this.y = y; 
        this.gravity =.4;
        this.lifeSpan = random(400,0); 
        this.firework = firework;
        this.radius = random(2,1);
        this.color = color; 
        // ; 
        if(this.firework){
            this.vx =random(-1,1); 
            this.vy = random(-15,-20);
            this.gravity =.3;
        }else {
            this.vy = random(2,-2); // firework radius on Y axis
            this.vx = random(2,-2); //firework radius on X axis
            this.vy = this.vy * random(10,1);
            this.vx = this.vx * random(10,1);
            this.gravity = 0.1;
            if(random(1000,1) < 3){
                this.vx *= random(10,1);
                this.vy *= random(10,1);
            }
            
        }
   
    }

    done(){
        if(this.lifeSpan < 0){
            return true; 
        }else {
            return false; 
        }
    }

    draw(){
            circle(this.x, this.y,this.radius, `rgba(${this.color.red},${this.color.green},${this.color.blue},${this.lifeSpan/255})` ); 
    }

    update(){
        this.y += this.vy;
        this.x += this.vx;
        this.vy += this.gravity;
        if(this.firework){

            this.x += random(2,-2);
            this.radius = random(4,2);

        }
        if (!this.firework) {
            this.vy *= .9;
            this.vx *= .9;
            this.lifeSpan -= 4;
           
            // this.vx += random(.5,-.5);
            // this.vy += random(.5,-.5);
            if (this.lifeSpan < 0) {
                this.done();
            }
        }

        


        
    }
}