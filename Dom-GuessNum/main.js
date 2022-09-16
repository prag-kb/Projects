// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent= 'correct number!';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//assinging a random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// highscore variable storing
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//when clicking check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displayMessage("No number");

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Corrct number";
    displayMessage("correct number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //for highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high" : "Too low");
    score--;
    document.querySelector(".score").textContent = score;
    // document.querySelector(".message").textContent =
    //   guess > secretNumber ? "Too high" : "Too low";
    // score--;
    // document.querySelector(".score").textContent = score;

    //score reaches 0
  } else {
    // document.querySelector(".message").textContent = "yu lost the game";
    displayMessage("yu lost the game");
    document.querySelector(".score").textContent = 0;
  }

  //Too high

  // }else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;

  //     //score reaches 0
  //   } else {
  //     document.querySelector(".message").textContent = "yu lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // Too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;

  //     //score reches 0
  //   } else {
  //     document.querySelector(".message").textContent = "yu lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// again! button function
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
