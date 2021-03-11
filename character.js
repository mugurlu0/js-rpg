window.onload = () => {
    alert("new game")
};

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
            this.heal = false;
        }
        //20% increase in healing
        if (item.value == "staff") {

            return console.log("staff bonus"), Math.round((Math.random() * (this.maxHealing - this.min) + this.min) * 1.2);
        } else {
            return Math.floor(Math.random() * (this.maxHealing - this.min) + this.min)
        };
    };




    this.damage = function () {
        if (race.value == "human") {
            //20% less damage taken
            return (Math.floor(Math.random() * (this.maxDamage - this.min) + this.min)) * 0.8
        } else {
            return Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        }
    };
    this.totalDamage = this.damage();

    this.displayChar = function () {
        return (`I am ${this.name}: a ${this.race} who wields a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}
//image display on select 
function charSelect(race, carrousel) {
    race.value;
    var img = carrousel;
    switch (race.value) {
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
    }
}

race1.addEventListener("change", () => {
    charSelect(race1, charCarrousel);
})
race2.addEventListener("change", () => {
    charSelect(race2, charCarrousel2);
})

function randomizer(item, race, carrousel) {
    let raceRandom = Math.floor(Math.random() * 4);
    switch (raceRandom) {
        case 0:
            race.value = "orc";
            carrousel.src = "pics/orc.png";
            break;
        case 1:
            race.value = "vampire";
            carrousel.src = "pics/vamp.png";
            break;
        case 2:
            race.value = "elf";
            carrousel.src = "pics/elf.png";
            break;
        case 3:
            race.value = "human";
            carrousel.src = "pics/human.png";
            break;
    }
    var itemRandom = Math.floor(Math.random() * 4);
    switch (itemRandom) {
        case 0:
            item.value = 'sword';
            break;
        case 1:
            item.value = 'bow';
            break;
        case 2:
            item.value = 'boot';
            break;
        case 3:
            item.value = 'staff';
            break;
    }
}