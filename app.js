

var player1 = Math.floor(Math.random() * 6 + 1);

var player2 = Math.floor(Math.random() * 6 + 1);

var newSource1 = "images/dice" + player1 + ".png";

var newSource2 = "images/dice" + player2 + ".png";
document.querySelector(".img1").setAttribute("src", newSource1);

document.querySelector(".img2").setAttribute("src", newSource2);


if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 won!"
} else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 won!"
} else {
    document.querySelector("h1").textContent = "DRAW"
}
