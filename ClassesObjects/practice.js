let DATA="secret Information";


class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data= ", DATA);
    }

}

class Admin extends User{

    constructor(name, email){
        super(name, email);


    }
    editData(){
        DATA="some new value";
    }
}
let student1=new User("Neha Kumari", "neha@email.com");
let student2 =new User("Madhu", "madhu@email.com");

let teacher1=new User ("Dean", "dean@email.com");

let admin1=new Admin("admin", "admin@college.com");

