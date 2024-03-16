const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');

function buildQuiz() {
    const output = [];

    breedQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

buildQuiz();

nextButton.addEventListener('click', showResults);

const breedQuestions = [{
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },
    // add more questions here
];

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    breedQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer.style.color = 'lightgreen';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${breedQuestions.length}`;
}


/*const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results')
const nextButton = document.getElementById('next');

function buildQuiz() {}

buildQuiz();

submitButton.addEventListener('click', showResults);

const breedQuestions = [{
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },

    {
        question: "Whats the name of the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },
]

function buildQuiz() {}

const output = [];

breedQuestions.forEach(
    (currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
                  <div class="answers"> ${answers.join('')} </div>`
        );
    }
);

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');

breedQuestions.forEach((currentQuestion, questionsNumber) => {
    // the code we want to run for each question goes here
})

const answers = [];

for (letter in currentQuestion.answers) {

    answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
    );
}
output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

//source code from https://www.sitepoint.com/simple-javascript-quiz/
//Continue working on it

function showResults() {
    const answerContainers = quizCotainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]: checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const answerContainers = quizContainer.querySelectorAll('.answer');

let numCorrect = 0;

myQuestions.forEach((curretQuestion, questionNumber) => {

    const answerContiner = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
        answerContainers[questionNumber].style.color = 'red';
    }
});

if (userAnswer === currentQuestion.correctAnswer) {
    numCorrect++;
    answerContainers[questionNumber].style.color = 'lightgreen';

} else {
    answerContainers[questionNumber].style.color = 'red';
}

resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`*/