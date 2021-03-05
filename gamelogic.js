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

    }

}
//create char object  in console
var character1;
submit1.addEventListener("click", () => {
    character1 = new Person(name1.value, race1.value, item1.value);
    if (character1.race == "orc") {
        character1.maxHealth *= 1.4;
        character1.currenthealth *= 1.4;
    }
    if (character1.item == "staff") {
        character1.maxHealing = character1.maxHealing * 1.2;
    }
    if (character1.item == "sword") {
        character1.maxDamage = character1.maxDamage * 1.3;
    }

    moveLog.innerHTML += "<br><br> " + character1.displayChar();
    console.log(character1);
})

var character2;
submit2.addEventListener("click", () => {
    character2 = new Person(name2.value, race2.value, item2.value);
    if (character2.race == "orc") {
        character2.maxHealth *= 1.4;
        character2.currenthealth *= 1.4;
    }
    if (character2.item == "staff") {
        character2.maxHealing = character2.maxHealing * 1.2;
    }
    if (character2.item == "sword") {
        character2.maxDamage = character2.maxDamage * 1.3;
    }

    console.log(character2);
    moveLog.innerHTML += "<br><br> " + character2.displayChar();
})

//power and strength rely on char Race -> switch. values of switch will be stored in health, heal, attack.
//when race is selected, health, heal and attack will be filled automatically.


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
    character1.currenthealth += character1.heal();
    char1.value = character1.currenthealth;
    moveLog.innerHTML = (`${character1.name} heals himself ${character1.heal()}`);
    label1.innerHTML = `${character1.currenthealth} / ${character1.maxHealth}`;
    hit1.disabled = true;
    heal1.disabled = true;
    hit2.disabled = false;
    heal2.disabled = false;

})
yield1.addEventListener("click", () => {
    moveLog.innerHTML = `${character1.name} yields<br><br> GAME OVER`;
    hit1.disabled = true;
    heal1.disabled = true;
    hit2.disabled = true;
    heal2.disabled = true;
    yield1.disabled = true;
    yield2.disabled = true;
    setInterval(function () {
        window.location.reload();
    }, 5000);


})

heal2.addEventListener("click", () => {
    character2.currenthealth += character2.heal();
    char2.value = character2.currenthealth;
    moveLog.innerHTML = `${character2.name} heals himself ${character2.heal()}`;
    label2.innerHTML = `${character2.currenthealth} / ${character2.maxHealth}`;
    hit1.disabled = false;
    heal1.disabled = false;
    hit2.disabled = true;
    heal2.disabled = true;
})
yield2.addEventListener("click", () => {
    moveLog.innerHTML = `${character2.name} yields<br><br> GAME OVER`;
    hit1.disabled = true;
    heal1.disabled = true;
    hit2.disabled = true;
    heal2.disabled = true;
    yield1.disabled = true;
    yield2.disabled = true;
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
    raceRandom = Math.floor(Math.random() * 4);
    switch (raceRandom) {
        case 0:
            race1.value = "orc";
            charCarrousel.src = "pics/orc.png";
            break;
        case 1:
            race1.value = "vampire";
            charCarrousel.src = "pics/vamp.png";
            break;
        case 2:
            race1.value = "elf";
            charCarrousel.src = "pics/elf.png";
            break;
        case 3:
            race1.value = "human";
            charCarrousel.src = "pics/human.png";
            break;
    }
}

function randomChar2() {
    raceRandom2 = Math.floor(Math.random() * 4);
    switch (raceRandom2) {
        case 0:
            race2.value = "orc";
            charCarrousel2.src = "pics/orc.png";
            race2.
            break;
        case 1:
            race2.value = "vampire";
            charCarrousel2.src = "pics/vamp.png";
            break;
        case 2:
            race2.value = "elf";
            charCarrousel2.src = "pics/elf.png";
            break;
        case 3:
            race2.value = "human";
            charCarrousel2.src = "pics/human.png";
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
    return randomChar(), randomItem();
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

hit2.addEventListener("click", () => {
    if (character1.race == "human") {
        character2.totalDamage = Math.floor(this.totalDamage * 0.8);
        console.log(character2.totalDamage);
    }
    if (character1.item == "boot" && probability30()) {
        character2.totalDamage = 0;
        console.log(character1.name + "dodges")
    }
    if (character1.race == "elf") {
        probability30();
        if (probability30() === true) {

            moveLog.innerHTML = `${character1.name} deflects the attack`;

        }
        character2.currenthealth -= (character2.totalDamage / 2);
        character2.totalDamage = 0;
    }
    moveLog.innerHTML = `${character2.name} hits`;
    (character1.currenthealth -= character2.damage());
    if (character2.race == 'vampire' && hit1.disabled == true) {
        character2.currenthealth += Math.round((0.1 * character1.currenthealth));
        character1.currenthealth -= Math.round((0.1 * character1.currenthealth));
        moveLog.innerHTML = `${character2.name} steals life from ${character1.name}`
    }
    if (character1.currenthealth < 1) {
        character1.currenthealth = 0;
    }
    console.log(character1.currenthealth);
    char1.value = character1.currenthealth;
    label1.innerHTML = `${character1.currenthealth} / ${character1.maxHealth}`;
    hit1.disabled = false;
    heal1.disabled = false;
    hit2.disabled = true;
    heal2.disabled = true;

    if (character1.currenthealth == 0) {
        moveLog.innerHTML = `${character2.name} wins`;
        hit1.disabled = true;
        heal1.disabled = true;
        hit2.disabled = true;
        heal2.disabled = true;
        yield1.disabled = true;
        yield2.disabled = true;
        setInterval(function () {
            window.location.reload();
        }, 2000);
    }
})

hit1.addEventListener("click", () => {
    moveLog.innerHTML = `${character1.name} hits`;
    character2.currenthealth -= character1.totalDamage;
    if (character2.race == "human") {
        character1.totalDamage = Math.floor(this.totalDamage * 0.8);
        moveLog.innerHTML = (character1.totalDamage);
    }
    if (character2.item == "boot" && probability30()) {
        character1.totalDamage = 0;
        moveLog.innerHTML = (character2.name + "dodges")
    }
    if (character2.race == "elf") {
        if (probability30()) {
            character1.currenthealth -= character1.totalDamage / 2;
            moveLog.innerHTML = `${character2.name} deflects the attack`;
            character1.totalDamage = 0;
        }
    }
    if (character1.race == 'vampire' && hit2.disabled == true) {
        character1.currenthealth += Math.round((0.1 * character2.currenthealth));
        character2.currenthealth -= Math.round((0.1 * character2.currenthealth));
        moveLog.innerHTML = `${character1.name} steals life from ${character2.name}`
    }
    if (character2.currenthealth < 1) {
        character2.currenthealth = 0;
    }
    char2.value = character2.currenthealth;
    label2.innerHTML = `${character2.currenthealth} / ${character2.maxHealth}`;
    hit1.disabled = true;
    heal1.disabled = true;
    hit2.disabled = false;
    heal2.disabled = false;

    if (character2.currenthealth == 0) {
        moveLog.innerHTML = `${character1.name} wins`;
        hit1.disabled = true;
        heal1.disabled = true;
        hit2.disabled = true;
        heal2.disabled = true;
        yield1.disabled = true;
        yield2.disabled = true;
        setInterval(function () {
            window.location.reload();
        }, 2000);
    }
})