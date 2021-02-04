
document.addEventListener("DOMContentLoaded", start);

function start () {

    document.querySelector("button.rock"),addEventListener("click", rock);
    document.querySelector("button.paper"),addEventListener("click", paper);
    document.querySelector("button.scissors"),addEventListener("click", scissors);

}

let player;
let computer;
let Random;

function rock () {

    document.querySelector("#player1").classList.add("playerrock");

    document.querySelector("#buttons").classList.add("disabled_button");

    player = rock;

    all();

}

function paper () {

    document.querySelector("#player1").classList.add("playerpaper");

    document.querySelector("#buttons").classList.add("disabled_button");

    player = paper;

    all();

}

function scissors () {

    document.querySelector("#player1").classList.add("playerscissors");

    document.querySelector("#buttons").classList.add("disabled_button");

    player = scissors;

    all();

}

function all () {

    computerRandom();

    document.querySelector("button.rock"),removeEventListener("click", rock);
    document.querySelector("button.paper"),removeEventListener("click", paper);
    document.querySelector("button.scissors"),removeEventListener("click", scissors);

    decider();

}

function computerRandom () {

Random = Math.floor(Math.random() * 3) + 1;

if (Random == 1) {

    computer = rock;

    console.log("Computer rock");

    document.querySelector("#player2").classList.add("playerrock");

}

if (Random == 2) {

    computer = paper;

    console.log("Computer paper");

    document.querySelector("#player2").classList.add("playerpaper");

}

if (Random == 3) {

    computer = scissors;

    console.log("Computer scissors");

    document.querySelector("#player2").classList.add("playerscissors");

}

}

function decider () {

    if (player == rock && computer == rock) {
        tie();
    }

    if (player == rock && computer == paper) {
        lose();
    }

    if (player == rock && computer == scissors) {
        win();
    }



    if (player == paper && computer == rock) {
        win();
    }

    if (player == paper && computer == paper) {
        tie();
    }

    if (player == paper && computer == scissors) {
        lose();
    }



    if (player == scissors && computer == rock) {
        lose();
    }

    if (player == scissors && computer == paper) {
        win();
    }

    if (player == scissors && computer == scissors) {
        tie();
    }


}

function tie() {

    console.log("tie");

    document.querySelector("#draw").classList.remove("hidden")

}

function lose() {

    console.log("lose");

    document.querySelector("#lose").classList.remove("hidden")

}

function win() {

    console.log("win");

    document.querySelector("#win").classList.remove("hidden")

}


