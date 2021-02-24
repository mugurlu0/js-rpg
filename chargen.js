
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

//power and strength rely on char Race -> switch. values of switch will be stored in health, heal, attack.
//when race is selected, health, heal and attack will be filled automatically.

let racex = ((document.getElementById("race1").value));;
switch (racex) {
    case 'orc':
        console.log(`You are a ${racex}.`);
        break;
    case 'vampire':
        console.log(`You are a ${racex}.`);
        break;
    case 'human':
        console.log(`You are a ${racex}.`);
        break;
    case 'elf':
        console.log(`You are a ${racex}.`);
        break;
    default:
        console.log(`You are a ${racex}.`);
}



//create another switch for items, the values of the item will be added to the char's object(dodge, heal, damage, attack twice)


let itemx = (document.getElementById("item1").value);
switch (itemx) {
    case 'sword':
        console.log(`You have a ${itemx}.`);
        break;
    case 'bow':
        console.log(`You have a ${itemx}.`);
        break;
    case 'boot':
        console.log(`You have a ${itemx}.`);
        break;
    case 'staff':
        console.log(`You have a ${itemx}.`);
        break;
    default:
        console.log(`You have a ${itemx}.`);
}