//Use this script to generate your character
function Person(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () { };

    this.damage = function () { };

    this.totalDamage = this.damage();

    this.displayChar = function () {
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
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
// document.getElementById("submit1").addEventListener("click", () => {
//     var name1 = ((document.getElementById("name1").value));
// })

// document.getElementById("submit1").addEventListener("click", () => {
//     var race1 = ((document.getElementById("race1").value));
// })

// document.getElementById("submit1").addEventListener("click", () => {
//     var item1 = (document.getElementById("item1").value);
// })

document.getElementById("submit1").addEventListener("click", () => {
    var chaR1 = new Person(race1.value, item1.value);
    console.log(chaR1);
})
document.getElementById("submit2").addEventListener("click", () => {
    var chaR2 = new Person(race2.value, item2.value);
    console.log(chaR2);
})
