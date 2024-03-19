const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");

let questionNumber = 0;
let currentQuestion;
let numCorrect = 0;
let userAnswerSelector;

function buildQuiz() {
    currentQuestion = breedQuestions[questionNumber];
    const output = [];

    const answers = [];
    output.push(`<img src="breed-images/img${questionNumber}.jpg"/>`);
    output.push(`<div class="question"> ${currentQuestion.question} </div>`);

    for (letter in currentQuestion.answers) {
        output.push(
            `<div class="answer-btn answer-grid"> <label>
                  <input type="radio" name="question${questionNumber}" value="${letter}" onclick='showAnswer()'>
                  ${letter} :
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
        .forEach((element) => (element.parentElement.style.color = "black"));

    const selector = `input[name=question${questionNumber}]:checked`;
    userAnswerSelector = document.querySelector(selector) || {};

    if (userAnswerSelector.value === currentQuestion.correctAnswer) {
        userAnswerSelector.parentElement.style.color = "lightgreen";
    } else {
        userAnswerSelector.parentElement.style.color = "red";
    }
};