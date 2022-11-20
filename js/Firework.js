
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
       flysAudio();
    }


    

    done(){
        if(this.exploded && this.particles.length === 0){
            return true; 

        }else {
            return false; 
        }
    }

    explode(){
        for(let i =0; i < 500; i++){
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
                ExplodesAudio();
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



function ExplodesAudio(){
    let Explode = new Audio('../Audio/Explode.mp3');
    let Explode1 = new Audio('../Audio/Bang.mp3');
    let Explode2 = new Audio('../Audio/Bang2.mp3');
    let Explode3 = new Audio('../Audio/Bang3.mp3');

    let crackles1 = new Audio('../Audio/crackels.mp3');
    let crackles2 = new Audio('../Audio/crackels2.mp3');
    let crackles3 = new Audio('../Audio/crackels3.mp3');
    let crackles4 = new Audio('../Audio/crackels4.mp3');
    let rand = random(100,1); 
     
       
         if(rand < 3 ){
            Explode1.play();
        }else if(rand > 3 && rand < 6 ){
            Explode2.play();
        }else if(rand > 6 && rand < 8 ){
            Explode3.play();
        }else if(rand > 8 && rand < 95){
            Explode.play();

            if(random(100,1) < 5){
                crackles2.play();
            }

        }else if(rand > 95 && rand < 100){
            Explode.play();
            crackles4.play();
        }
        

}



function flysAudio(){
    let fly1 = new Audio('../Audio/Launch.mp3');
    let fly2 = new Audio('../Audio/Launch2.mp3');
    let fly3 = new Audio('../Audio/Launch3.mp3');
    let fly4 = new Audio('../Audio/Launch4.mp3');
    let fly = new Audio('../Audio/wistle.mp3');
    let rand = random(100,1);
        fly.volume = 0.1;

        if(rand < 3 ){
            fly1.play();
        }else if(rand > 3 & rand < 5 ){
            fly2.play();
        }else if(rand > 5 & rand < 32 ){
            fly3.play();
        }else if(rand > 32 & rand < 98){
            fly4.play();
        }else if(rand > 98 && rand < 100){
            fly.play();
        }

}
