//The followig orignal code structur is partly copied from https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp and https://webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t 
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
/*let resultsBar = document.getElementById("results-bar")*/

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
                    <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[letter]}" onclick='showAnswer()'/>
                    ${currentQuestion.answers[letter]}
                </label> </div>`
        );
    }

    output.push(`<button id="next-btn"  disabled>Next</button>`);
    quizContainer.innerHTML = output.join("");
    const nextButton = document.getElementById("next-btn");
    nextButton.addEventListener("click", nextBtnHandler);
}

var progressCircle = new ProgressCircle("#progress-circle-container", true);

function updateProgressCircle(cirrectAnswers, totalQuestions) {
    var percent = (correctAnswers / totalQuestions) * 100;

    var pData = {
        text: percent.toFixed(0) + "%",
        percent: percent,
        color: "green",
        textColor: "grey"
    };
    progressCircle.change(pData);
}

updateProgressCircle(correctAnswer <= 5, correctAnswer <= 10, correctAnswer <= 15, correctAnswer <= 19, correctAnswer === 20);

//Next button to generate the next question
const nextBtnHandler = function () {
    questionNumber++;
    if (questionNumber <= breedQuestions.length) {
        if (userAnswerSelector.value === currentQuestion.correctAnswer)
            numCorrect++;

        if (questionNumber < breedQuestions.length) buildQuiz(); {
            buildQuiz();
            updateProgressCircle((questionNumber / breedQuestions.length) * 100);
        }
    } else {
        quizContainer.innerHTML = "";
        let result = document.getElementById("results-circle-container");
        result.innerHTML = ` you have ${numCorrect} of 20 correct answers`;
    }
};

const showAnswer = function () {
    document.getElementById("next-btn").disabled = false;
    document
        .querySelectorAll(`input[name=question${questionNumber}]`)
        .forEach((element) => {
            element.parentElement.parentElement.classList.remove("correctAnswer");
            element.parentElement.parentElement.classList.remove("wrongAnswer");
        });

    const selector = `input[name=question${questionNumber}]:checked`;
    userAnswerSelector = document.querySelector(selector) || {};

    if (userAnswerSelector.value === currentQuestion.correctAnswer) {
        userAnswerSelector.parentElement.parentElement.classList.add(
            "correctAnswer"
        );

        document.querySelectorAll("input[type=radio]").forEach((item) => {
            if (
                item.parentElement.parentElement.classList.contains("correctAnswer") ==
                false
            )
                item.disabled = true;
        });
    } else {
        userAnswerSelector.parentElement.parentElement.classList.add("wrongAnswer");
    }
};

//From https://www.cssscript.com/circle-progress-bar/

var instance = new ProgressCircle("#example", true);

var pData = {
    text: "64%",
    percent: 64,
    lines: [{
        text: "Line 1"
    }, {
        text: "Line 2"
    }, {
        text: "Line 3"
    }],
    color: "green",
    textColor: "grey"
};

instance.load(pData);

instance.change({
    text: "90%",
    percent: 90,
    lines: [{
        text: "Line 4"
    }, {
        text: "Line 5"
    }, {
        text: "Line 6"
    }],
    color: "green",
    textColor: "grey",
    index: 5,
})