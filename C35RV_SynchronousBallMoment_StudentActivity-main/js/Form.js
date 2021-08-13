class Form{
    constructor(){
        this.input=createInput("").attribute("placeHolder","Enter your name");
        this.playButton=createButton("play");
        this.greeting=createElement("h2");
        this.titleImg = createImg("./assets/title.png", "game title");
        
    }
    setElementsPosition(){
        this.input.position(width/2-110,height/2-80);
        this.playButton.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
        this.titleImg.position(120,50)

    }

    setElementsStyle(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
        this.titleImg.class("gameTitle");

    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message=`
             Hello ${this.input.value()}
          </br>wait for another player to join`; 
          this.greeting.html(message) ;
          playerCount+=1;
          player.name=this.input.value();
          player.index=playerCount;
          player.addplayer();
          player.updateCount(playerCount);   
          
        })
    }
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}