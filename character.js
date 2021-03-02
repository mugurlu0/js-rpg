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
        this.healing = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
        if (this.currenthealth > 99) {
            this.currenthealth = 100;
            this.healing = false;
        }
        this.currenthealth += this.healing;
        return this.currenthealth;

    };

    this.damage = function () {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };
    this.attack1 = hit1.addEventListener("click", () => {
        console.log(`${character1.name} hits`);
        (character2.currenthealth -= character1.damage());
        if (character2.currenthealth <= 0) {
            character2.currenthealth = 0;
        }
        console.log(character2.currenthealth);
        char2.value = character2.currenthealth;
        label2.innerHTML = `${character2.currenthealth} %`;
    })

    this.attack2 = hit2.addEventListener("click", () => {
        console.log(`${character2.name} hits`);
        (character1.currenthealth -= character2.damage());
        if (character1.currenthealth <= 0) {
            character1.currenthealth = 0;
        }
        console.log(character1.currenthealth);
        char1.value = character1.currenthealth;
        label1.innerHTML = `${character1.currenthealth} %`;
    })


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
    } else {
        return ("normal attack");
    }
}

//image display on select 1st player
function charSelect() {
    var char = race1.value;
    var img = charCarrousel;
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
            charCarrousel.src = "pics/no-char.png";
    }

}
//image display on select 2nd player
function charSelect2() {
    var char2 = race2.value;
    var img = charCarrousel2;
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
            charCarrousel2.src = "pics/no-char.png";
    }

}
//create char object  in console
var character1;
submit1.addEventListener("click", () => {
    character1 = new Person(name1.value, race1.value, item1.value);
    console.log(character1);



})
var character2;
submit2.addEventListener("click", () => {
    character2 = new Person(name2.value, race2.value, item2.value);
    console.log(character2);


})

//power and strength rely on char Race -> switch. values of switch will be stored in health, heal, attack.
//when race is selected, health, heal and attack will be filled automatically.

let raceSwitch1;
submit1.addEventListener("click", () => {
    raceSwitch1 = race1.value;
    switch (raceSwitch1) {
        case 'orc':
            character1.maxHealing *= 1.4;
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'vampire':
            //click hit
            this.attack *= 1.1;
            character1.currenthealth = character1.currenthealth + (0.1 * character2.currenthealth);
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'human':
            this.damage *= 0.8;
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'elf':
            var deflect = probability30();
            if (deflect === true) {
                character1.damage = 0;
                character1.attack = character2.attack / 2;
            }
            console.log(`You are a ${raceSwitch1}.`);
            break;
        default:
            console.log(`You are a ${raceSwitch1}.`);
    }

})

//create another switch for items, the values of the item will be added to the char's object(dodge, heal, damage, attack twice)

