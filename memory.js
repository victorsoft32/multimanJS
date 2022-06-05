
let memoryAddress = [
  1, 0, 1, 0, 1, 0, 1, 0, 1, 
  1, 0, 1, 0, 1, 0, 1, 0, 1, 
  1, 1, 0, 0, 1, 1, 1, 0, 1, 
  1, 0, 1, 0, 1, 0, 1, 0, 1
  ];//ram bytes
const hardDiskSize = 20000;//harddisk size 20GB

export default class buildInternalCpu{
  constructor(){
    this.memoryAddr = memoryAddress;
    this.harddiskSize = hardDiskSize;
    this.segementedAppaddress = 12;
  }
  
  
    checkRam(){
      if(this.memoryAddr=!this.sys){
        this.sys = 0;
        while(this.sys<=100){
          try{
       return Math.random(0, this.memoryAddr+2*2/10);
        //do not excute thid
        this.sys++;
        
          }
          catch{
            this.memoryAddr;
          }
          
          
        }
      }else{
        console.log("RAM NOT BUFFERED");
      }
    }
    
    
    checkHardDisk(){
      this.hardd = this.harddiskSize;
      if(this.hardd>0){
        return this.hardd;
      }
      else{
        return 0;
      }
    }
    
  
  
}


let addr = new buildInternalCpu();

console.log("%c=====================================================================", "color:red;");
console.log("%c======================INSTALLED MEMORY===============================", "color:red;");
console.log("%c=====================================================================", "color:red;");



console.log("Memory Installed: "+addr.checkRam()/2000);
console.log("Hard disk Installed: " +addr.checkHardDisk()+"MB");

