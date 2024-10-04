class Pad {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 5;
        this.largura = 20;
        this.altura = 100;
        this.y = (this.c.canvas.height/2)-(this.altura/2);
        this.vel = 5;
       
        this.chuteiraleft = new Image ();
        this.chuteiraleft.width = 100;
        this.chuteiraleft.height = 100;
        this.chuteiraleft.src = "assets/chuteiraleft.png";
        this.chuteiraleft.addEventListener('load', () => {
            this.draw()
        });
    }




    management() {
        if (this.keyboard.cima)
            if (this.y > 0 && this.y -5)
                this.y -= this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height - this.altura)
                this.y += this.vel;
        
    }


    draw() {
        this.management();
        this.c.drawImage(this.chuteiraleft, -20, this.y, this.chuteiraleft.width, this.chuteiraleft.height);
        //this.c.fillRect(this.x, this.y, this.largura, this.altura);
        
        
    }
}