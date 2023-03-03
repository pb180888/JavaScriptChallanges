let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 500) + 1;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = `No number`;
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = `You WIN!!!`;
    document.querySelector("body").style.backgroundColor = `green`;
    document.querySelector(".number").style.width = `25rem`;
    document.querySelector(".message").style.fontSize = `6rem`;
    document.querySelector(".message").style.height = `9rem`;
    highscore++;
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".check").style.visibility = "hidden";
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector(".message").textContent = `Too high`;
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = `Too low`;
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".score").textContent = `You lose`;
    document.querySelector(".check").style.visibility = "hidden";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 500) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  score = 20;
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = `15rem`;
  document.querySelector(".message").style.fontSize = `2rem`;
  document.querySelector(".message").style.height = `3rem`;
  document.querySelector(".message").textContent = `Start guessing...`;
});
