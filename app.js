const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetButton = document.querySelector("#reset");
const winPointOption = document.querySelector('#winpoint');

let winPoint = 3;
let isGameOver = false;

let addScore = (scoreDisplay) => {
    let score = parseInt(scoreDisplay.textContent);
    score < winPoint ? score += 1 : !isGameOver;
    scoreDisplay.textContent = score;
};

let reset = () => {
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}

p1Button.addEventListener("click", () => {
    addScore(p1Display);
});

p2Button.addEventListener('click', () => {
    addScore(p2Display);
});

resetButton.addEventListener('click', reset);

winPointOption.addEventListener('change', function () {
    console.log(this.value);
    winPoint = parseInt(this.value);
    reset();
})