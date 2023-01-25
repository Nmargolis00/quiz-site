//Global Variables

var highScoreEL = $('.highscore-section');
var questionEl = $('#question');
var answerDisplayEL = $('#answers');
var scoreboardEL = $('#victory-board');
var startEl = $('#start-btn');
var questionContainer = $('.quiz-box');
var timeBox = $('.time-box');
var finalEl = $('.end-screen');
var victoryEl = $('#victory-board');
const finalScoreEl = document.querySelector('#score');
var initialsEl = $('#initials');
var initialsBtn = document.querySelector('#enter-initials');
var playAgainBtn = document.querySelector('#play-again');
var displayBtn = document.querySelector('#display-scores');

let button = document.querySelector("#start-btn");

const timerEl = document.querySelector('#time');
var secondsLeft = 100;
let indexQuestion = 0;
let timerInterval;
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


    if (indexQuestion < questions.length) {
        let questionNumber = indexQuestion + 1;
        questionEl.text("Question: " + questionNumber + ": " + `${questions[indexQuestion].question}`);


        let currentQuestion = questions[indexQuestion];


        answerDisplayEL.empty();

        for (var i = 0; i < currentQuestion.answers.length; i++) {
            var choicesEl = $(
                `<li> <button class = "answer-button"> ${currentQuestion.answers[i]} </button> </li>`
            );

            answerDisplayEL.append(choicesEl);




            //Use BACKTICKS to make it work and be sure to add in the index for the appropriate part of the object
        }

    }

}

// Timer Function
function startTimer() {
    showQuestion();
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds until you lose";
        if (secondsLeft <= 0) {
            quizEnd();
            clearInterval(timerInterval);
        }
    }, 1000);
}


// Function to check answer

function checkAnswer(event) {

    if (timerEl <= 0 || indexQuestion === questions.length - 1) {
        quizEnd();
        clearTimeout(timerInterval);
    } else {
        showQuestion();
    }

    let userSelection = event.target.textContent.trim();
    let youDidIt = questions[indexQuestion].correctAnswer;


    // console.log(userSelection);
    // console.log(youDidIt);

    if (userSelection === youDidIt) {
        secondsLeft = secondsLeft;

    } else {
        secondsLeft = secondsLeft - 5;

    }

    indexQuestion++;
    showQuestion();




}

// Need a function for the end of the quiz to stop displaying questions and show high score and initials




//Quiz End Function
// Go through and make sure js or jquery to make sure it matches
function quizEnd() {
    questionContainer.addClass("hide");
    timerEl.classList.add("hide");
    
    timeBox.addClass("hide");
    finalEl.removeClass("hide");
    //If it has hide on the HTML it would be removeClass instead
    clearInterval(timerInterval);
    finalScoreEl.textContent = ": " + secondsLeft;
    
}





function finalPage(event) {
    event.preventDefault();
    highScoreEL.removeClass("hide");

    const initials = initialsEl.val().trim();

    const storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];

    const initialsScore = {
        initials: initials,
        finalScore: secondsLeft,

    }
    
    storedScores.push(initialsScore);
    localStorage.setItem("storedScores", JSON.stringify(storedScores));

 
    console.log(initialsScore);

    

    

   
    //This should show the initials and highscore
    // Need to have page create a way to enter initials
    //create object with initials and score store locally
    //pull info from local machine and stringify it
    //display initals and score by highest to lowest
    //ask if they would like to play again
   
}
function compareScores(a,b){
    return b.score - a.score

}
function displayScores(event){
    event.preventDefault();

    highScoreEL.removeClass("hide");

    let newScores = JSON.parse(window.localStorage.getItem("storedScores")) || [];

    newScores.sort(compareScores);

    for (let index = 0; index < newScores.length; index++) {
        const element = `
        <li class = "leaderboard"> ${newScores[index].initials} - ${newScores[index].finalScore} </li>
        `
        $("#victory-board").append(element);
        
    }
}
    //show the leader board for the next round of games 


// store initials and highscore (Keep score as seconds) on local storage
// call initals and highscore for a list
// rank by highest number at top and lowest at bottom
// prompt "would you like to play again? if yes reset page"

function playAgain (){
    clearInterval();
    indexQuestion = 0;
    secondsLeft = 100;
    timerEl.textContent = secondsLeft + " seconds until you lose";

    questionContainer.removeClass("hide");
    timerEl.classList.remove("hide");
    
    timeBox.removeClass("hide");
    finalEl.addClass("hide");
}


//Store results

//After quiz is done, local storage to show highscore and prompt to enter initials

//Button to reset quiz


button.addEventListener("click", startTimer);
answerDisplayEL.on("click", checkAnswer);
initialsBtn.addEventListener("click", finalPage);
displayBtn.addEventListener("click", displayScores);
playAgainBtn.addEventListener("click", playAgain);

   

    

