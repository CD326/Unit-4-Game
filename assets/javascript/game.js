// GLOBAL VARIABLES
var crystal = {
    black:
        {
            name: "Black",
            value: 0
        },
    aqua:
        {
            name: "Aqua",
            value: 0
        },
    blue:
        {
            name: "Blue",
            value: 0
        },
    lavender:
        {
            name: "Lavender",
            value: 0
        },
}

var yourScore = 0;
var targetScore = 0;

var wins = 0;
var loss = 0;

// Functions
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    yourScore = 0;

    targetScore = getRandom(19, 120);

    crystal.black.value = getRandom(1, 12);
    crystal.aqua.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.lavender.value = getRandom(1, 12);

    $("#yourScore1").html(yourScore);
    $("#targetScore1").html(targetScore);
}

var addValues = function (crystal) {

    yourScore = yourScore + crystal.value;

    $("#yourScore1").html(yourScore);

    checkWin();
}

var checkWin = function () {
    if (yourScore > targetScore) {
        alert("Sorry you lost!");
        loss++;

        $("#losses1").html(loss);

        startGame();
    }

    else if (yourScore == targetScore) {
        alert("Congratulations, you won!");
        wins++;

        $("#wins1").html(wins);

        startGame();
    }
}

// Main
startGame()

$("#black").click(function () {
    addValues(crystal.black);
});

$("#aqua").click(function () {
    addValues(crystal.aqua);
});

$("#blue").click(function () {
    addValues(crystal.blue);
});

$("#lavender").click(function () {
    addValues(crystal.lavender);
});
