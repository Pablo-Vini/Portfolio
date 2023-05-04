const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCurrent = 0;

function loadQuestion(){
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answers) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
            ${answer.option}
        </button>
        `;

        answers.appendChild(div);
    });
}

loadQuestion();