//The followig orignal code structur is partly copied from https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp and https://webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t
const quizContainer = document.getElementById("quiz"); //Container for the quiz
const resultsContainer = document.getElementById("results"); //Container for the results text
const progressCircleContainer = document.querySelector(
    "#progress-circle-container"
); //Hides the progress circle during the quiz
progressCircleContainer.style.visibility = "hidden";

//Variables for tracking squiz progress and score
let questionNumber = 0;
let currentQuestion;
let numCorrect = 0;
let userAnswerSelector;

//Randomize the the order of questions in 'breedQuestions' array
breedQuestions.sort(() => Math.random() - 0.5);

//Function that shuffles the question randomly
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

//The buildQuiz function is responsible for creating the quiz
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

let instance = new ProgressCircle("#progress-circle-container", true, [{
    text: "0%",
    percent: 0,
    color: "green",
    textColor: "grey",
    height: "700px",
}, ]);

document.querySelector("div.pc-container").style.height = "157px";

//Updates the progress circle when the number of correct answer increases
function updateProgressCircle(totalQuestions) {
    var percent = (numCorrect / totalQuestions) * 100;

    var pData = {
        text: percent.toFixed(0) + "%",
        percent: percent,
        color: "green",
        textColor: "black",
    };

    instance.update(pData);
    document.querySelector("div.pc-container").style.height = "157px";
}

//Event handler function for the "Next" button click event
const nextBtnHandler = function () {
    questionNumber++;
    if (questionNumber <= breedQuestions.length) {
        if (userAnswerSelector.value === currentQuestion.correctAnswer)
            numCorrect++;

        if (questionNumber < breedQuestions.length) buildQuiz();
    } else {
        quizContainer.innerHTML = "";
        let result = document.getElementById("result");
        result.innerHTML = `<p> You have ${numCorrect} out of 20 correct answers </p>`;
        result.innerHTML += `<p><a class="quizAgain" href="quiz.html">Take the quiz again!</a></p>`;
        progressCircleContainer.style.visibility = "visible";
    }
    updateProgressCircle(20);
};

//Displays the user's selected answer and disable the user to select another answer
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

        //Disables all the radio buttons
        document.querySelectorAll("input[type=radio]").forEach((item) => {
            if (
                item.parentElement.parentElement.classList.contains("correctAnswer") ==
                false
            )
                item.disabled = true;
            item.parentElement.parentElement.style.borderStyle = "none";
        });
    } else {
        userAnswerSelector.parentElement.parentElement.classList.add("wrongAnswer");
    }
};