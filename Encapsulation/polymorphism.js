class Animal{
    speak(){
        console.log("Animal makes a sound");

    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog Barks");
    }
}

class Cat extends Animal{

    speak(){
        console.log("cat Meows");
    }
    
}

const dog=new Dog();
dog.speak();

const cat =new Cat();
cat.speak();
//Output: Dog Barks , Cat Meows

class Calculator{
    add(a,b){
        if(b===undefined){
            return a+a;

        }

        return a+b;
    }
}

const calc =new Calculator();
console.log(calc.add(4));
console.log(calc.add(4,6))


class A{
    area(x,y){
        console.log(x*y);
    }
}

class B extends A{
    area(a,b){
        super.area(a,b);
        console.log('Class B')
    }
}


let obj=new B();
let Output=obj.area(100,20);