let itemSwitch1;
submit1.addEventListener("click", () => {
    itemSwitch1 = item1.value;
    switch (itemSwitch1) {
        case 'sword':
            character1.maxDamage *= 1.3;
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'bow':
            var attackTwice = probability30();
            if (attackTwice === true) {
                character1.attack = this.attack + this.attack;
            }
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'boot':
            var dodge = probability30();
            if (dodge === true) {
                character1.damage = 0;
            }
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'staff':
            character1.maxHealing *= 1.2;
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
submit2.addEventListener("click", () => {
    raceSwitch2 = race2.value;
    switch (raceSwitch2) {
        case 'orc':
            character2.maxHealing *= 1.4;
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'vampire':
            //click hit
            this.attack *= 1.1;
            character2.currenthealth = character2.currenthealth + (0.1 * character1.currenthealth);
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'human':
            this.damage *= 0.8;
            console.log(`You are a ${raceSwitch1}.`);
            break;
        case 'elf':
            var deflect = probability30();
            if (deflect === true) {
                character2.damage = 0;
                character2.attack = character1.attack / 2;
            }
            console.log(`You are a ${raceSwitch1}.`);
            break;
        default:
            console.log(`You are a ${raceSwitch1}.`);
    }
})



//create another switch for items, the values of the item will be added to the char's object(dodge, heal, damage, attack twice)


let itemSwitch2;
submit2.addEventListener("click", () => {
    itemSwitch2 = item2.value;
    switch (itemSwitch2) {
        case 'sword':
            character2.maxDamage *= 1.3;
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'bow':
            var attackTwice = probability30();
            if (attackTwice === true) {
                character2.attack = this.attack + this.attack;
            }
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'boot':
            var dodge = probability30();
            if (dodge === true) {
                character2.damage = 0;
            }
            console.log(`You have a ${itemSwitch1}.`);
            break;
        case 'staff':
            character2.maxHealing *= 1.2;
            console.log(`You have a ${itemSwitch1}.`);
            break;
        default:
            console.log(`You have a ${itemSwitch1}.`);
    }
})

function probability30() {
    var probability30Array = [true, false, false, true, false, true, false, false, false, false];
    var random = Math.floor(Math.random() * probability30Array.length);
    return probability30Array[random];
}

if (character1 == null && character2 == null) {
    logContainer.style.display = "none";
    console.log("empty");
}

submit2.addEventListener('click', () => {
    if (character1.race.value != "" && character2.race.value != "") {
        document.getElementById('logContainer').style.display = "block";
        console.log("not empty");
        playerOne.style.display = "block";
        playerTwo.style.display = "block";
        char2.style.display = "block";
        char1.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    }
})
submit1.addEventListener('click', () => {
    if (character1.race.value != "" && character2.race.value != "") {
        document.getElementById('logContainer').style.display = "block";
        console.log("not empty");
        playerOne.style.display = "block";
        playerTwo.style.display = "block";
        char2.style.display = "block";
        char1.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    }
})
submit2.addEventListener('click', () => {
    if (character1.race.value != "" && character2.race.value != "") {
        document.getElementById('creationPanel').style.display = "none";
        console.log("not empty");
    }
})
submit1.addEventListener('click', () => {
    if (character1.race.value != "" && character2.race.value != "") {
        document.getElementById('creationPanel').style.display = "none";
        console.log("not empty");
    }
})

var LogOfMoves = moveLog.innerHTML;
console.log(LogOfMoves);

heal1.addEventListener("click", () => {
    character1.heal();
    char1.value = character1.currenthealth;
    moveLog.innerHTML = (`${character1.name} heals himself ${character1.heal()}`);
    label1.innerHTML = `${character1.currenthealth} %`;
})
yield1.addEventListener("click", () => {
    moveLog.innerHTML = `${character1.name} yields<br><br> GAME OVER`;
    setInterval(function () {
        window.location.reload();
    }, 5000);

})

heal2.addEventListener("click", () => {
    character2.heal();
    char2.value = character2.currenthealth;
    moveLog.innerHTML = `${character2.name} heals himself ${character2.heal()}`;
    label2.innerHTML = `${character2.currenthealth} %`;
})
yield2.addEventListener("click", () => {
    moveLog.innerHTML = `${character2.name} yields<br><br> GAME OVER`;
    setInterval(function () {
        window.location.reload();
    }, 5000);

})

char1.style.display = "none";
char2.style.display = "none";

playerOne.style.display = "none";
playerTwo.style.display = "none";

label1.style.display = "none";
label2.style.display = "none";

function randomChar() {
    var raceRandom = Math.floor(Math.random() * 4);
    switch (raceRandom) {
        case 0:
            race1.value = "orc";
            break;
        case 1:
            race1.value = "vampire";
            break;
        case 2:
            race1.value = "elf";
            break;
        case 3:
            race1.value = "human";
            break;
    }
}
function randomChar2() {
    raceRandom2 = Math.floor(Math.random() * 4);
    switch (raceRandom2) {
        case 0:
            race2.value = "orc";
            break;
        case 1:
            race2.value = "vampire";
            break;
        case 2:
            race2.value = "elf";
            break;
        case 3:
            race2.value = "human";
            break;
    }
}

function randomItem() {
    var itemRandom = Math.floor(Math.random() * 4);
    switch (itemRandom) {
        case 0:
            item1.value = 'sword';
            break;
        case 1:
            item1.value = 'bow';
            break;
        case 2:
            item1.value = 'boot';
            break;
        case 3:
            item1.value = 'staff';
            break;
    }

}

random1.addEventListener("click", () => {
    return randomChar() ,randomItem();
})
random2.addEventListener("click", () => {
    return randomChar2(), randomItem2();
})

function randomItem2() {
    var itemRandom2 = Math.floor(Math.random() * 4);
    switch (itemRandom2) {
        case 0:
            item2.value = 'sword';
            break;
        case 1:
            item2.value = 'bow';
            break;
        case 2:
            item2.value = 'boot';
            break;
        case 3:
            item2.value = 'staff';
            break;
    }

}

var progress= document.getElementsByTagName("progress");
if(progress.value>=50){
    progress.style.background="red";
}