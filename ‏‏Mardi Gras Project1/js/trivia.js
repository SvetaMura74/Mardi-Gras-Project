const trivia = document.getElementById("trivia");
const ifCorrect = document.getElementById("ifCorrect");
const gameOver = document.getElementById("gameOver");
const restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  index = 0;
  score = 0;
  ifCorrect.classList.add("d-none");
  gameOver.innerHTML = `<h2 class="text-center">Your score: ${score}</h2>`;

  showQuestion();
});

const questions = [
  {
    question: "When was the first Mardi Gras?",
    answer:
      "The first Mardi Gras parade was held in New Orleans on Feb. 24, 1857",
    choices: [
      "The first Mardi Gras parade was held in New Orleans on Nov. 11, 1955",
      "The first Mardi Gras parade was held in New Orleans on June 4, 1990",
      "The first Mardi Gras parade was held in New Orleans on Jan. 31, 1899",
      "The first Mardi Gras parade was held in New Orleans on Feb. 24, 1857",
    ],
  },
  {
    question: "What are the Mardi Gras colors?",
    answer: "Purple, green and gold",
    choices: [
      "Red and yellow",
      "Purple, green and gold",
      "Black and white",
      "Purple, yellow and blue",
    ],
  },
  {
    question: "How is a king chosen?",
    answer: "Varies from krewe to krewe",
    choices: [
      "Krewes hold random drawings",
      "Krewes invite a celebrity guest to be their king",
      "A king is chosen by the School of Design",
      "Varies from krewe to krewe",
    ],
  },
  {
    question: "How does Mardi Gras benefit the New Orleans economy?",
    answer: "Mardi Gras generates over $1 billion in annual spending",
    choices: [
      "Mardi Gras generates over $1 billion in annual spending",
      "Mardi Gras generates over $1 million in annual spending",
      "Mardi Gras generates over $500 thousend in annual spending",
      "Mardi Gras generates over $750 thousend in annual spending",
    ],
  },
  {
    question: "How is the City government involved?",
    answer:
      "City governments are not involved in coordinating Mardi Gras parades",
    choices: [
      "City governments are fully involved in coordinating Mardi Gras parades",
      "Krewes can't independently schedule and coordinate their own parades",
      "City governments are not involved in coordinating Mardi Gras parades",
      "City governments are partly involved in coordinating Mardi Gras parades",
    ],
  },
  {
    question: "When is Mardi gras 2023?",
    answer: "Mardi Gras 2023 Falls On February 21, 2023",
    choices: [
      "Mardi Gras 2023 Falls On February 13, 2023",
      "Mardi Gras 2023 Falls On February 21, 2023",
      "Mardi Gras 2023 Falls On January 21, 2023",
      "Mardi Gras 2023 Falls On January 31, 2023",
    ],
  },
  {
    question: " What are the Mardi Gras Parade Krewes?",
    answer: "All answers are correct",
    choices: [
      "All answers are correct",
      "Krewe of Rex",
      "Krewe of Bacchus",
      "Krewe of Zulu",
    ],
  },
  {
    question: "What’s A Mardi Gras Traditional Food?",
    answer: "King Cakes",
    choices: ["Zulu bread", "King Cakes", "Indian rice", "American pie"],
  },
  {
    question: "What are the main events of Mardi Gras Celebtation?",
    answer: "All answers are correct",
    choices: ["All answers are correct", "Parades", "Floats", "Carnivals"],
  },
  {
    question: "What are the main attributes of Mardi Gras Celebtation?",
    answer: "All answers are correct",
    choices: ["All answers are correct", "Masks", "Costumes", "Long beads"],
  },
];

let index = 0;
let score = 0;

function showQuestion() {
  trivia.innerHTML = `
    <h2 class="text-center">${questions[index].question}</h2>
    <button class='btn' style='background-color:lightgray'>${questions[index].choices[0]}</button>
    <button class='btn'style='background-color:#9453a6'>${questions[index].choices[1]}</button>
    <button class='btn'style='background-color:#8cbf3f'>${questions[index].choices[2]}</button>
    <button class='btn'style='background-color:#f2cc0f'>${questions[index].choices[3]}</button>
`;

  document
    .querySelectorAll("#trivia > button")

    .forEach((b) =>
      b.addEventListener("click", (e) => {
        if (e.target.innerHTML === questions[index].answer) {
          score += 10;
          gameOver.innerHTML = `<h2 class="text-center">Your score: ${score}</h2>`;
          ifCorrect.innerHTML = `<h2 class="text-center">Correct!</h2>`;
          ifCorrect.classList.remove("d-none");
        } else {
          ifCorrect.innerHTML = `<h2 class="text-center">Wrong!</h2>`;
          gameOver.innerHTML = `<h2 class="text-center"> Your score: ${score}</h2>`;
          ifCorrect.classList.remove("d-none");
        }

        index += 1;
        if (index === questions.length) {
          gameOver.innerHTML = `<h2 class="text-center">Game Over - Your score: ${score}</h2>`;
        } else {
          showQuestion();
        }
      })
    );
}
