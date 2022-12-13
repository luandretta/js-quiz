// Wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {
});

// declaration of the variables
const question = document.querySelector("#question-area");
const answerBox = document.querySelector("#answers-box");

// questions
const questions = [
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


// initial question
function init()

// create a question
function createQuestion ()

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