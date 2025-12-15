// console.log('Hello world! ')


//Factory Function
function createCircle(radius){
    return{
    radius: radius,
   draw: function(){
    console.log('draw');
   }
};

}

const circle=createCircle(1);
circle.draw();

//Constructor Function
function Circle (radius){
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }
}

const another=new Circle(2);
//19:47