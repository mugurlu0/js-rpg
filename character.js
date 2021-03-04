window.onload = function () {
    new_game();
}

function new_game() {
    alert("new game")
}
//Use this script to generate your character
function Person(name, race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () {
        if (this.currenthealth > 99) {
            this.currenthealth = 100;
            this.healing = false;
        }
        return this.healing = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
    };

    this.damage = function () {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };
    this.totalDamage = this.damage();

    this.displayChar = function () {
        return (`I am ${this.name}: a ${this.race} who wields a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}