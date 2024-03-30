//The followig orignal code structur is partly copied from https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp and https://webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t 
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
let resultsBar = document.getElementById("results-bar")

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

//Next button to generate the next question
const nextBtnHandler = function () {
    questionNumber++;
    if (questionNumber <= breedQuestions.length) {
        if (userAnswerSelector.value === currentQuestion.correctAnswer)
            numCorrect++;

        if (questionNumber < breedQuestions.length) buildQuiz();
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

//Code structure from kimmobrunfeldth https://jsfiddle.net/a1jxf7b6/3/ with some changes to customize it

resultsBar = new ProgressBar.Circle(container, {
    color: '#4CAF50',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#aaa',
        width: 1
    },
    to: {
        color: '#333',
        width: 4
    },

    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value <= 25) {
            circle.setText('Have you done your homework?🤔'); //
        } else if (value <= 50) {
            circle.setText('Keep it up! You will get there');
        } else if (value <= 75) {
            circle.setText('You are an expert👏');
        } else if (value < 100) {
            circle.setText('So close🙏');
        } else if (value === 100) {
            circle.setText('YOU DID IT!🥳');
        }
    }
});

bar.text.style.fontFamily = 'Epilogue', sans - serif;
bar.text.style.fontSize = '2rem';

bar.animate(0.8);