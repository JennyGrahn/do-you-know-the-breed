//The followig orignal code structur is partly copied from https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp and https://webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t 
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

let questionNumber = 0;
let currentQuestion;
let numCorrect = 0;
let userAnswerSelector;

breedQuestions.sort(() => Math.random() - 0.5);

const randomAnswers = () => {
    let answers = [];
    for (let property in currentQuestion.answers) {
        answers.push(currentQuestion.answers[property]);
    }

    answers.sort(() => Math.random() - 0.5);
    let index = 0;
    for (let property in currentQuestion.answers) {
        currentQuestion.answers[property] = answers[index];
        index++;
    }
};

function buildQuiz() {
    currentQuestion = breedQuestions[questionNumber];
    const output = [];
    let answers = [];
    output.push(`<div class="question"> ${currentQuestion.question} </div>`);
    output.push(` <img src=" ${currentQuestion.image.src}" alt="${currentQuestion.image.alt}"
        />`);
    randomAnswers();
    for (letter in currentQuestion.answers) {
        output.push(
            `<div class="answer-btn answer-grid"> <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}" onclick='showAnswer()'/>
                    ${currentQuestion.answers[letter]}
                </label> </div>`
        );
    }

    output.push(`<button id="next-btn"  disabled>Next</button>`);
    quizContainer.innerHTML = output.join("");
    const nextButton = document.getElementById("next-btn");
    nextButton.addEventListener("click", nextBtnHandler);
}

//Next button to generate the next question
const nextBtnHandler = function () {
    questionNumber++;
    if (questionNumber < breedQuestions.length) {
        if (userAnswerSelector.value === currentQuestion.correctAnswer)
            numCorrect++;

        buildQuiz();
    } else {
        quizContainer.innerHTML = "";
        let result = document.getElementById("results");
        result.innerHTML = ` you have ${numCorrect} correct answers`;
    }
};


const showAnswer = function () {
    document.getElementById("next-btn").disabled = false;
    document
        .querySelectorAll(`input[name=question${questionNumber}]`)
        .forEach((element) => (element.parentElement.style.backgroundColor = "white"));

    const selector = `input[name=question${questionNumber}]:checked`;
    userAnswerSelector = document.querySelector(selector) || {};

    if (userAnswerSelector.value === currentQuestion.correctAnswer) {
        userAnswerSelector.parentElement.style.backgroundColor = "lightgreen";
    } else {
        userAnswerSelector.parentElement.style.backgroundColor = "red";
    }
};