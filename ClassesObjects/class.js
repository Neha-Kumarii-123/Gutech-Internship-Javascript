class ToyotaCar{
    constructor(brand, mileage){
        console.log("Creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start the car");
    }

     stop(){
        console.log("Stop car");
    }

   

}

let fortuner = new ToyotaCar("fortuner, 20"); //constructor
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus=new ToyotaCar("lexus , 20")//constructor
console.log(lexus );
// lexus.setBrand("lexus");

//31:19

