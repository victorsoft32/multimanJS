
import CheckGames from './gamecheck.js';
import gameScreenR from './gameUI.js';
import buildInternalCpu from './memory.js';

const gameTime = 0;
const gameRunTimeStart = 10;
const gameRunTimeEnd = 100;

let logo = document.querySelector("#logo");
const lscreen = document.querySelector("#lscreen");
let mess = document.querySelector(".mess");


const width = 100;
const height = 100;

logo.style.width = "300";



const gameScreen = {
    x: width,
    y: height,
    click: false,
    frameL: 0
}


lscreen.addEventListener('mouseup', (event)=>{
   
    gameScreen.x = event.x;
    gameScreen.y = event.y;
    gameScreen.click = true;
    gameScreen.frameL = 1;
    console.log(gameScreen.x, gameScreen.y);
    
}
)


class MultimanBoot{
    constructor(){
        this.runTime = gameRunTimeStart/2;
        this.gameLoop = gameRunTimeEnd;
        this.gameRunTimeEnd = this.runTime + this.gameLoop;

       
    }

    run(){
        if(this.runTime){
            this.runTime = this.gameLoop/20;
            this.endTime = this.gameRunTimeEnd
            
        }
    }

    

    pushMulitmanLogo(){
        const gameTime = this.runTime;

        for(let gameTime = 1; gameTime<=5; gameTime++){
            logo.style.display = "block";
            mess.innerHTML = "Please wait..."
            
               
            

        
        }

       
       
        
    }




    
    
}



let startRunTime = ()=>{
    let boot = new MultimanBoot();
    boot.run();
    boot.pushMulitmanLogo();
}



startRunTime();







// game Info





fetch('package.json')
.then(response => response.json())
.then(data => {
if(data.gamePathInstall[0].pathfolder){
  
    

    const gameInfo = {
        "gameID" : Math.floor(Math.random(0, 4)*24),
        "gameName" : "God of War",
        "gameAuthor" : "Santa Monica Studios",
        "gameVersion" : "1.0.11",
        "game_lauchPath" : data.gamePathInstall[0].pathfolder+"/god_of_war/index.html",
        "gameIcon" : [{
        "icon_16" : data.gamePathInstall[0].pathfolder+"/god_of_war/icon64X64.png"
        },
        {
         "icon_32" : data.gamePathInstall[0].pathfolder+"/games/god_of_war/icon64X64.png"
        },
    
        {
         "icon_64" : data.gamePathInstall[0].pathfolder+"/games/god_of_war/icon64X64.png"
        }
    
    
    
    ]
    }; 
    
    let gameID = gameInfo.gameID;
    let gameName = gameInfo.gameName;
    let gameAuthor = gameInfo.gameAuthor;
    let gameVersion = gameInfo.gameVersion;
    let gameIcon = gameInfo.gameIcon;
    let gameLaucher = gameInfo.game_lauchPath;
    

    
    let gameListDisplay = ()=>{
        let vgamesInfo = new CheckGames(gameID, gameName, gameAuthor, gameVersion, gameIcon, gameLaucher);
    
        vgamesInfo.gameLister();
    }
    
console.log("%c=====================================================================", "color:red;");
console.log("%c============================GAMES FOUND==============================", "color:red;");
console.log("%c=====================================================================", "color:red;");
 
    gameListDisplay();
    //display games icon
    logo.style.display = "block";
            mess.innerHTML = `<image src="`+data.gamePathInstall[0].pathfolder+`"/games/god_of_war/icon64X64.png" alt="`+gameName+ `">`

}


else{
 console.log("No games found");
}
   

})




let gameSr = new gameScreenR();
gameSr.displayResolution();



let ramK = new buildInternalCpu();
ramK.checkRam();


fetch('gradle.json')
.then(response => response.json());
