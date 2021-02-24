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

function Character(name, race, item, health, hit, heal) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.health = health;
    this.hit = hit;
    this.heal = heal;
}

// Create a Person object
var name1 = document.getElementById("name1").value;
// var race1 = document.getElementById("race1").value;
var item1 = document.getElementById("item1").value;
var PlayerOne = new Character(name1, race1, 50, 25, 95);


document.getElementById("submit1").addEventListener("click", () => {
    console.log((document.getElementById("name1").value));
})

document.getElementById("submit1").addEventListener("click", () => {
    console.log((document.getElementById("race1").value));
})

document.getElementById("submit1").addEventListener("click", () => {
    console.log(document.getElementById("item1").value);
})