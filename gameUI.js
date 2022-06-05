const gameWidthY  = 100;
const gameHeightX = 100;

const gameBorder = {
    x: gameHeightX,
    y: gameWidthY

} 






export default class gameScreenR{
    constructor(){
        this.gameScreenX = gameBorder.x;
        this.gameScreenY = gameBorder.y;

        
    }

    displayResolution(){
        this.x1 = this.gameScreenX;
        this.y1 = this.gameScreenY;
        
        if(this.x1 == 100 && this.y1 == 100){
            try{
                this.x1 = this.x1;
                document.body.width = this.x1;
                document.body.height = this.y1;
                
                
            }
           
            catch{
                this.y1 =! this.y1;
            }
            finally{
                this.x1 == this.y1;
            }
        }
       
        

    }
}