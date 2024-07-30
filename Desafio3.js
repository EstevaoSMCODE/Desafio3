class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    Attack(){
        if (this.type == "MAGO")
            return "MAGIA"
        else if (this.type == "GUERREIRO")
            return "ESPADA"
        else if (this.type == "MONGE")
            return "ARTES MARCIAIS"
        else 
            return "SHURIKEN"
    }    
    Attacking(){
        console.log(`O ${this.type} atacou usando ${this.Attack()}`)    
    } 
}
let FirstClass = new Hero ("ROBERT", 80, "MAGO")
let SecondClass = new Hero ("BJON", 35, "GUERREIRO")
let ThirdClass = new Hero ("CLECIUS", 110, "MONGE")
let FourthClass =  new Hero ("RUAN", 25, "NINJA")

FirstClass.Attacking()
SecondClass.Attacking()
ThirdClass.Attacking()
FourthClass.Attacking()