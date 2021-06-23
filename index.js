function startGame() {
    document.getElementById("play_again").style.display = "none";
    document.getElementById("play_again2").style.display = "none";
    document.getElementById("screen").style.display = "none";
    document.getElementById("hallway").style.display = "block";

    let num = Math.floor(Math.random() * 2);
    console.log(num);

    if (num == 0) {
        document.getElementById("50_1").style.display = "block";
        document.getElementById("50_2").style.display = "none";
        document.getElementById("play_again").style.display = "none";
        document.getElementById("play_again2").style.display = "block";
    } else if (num == 1) {
        document.getElementById("50_1").style.display = "none";
        document.getElementById("50_2").style.display = "block";
        document.getElementById("play_again").style.display = "block";
        document.getElementById("play_again2").style.display = "none";
    }
}

function playAgain() {
    location.reload();
}

function gotoHallway() {
    document.getElementById("screen").style.display = "none";
    document.getElementById("hallway").style.display = "block";
}

function gotoDining() {
    document.getElementById("screen").style.display = "block";
    document.getElementById("hallway").style.display = "none";
    document.getElementById("bedroom").style.display = "none";
    document.getElementById("dining").style.display = "block";
}

function gotoBedroom() {
    document.getElementById("screen").style.display = "block";
    document.getElementById("hallway").style.display = "none";
    document.getElementById("bedroom").style.display = "block";
    document.getElementById("dining").style.display = "none";

}