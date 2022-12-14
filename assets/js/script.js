// Wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {
});

// declaration of the variables
const quizContainer = document.querySelector("#quiz-container");
const question = document.querySelector("#question-area");
const answerBox = document.querySelector("#answers-box");
const letters = ["a", "b", "c", "d"];
let actualQuestion = 0;

const scoreContainer = document.querySelector("#score-container");
let points = 0;


// Object containing the questions of the quiz game. 
const questions = [
    {
        "question": "JavaScript is",
        "answers": [
            {
                "answer": "a scripting language",
                "correct": false
            },
            {
                "answer": "a markup language",
                "correct": false
            },
            {
                "answer": "a programming language",
                "correct": false
            },
            {
                "answer": "a scripting and programming language",
                "correct": true
            },
        ]
    },
    {
        "question": "Variables using let keyword",
        "answers": [
            {
                "answer": "have block scope, can be redeclared and reassigned",
                "correct": false
            },
            {
                "answer": "have block scope, cannot be redeclared and can be reassigned",
                "correct": true
            },
            {
                "answer": "have global scope, cannot be reassigned and can be redeclared",
                "correct": false
            },
            {
                "answer": "have global scope, cannot be redeclared and can be reassigned",
                "correct": false
            },
        ]
    },
    {
        "question": "Variables using const keyword",
        "answers": [
            {
                "answer": "have block scope, cannot be redeclared and can be reassigned",
                "correct": false
            },
            {
                "answer": "have global scope, cannot be redeclared or reassigned",
                "correct": false
            },
            {
                "answer": "Arrays and objects stored in constants can be modified, but you can't reassign a new object or array to the same constant",
                "correct": true
            },
            {
                "answer": "can be declared without being assigned a value",
                "correct": false
            },
        ]
    },
    {
        "question": "Variables using var keyword",
        "answers": [
            {
                "answer": "are accessible outside the scope in which they are declared",
                "correct": true
            },
            {
                "answer": "cannot be inadvertently overwritten",
                "correct": false
            },
            {
                "answer": "cannot create bugs in your code",
                "correct": false
            },
            {
                "answer": "have a block scope, and which can freely be reassigned or redeclared",
                "correct": false
            },
        ]
    },
    {
        "question": "What is the correct JavaScript syntax?",
        "answers": [
            {
                "answer": "document.getElementbyClassName('demo').innerHTML = 'Hello World!';", 
                "correct": false
            },
            {
                "answer": "document.getElementsbyId('demo').innerHTML = 'Hello World!';", 
                "correct": false
            },
            {
                "answer": "document.getElementbyTagName('demo').innerHTML = 'Hello World!'; ",
                "correct": false
            },
            {
                "answer": "document.getElementbyId('demo').innerHTML = 'Hello World!';",
                "correct": true
            },
        ]
    },
    {
        "question": "How do you round the number 12.25 to the nearest integer?",
        "answers": [
            {
                "answer": "rnd(12.25)",
                "correct": false
            },
            {
                "answer": "round(12.25)",
                "correct": false
            },
            {
                "answer": "Math.round(12.25)",
                "correct": true
            },
            {
                "answer": "Math.rnd(12.25)",
                "correct": false
            },
        ]
    },
    {
        "question": "How do you create a function in JavaScript?",
        "answers": [
            {
                "answer": "function myFunction()",
                "correct": true
            },
            {
                "answer": "function (myFunction)",
                "correct": false
            },
            {
                "answer": "function = myFunction()",
                "correct": false
            },
            {
                "answer": "function: myFunction()",
                "correct": false
            },
        ]
    },
    {
        "question": "How do you call a function named 'start'?",
        "answers": [
            {
                "answer": "call start()",
                "correct": false
            },
            {
                "answer": "start()",
                "correct": true
            },
            {
                "answer": "call(start)",
                "correct": false
            },
            {
                "answer": "console.log.start",
                "correct": false
            },
        ]
    },
    {
        "question": "How to write an IF statement for executing some come if 'i' is NOT equal to 2?",
        "answers": [
            {
                "answer": "if (i != 2)",
                "correct": true
            },
            {
                "answer": "if i not == 2 then",
                "correct": false
            },
            {
                "answer": "if i ==! 2",
                "correct": false
            },
            {
                "answer": "if i =! 2 then",
                "correct": false
            },
        ]
    },
    {
        "question": "How does a FOR loop start?",
        "answers": [
            {
                "answer": "for (i < 8; i++)",
                "correct": false
            },
            {
                "answer": "for i = 0 (i < 8; i++)",
                "correct":false
            },
            {
                "answer": "for (i = 0; i < 8)",
                "correct": false
            },
            {
                "answer": "for (i = 0; i < 8; i++)",
                "correct": true
            },
        ]
    }

]


/**
 * Create the initial question from quiz
  */ 
function start() {
    createQuestion(0);
}

/**
 * create question, delete old question and display a new question
 */

function createQuestion () {
    //change de question
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = question[i].question;
    questionNumber.textContent = i + 1;

    //inserts the alternatives
    questions[i].answers.forEach(function(answer, i) {

    }
    );


}

// check the answer
function checkAnswer ()

// next question
function nextQuestion()

//final screen
function showResult()

// show or hide the score
function showOrHideQuiz

// restart the quiz

// start the quiz