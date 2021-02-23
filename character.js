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