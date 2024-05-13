'use strict';

function toggleMenu() {
  document.querySelector('.menu-toggle').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
}

let playerScore = 0;
let computerScore = 0;
const choices = ["pierre", "feuille", "ciseaux"];


// Fonction pour jouer une manche
function playRound(playerChoice) {
    // Génération du choix de l'ordinateur
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Affichage des choix
    document.getElementById("playerChoice").textContent = playerChoice;
    document.getElementById("computerChoice").textContent = computerChoice;

    // Vérification du résultat
    if (playerChoice === computerChoice) {
        document.getElementById("result").textContent = "Égalité !";
        const drawManche = document.getElementById("draw-manche");
        drawManche.currentTime = 0; // Rembobiner le son à chaque fois
        drawManche.play();
    } else if (
        (playerChoice === "pierre" && computerChoice === "ciseaux") ||
        (playerChoice === "feuille" && computerChoice === "pierre") ||
        (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
        const victoryManche = document.getElementById("victory-manche");
        victoryManche.currentTime = 0; // Rembobiner le son à chaque fois
        victoryManche.play();
        document.getElementById("result").textContent = "Vous avez gagné cette manche !";
        playerScore++;
    } else {
        const looseManche = document.getElementById("loose-manche");
        looseManche.currentTime = 0; // Rembobiner le son à chaque fois
        looseManche.play();
        document.getElementById("result").textContent = "L'ordinateur a gagné cette manche !";
        computerScore++;
    }

    // Mise à jour du score
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    // Vérification du gagnant de la partie
    if (playerScore === 5) {
        document.getElementById("gameResult").textContent = "Félicitations ! Vous avez gagné la partie !";
        // Jouer le son de la victoire
        const victorySound = document.getElementById("victory-sound");
        victorySound.currentTime = 0; // Rembobiner le son à chaque fois
        victorySound.play();
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById("gameResult").textContent = "Désolé, l'ordinateur a gagné la partie.";
        // Jouer le son de l'echec'
        const looseSound = document.getElementById("loose-sound");
        looseSound.currentTime = 0; // Rembobiner le son à chaque fois
        looseSound.play();
        disableButtons();
    }
}

// new partie
function newGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("gameResult").textContent = "";
  document.querySelectorAll("button").forEach(button => {
      button.disabled = false;
  });
}

// Fonction pour désactiver les boutons après la fin du jeu
function disableButtons() {
    document.querySelectorAll(".game-play button").forEach(button => {
        button.disabled = true;
    });
}
