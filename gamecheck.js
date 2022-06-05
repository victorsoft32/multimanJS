export default class CheckGames{
    constructor(gameID, gameName, gameAuthor, gameVersion, gameIcon, gameLaucher){
        this.gameID = gameID;
        this.gameName = gameName;
        this.gameAuthor = gameAuthor;
        this.gameVersion = gameVersion;
        this.gameIcon = gameIcon;
        this.gameLaucher = gameLaucher;
    
    }

    gameLister(){
    
       const gameProperties = {
        gameID: this.gameID,
        name : this.gameName,
        author : this.gameAuthor,
        version: this.gameVersion,
        icon : this.gameIcon,
        laucher: this.gameLaucher
             
       }
       
      
       console.log("%cGame Name: ", "color:blue;", gameProperties.name);
       console.log("%cGame ID: ", "color:blue;", gameProperties.gameID);
       console.log("%cGame Developer: ", "color:blue;", gameProperties.author);
       console.log(gameProperties.icon[0]);
       console.log(gameProperties.icon[1]);
       console.log(gameProperties.icon[2]);
       console.log("%cGame Version: ", "color:blue;", gameProperties.version);
       console.log("%cGame LauchPath: ","color:blue;", gameProperties.laucher);

       
        
    }

}