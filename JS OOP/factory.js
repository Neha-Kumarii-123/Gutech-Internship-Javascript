function createSquare(side){
   return {
    side,
    area(){
        return side *side;
    }
   };
}


    
const square=createSquare(4);
console.log(square.area());