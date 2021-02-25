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
        var healPoints = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
        return healPoints;
    };

    this.damage = function () {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };
    this.attack = function () { this.currentHealth -= this.damage(); }
    this.totalDamage = this.damage();

    this.displayChar = function () {
        return console.log(`I am ${this.name}: a ${this.race} who wields a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}
probability30 = () => {
    [true, false, false, true, false, true, false, false, false, false];

    var index = Math.floor(Math.random() * probability30.length);
    if (probability30[index] === true) {
        return ("attack twice");
    }
    else { return ("normal attack"); }
}

//image display on select 1st player
function charSelect() {
    var char = document.getElementById("race1").value;
    var img = document.getElementById("charCarrousel");
    switch (char) {

        case "vampire":
            img.src = "pics/vamp.png";
            break;

        case "orc":
            img.src = "pics/orc.png";
            break;

        case "elf":
            img.src = "pics/elf.png";
            break;

        case "human":
            img.src = "pics/human.png";
            break;
        default:
            document.getElementById("charCarrousel").src = "pics/no-char.png";
    }

}
//image display on select 2nd player
function charSelect2() {
    var char2 = document.getElementById("race2").value;
    var img = document.getElementById("charCarrousel2");
    switch (char2) {

        case "vampire":
            img.src = "pics/vamp.png";
            break;

        case "orc":
            img.src = "pics/orc.png";
            break;

        case "elf":
            img.src = "pics/elf.png";
            break;

        case "human":
            img.src = "pics/human.png";
            break;
        default:
            document.getElementById("charCarrousel2").src = "pics/no-char.png";
    }

}
//create char object  in console
var chaR1;
document.getElementById("submit1").addEventListener("click", () => {
    chaR1 = new Person(name1.value, race1.value, item1.value);
    console.log(chaR1);
})
var chaR2;
document.getElementById("submit2").addEventListener("click", () => {
    chaR2 = new Person(name2.value, race2.value, item2.value);
    console.log(chaR2);
})

//power and strength rely on char Race -> switch. values of switch will be stored in health, heal, attack.
//when race is selected, health, heal and attack will be filled automatically.

let raceSwitch1;
document.getElementById("submit1").addEventListener("click", () => {
    raceSwitch1 = ((document.getElementById("race1").value));;
    switch (raceSwitch1) {
        case 'orc':
            chaR1.maxHealing *= 1.4;
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'vampire':
            //click hit
            this.attack *= 1.1;
            chaR1.currentHealth = this.currentHealth + (0.1 * chaR2.currentHealth);
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'human':
            this.damage *= 0.8;
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'elf':
            var deflect = probability30();
            if (deflect === true) {
                chaR1.damage = 0;
                chaR1.attack = chaR2.attack / 2;
            }
            console.log(`You are a ${raceSwitch1}.`);
            break;
        default:
            console.log(`You are a ${raceSwitch1}.`);
    }

})



//create another switch for items, the values of the item will be added to the char's object(dodge, heal, damage, attack twice)


let itemSwitch1;
document.getElementById("submit1").addEventListener("click", () => {
    itemSwitch1 = (document.getElementById("item1").value);
    switch (itemSwitch1) {
        case 'sword':
            chaR1.maxDamage *= 1.3;
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'bow':
            var attackTwice = probability30();
            if (attackTwice === true) {
                chaR1.attack = this.attack + this.attack;
            }
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'boot':
            var dodge = probability30();
            if (dodge === true) {
                chaR1.damage = 0;
            }
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'staff':
            chaR1.maxHealing *= 1.2;
            console.log(`You have a ${itemSwitch1}.`);
            break;
        default:
            console.log(`You have a ${itemSwitch1}.`);
    }
})

// switches for 2nd char
//power and strength rely on char Race -> switch. values of switch will be stored in health, heal, attack.
//when race is selected, health, heal and attack will be filled automatically.

let raceSwitch2;
document.getElementById("submit2").addEventListener("click", () => {
    raceSwitch2 = ((document.getElementById("race2").value));;
    switch (raceSwitch2) {
        case 'orc':
            chaR2.maxHealing *= 1.4;
            console.log(`You are a ${raceSwitch2}.`);
            break;
        case 'vampire':
            console.log(`You are a ${raceSwitch2}.`);
            break;
        case 'human':
            console.log(`You are a ${raceSwitch2}.`);
            break;
        case 'elf':
            console.log(`You are a ${raceSwitch2}.`);
            break;
        default:
            console.log(`You are a ${raceSwitch2}.`);
    }

})



//create another switch for items, the values of the item will be added to the char's object(dodge, heal, damage, attack twice)


let itemSwitch2;
document.getElementById("submit2").addEventListener("click", () => {
    itemSwitch2 = (document.getElementById("item2").value);
    switch (itemSwitch2) {
        case 'sword':
            chaR2.maxDamage *= 1.3;
            console.log(`You have a ${itemSwitch2}.`);
            break;
        case 'bow':
            console.log(`You have a ${itemSwitch2}.`);
            break;
        case 'boot':
            console.log(`You have a ${itemSwitch2}.`);
            break;
        case 'staff':
            chaR2.maxHealing *= 1.2;
            console.log(`You have a ${itemSwitch2}.`);
            break;
        default:
            console.log(`You have a ${itemSwitch2}.`);
    }
})



function probability30() {
    var probability30Array = [true, false, false, true, false, true, false, false, false, false];
    var random = Math.floor(Math.random() * probability30Array.length);
    return probability30Array[random];
}