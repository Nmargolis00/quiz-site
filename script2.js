//Global Variables
rootEL = $('#root');
highscoreEL = $('<h2>');
questionEl = $('#question');
answerDisplayEL = $('#answers');
scoreboardEL = $('#scoreboard');
var startEl = $('#start-btn');
questionContainer = $('.question-section');

let button = document.querySelector("#start-btn");

var timerEl = $('#time')
var secondsLeft = 100;
let timerInterval = 1;
var score = 0;
let indexQuestion = 0;
//Create for rest of IDs


//Object of questions, answers and correct answer

let questions = [
    {
        question: "Is water wet?",
        answers: ["Yes", "No", "Fish live in water", "What is water?"],
        correctAnswer: "Yes",
    }, 
    
    {
        question: "How far is the moon from earth?",
        answers: ["At least 12 miles", "Red", "The Earth is Flat", "What is a moon?"],
        correctAnswer: "At least 12 miles",
    }, 
    
    {
        question: "What song did Shrek turn from a banger into a super-banger?",
        answers: ["Before He Cheats by Kelly Clarkson", "I'm a Believer by Smash Mouth", "Get Low by Little John", "Toxic by Brittany Spears"],
        correctAnswer: "I'm a Believer by Smash Mouth",
    }, 
    
 
]

//Setting up page
    // highscoreEL.text('Highscore');
    // rootEL.append(highscoreEL);
    
    // highscoreEL.append(timerEL);
   
  

// Start the game


function showQuestion() {
   
    startEl.addClass("hide");

    if (indexQuestion < questions.length){
        let questionNumber = indexQuestion + 1;
        questionEl.text("Question: " + questionNumber + ": " + `${questions[indexQuestion].question}`);
    

    let currentQuestion = questions[indexQuestion];


    answerDisplayEL.empty();

    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var choicesEl = $(
        `<li> <button class = "answer-button"> ${currentQuestion.answers[i]} </button> </li>`
      );
      
      answerDisplayEL.append(choicesEl);
      startTimer();

//Use BACKTICKS to make it work and be sure to add in the index for the appropriate part of the object
     }       
    }
}


// Function to check answer

function checkAnswer(event) {

        let userSelection = event.target.textContent;
        let youDidIt = questions[indexQuestion].correctAnswer;
        
        console.log(userSelection);
        console.log(youDidIt);

        if (userSelection === youDidIt) {
            score++;
            
        } else {
            secondsLeft = secondsLeft - 5;
            
        }

        indexQuestion++;
        showQuestion();
        console.log(score);
     
//Why is it not clearing previous answers
    }

// Need a function for the end of the quiz to stop displaying questions and show high score and initials


// Timer Function, still need to make more time drop off if answer is wrong

function startTimer(){
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEL.textContent = secondsLeft + " seconds until you lose";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // quizEnd();
        }
    },1000);
}



//Create questions and answers through a for loop using the children of various parts of the HTML. You will need to compare to the activities

//start function and timer function. You already have this so that makes it a little easier

//Store input similar to the shopping list activity

//Create if statement for right and wrong answer

//Store results

//After quiz is done, local storage to show highscore and prompt to enter initials

//Button to reset quiz


button.addEventListener("click", showQuestion);
answerDisplayEL.on("click", checkAnswer);