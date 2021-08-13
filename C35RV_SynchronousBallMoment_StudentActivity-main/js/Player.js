class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.positionX =0;
        this.positionY=0;
    }
    
addplayer(){
    var playeindex="players/player"+this.index;
    if (this.index===1){
        this.positionX=width/2-100;
    }
    else{
        this.positionX=width/2+100;
        }
        database.ref(playerindex).set({
         name:this.name,
         positionX:this.positionX,
         positionY:this.positionY
        });
    }

   getCount(){
     var playerref = database.ref("playerCount");
     playerref.on("value",data =>{
         playerCount=data.val();
         });
   }
   updatecount(count){
database.ref("/").update({
    playerCount:count
})
   }

    
}