
class Firework {
    constructor(){
        this.color = {
            red: random(255,20),
            green: random(255,0),
            blue:random(255,0)
           }; 

        if(this.color.red <= 150 && this.color.green <= 150 && this.color.blue <= 150 ){
            this.rgb = {
                red:255, 
                green: 255,
                blue: 255
            }
        } else {

            this.rgb = this.color; 
        }
        
        
        this.firework = new Particle(random((canvas.width/2 ) - 50,canvas.width/2) , canvas.height,true,{
            red: 255, green: 255, blue:255
       }) ;
       this.exploded = false;
       this.particles = [];
    }


    

    done(){
        if(this.exploded && this.particles.length === 0){
            return true; 

        }else {
            return false; 
        }
    }

    explode(){
        for(let i =0; i < 1000; i++){
            this.particles.push(new Particle(this.firework.x, this.firework.y,false,this.rgb)); 
        }

      
    }
  

    update(){
        if(!this.exploded){
            this.firework.draw();
            this.firework.update();
            
            if(this.firework.vy > 0){
                this.firework.vy = 0;
                this.exploded = true;   
                this.explode();
            }
    
        }

       for(let i = this.particles.length - 1; i >= 0 ; i--){
            this.particles[i].draw();
            this.particles[i].update();
            if(this.particles[i].done()){
                this.particles.splice(i, 1);
                //this.done();
            }
       }

 

    }
}