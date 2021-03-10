var yieldWasClicked = false;
char1.style.display = "none";
char2.style.display = "none";

playerOne.style.display = "none";
playerTwo.style.display = "none";

label1.style.display = "none";
label2.style.display = "none";

if (character1 == null && character2 == null) {
    logContainer.style.display = "none";
}

var charAttack=false;
var opAttack=false;

display = () => {
    if (character1.race != "" && character2.race != "") {
        logContainer.style.display = "block";
        playerOne.style.display = "block";
        playerTwo.style.display = "block";
        char2.style.display = "block";
        char1.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
        creationPanel.style.display = "none";
    }
}

turn = (hit, heal, hitOpp, healOpp) => {
    hit.disabled = true;
    heal.disabled = true;
    hitOpp.disabled = false;
    healOpp.disabled = false;
}

progressBar = (label, character, char) => {
    if(character.currenthealth<1){
        character.currenthealth=0
    }
    if (character.currenthealth>99){
        character.currenthealth=character.maxHealth
    }
    label.innerHTML = `${Math.round(character.currenthealth)} / ${character.maxHealth}`,
    char.value = character.currenthealth;
}


attack = (character, opponent) => {
    moveLog.innerHTML = `${character.name} hits`;
    if (opponent.currenthealth<=0){
        opponent.currenthealth = 0;
    };
  return opponent.currenthealth -= character.totalDamage;

  /*switch  case "sword":
            //30% more damage
            opponent.totalDamage = Math.round(opponent.totalDamage *1.3);
            break; 
            
                    case "elf":
            //30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
            if (probability30() == true && attackChar==true) {
               
                moveLog.innerHTML = `${character.name} deflects the attack`;
                attackChar==false;
                var elf = opponent.totalDamage;
                opponent.currenthealth -= Math.round(elf/ 2);
                character.currenthealth += elf;
                
            }
            break;
            
              case "vampire":
            //10% lifesteal from opponents current health at start of the vampire's turn.
            if (hitChar.disabled == false) {
                character.currenthealth += Math.round(0.1 * opponent.currenthealth);
                opponent.currenthealth -=Math.round(0.1 * opponent.currenthealth);
                moveLog.innerHTML += `${opponent.name} steals life from ${character.name}`;
                console.log("steals");
            }
            break;
            
                    case "boots":
            //30% chance to dodge an attack
            if (probability30() == true) {
                character.totalDamage = 0;
                moveLog.innerHTML = `${character.name} dodges the attack`;
            }
            break;
       
                    case "bow":
            //30% chance to attack twice
            if (probability30() == true && charAttack==true) {
                moveLog.innerHTML = `${character.name} attacks twice`;
                charAttack=false;
            };
            break;
            */

}

function probability30() {
    var probability30Array = [true, false, false, true, false, true, false, false, false, false];
    var random = Math.floor(Math.random() * probability30Array.length);
    return probability30Array[random];
}

allDisabled = () => {
    hit1.disabled = true;
    heal1.disabled = true;
    hit2.disabled = true;
    heal2.disabled = true;
    yield1.disabled = true;
    yield2.disabled = true;
}

gameOver = (character, opponent) => {
        if(character.currenthealth <1){
        character.currenthealth = 0;
            moveLog.innerHTML = `${character.name} loses<br><br> GAME OVER<br><br> ${opponent.name} wins`;
        allDisabled();
        setInterval(function () {
            window.location.reload();
        }, 5000);
    }
   
    else if (yieldWasClicked == true) {
        moveLog.innerHTML = `${character.name} yields<br><br> GAME OVER<br><br> ${opponent.name} wins`;
        allDisabled();
        setInterval(function () {
            window.location.reload();
        }, 5000);
    }
}

//create char object  in console
var character1;
submit1.addEventListener("click", () => {
    character1 = new Person(name1.value, race1.value, item1.value);
    moveLog.innerHTML += "<br> " + character1.displayChar();
    progressBar(label1, character1, char1);
    progressBar(label2, character2, char2);
    display();
})

var character2;
submit2.addEventListener("click", () => {
    character2 = new Person(name2.value, race2.value, item2.value);
    moveLog.innerHTML += "<br><br> " + character2.displayChar();
    progressBar(label1, character1, char1);
    progressBar(label2, character2, char2);
    display();
})

//power and strength rely on char Race -> switch. values of switch will be stored in health, heal, attack.
//when race is selected, health, heal and attack will be filled automatically.


heal1.addEventListener("click", () => {
    character1.currenthealth += character1.heal();
    moveLog.innerHTML = (`${character1.name} heals himself`);
    progressBar(label1, character1, char1);
    turn(hit1, heal1, hit2, heal2);

})

heal2.addEventListener("click", () => {
    character2.currenthealth += character2.heal();
    moveLog.innerHTML = `${character2.name} heals himself`;
    progressBar(label2, character2, char2);
    turn(hit2, heal2, hit1, heal1);
})

random1.addEventListener("click", () => {
    return randomizer(item1, race1, charCarrousel);
})
random2.addEventListener("click", () => {
    return randomizer(item2, race2, charCarrousel2);
})

hit1.addEventListener("click", () => {
    attack(character1, character2);
    progressBar(label2, character2, char2);
    turn(hit1, heal1, hit2, heal2);
    gameOver(character2, character1);
    charAttack=true;
opAttack=false;
})

hit2.addEventListener("click", () => {
    attack(character2, character1);
    progressBar(label1, character1, char1);
    turn(hit2, heal2, hit1, heal1);
    gameOver(character1, character2);
    charAttack=false;
    opAttack=true;
})

yield1.addEventListener("click", () => {
    yieldWasClicked = true;
    gameOver(character1, character2);
})

yield2.addEventListener("click", () => {
    yieldWasClicked = true;
    gameOver(character1, character2);
})