class Game{
    constructor(){}
    getState(){
        var gameref =database.ref("gameState");
        gameref.on("value",function(data){
            gameState=data.val();
        } )
            
        
    }
    start(){
        form = new Form();
        form.display();
        player=new Player();
        playerCount=player.getCount();
    }
}