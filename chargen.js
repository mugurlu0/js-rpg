
document.getElementById("submit1").addEventListener("click", () => {
    const name1 = ((document.getElementById("name1").value));
    const race1 = ((document.getElementById("race1").value));
    const item1 = (document.getElementById("item1").value);
})

function CharacterGenerator(name, race, item, health, heal, attack) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.health = health;
    this.heal = heal;
    this.attack = attack;
}

let char1 = new CharacterGenerator(name1, race1, item1);

