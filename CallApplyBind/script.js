class Monster{
    constructor(name){
        this.name = name;
    }

    attack(){
        console.log(`${this.name} attacked`);
    }

    walk(){
        console.log(`${this.name} walked`);
    }
}

class FlyingMonster extends Monster{
    fly(){
                console.log(`${this.name} flew`);


    }
}

class SwimmingMonster extends Monster{
    swim(){
                console.log(`${this.name} swam`);


    }
}

class FlyingSwimmingMonster extends Monster{

}

const bear= new Monster('bear');
bear.walk();
bear.attack();

const eagle= new FlyingMonster('eagle');
eagle.walk();
eagle.attack();
eagle.fly();

const shark= new SwimmingMonster('shark');
shark.walk();
shark.attack();
shark.swim();



function swimmer ({name}){
    return{
    fly: () =>      console.log(`${name} flew`)

    }
}

function flyer ({name}){
    return{
        swim: () =>      console.log(`${name} swam`)

    }
}

function SwimmingMonsterCreator(name){
    const monster={ name: name   }

    return{
        ...monster,
        ...swimmer(monster)
    }

}

function flyingSwimmingMonsterCreator(name){
    const monster={ name: name   }

    return{
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }

}


const obj=SwimmingMonsterCreator('Monster')
obj.swim()
obj.fly()


