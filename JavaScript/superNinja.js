class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name)
        console.log("Health: " + this.health)
        console.log("Speed: " + this.speed)
        console.log("Strength: " + this.strength)
    }
    drinkSake(){
        console.log("Drink this it will make you feel better, Health is now: " + (this.health += 10))
    }
}


const ninja1 = new Ninja("Hyabusa", "100", "3", "3");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor(name, health=210, speed=10, strength=10, wisdom=10){
        super(wisdom)
        this.wisdom = wisdom;
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    speakWisdom(){
        console.log("Wisdom: " + this.wisdom)
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();