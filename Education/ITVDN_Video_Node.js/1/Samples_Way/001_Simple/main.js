function User(name){
    this.name = name;
    this.sayHello = () => {
        console.log('Hello ', this.name);
    };
}

const Jhon = new User('Jhon');

Jhon.sayHello();