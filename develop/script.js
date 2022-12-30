// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//name Variables:
let timeRemainingEl = document.getElementById("time-remaining")
let startBtn = document.getElementById("start-btn")
let questionOption = document.getElementById("card")
let questionMessage = document.getElementById("prompt")
let questionChoiceEl = document.getElementById("title")
let textPrompt = document.getElementById("prompt")
let clearBtn = d
//let homeEl = documentGetElementBtID("home-btn")

let highScoreEl = document.getElementById("")

//create the questions needed for the quiz
var questions = [ 
    {
        question1: "Bla Bla Bla",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 0,
         } ,

      {
        question2: "Bla Bla Bla",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 3,
         } ,
    
     {
        question3: "Bla Bla Bla",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 1,
         } ,
    
  {
        question4: "Bla Bla Bla",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 0,
         } ,
    
  {
        question5: "Bla Bla Bla",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 3,
         } ,
    
];



// Function for Starting the quiz: removes buttons and starts timmer and activates runQuiz function. 
function startQuiz(){

timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "Seconds left till Game Over"
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    
    }

  }, 5000);

  startBtn.remove()
  textPrompt.remove()

  runQuiz()

}

// how to connect text in JS to specific questions and rotate them though as they are clicked.
function runQuiz() {
  
  // add question-card to HTML
  //   question + options
  //     conect questions in JS to HTML (how?) 
  // if statements for questions and answers
  //   if answered wrong
  //     remove 5 seconds
  //     display message "Wrong. Try again"
  //   if answered right
  //     move to next question
  //     display message "Great Job!"

  // after final question is submited
  //   record time
  //   run submit score function
  
   questionOption = question[question.number];
   questionMessage.textContent = questionOption.question
   document.getElementById().style.display = 'block';

  //  for (var i = 0; <questionOption.length; i++){



  //  }


}

// function sumbitScore
  //remove questions
  //add score form
    //input for initials
  //event listeners?
  //run display scorees function

//function displayScore
//remove form
//create high scores ol
//

//clear button

// //home button
// function home{
//     location.reload;
// }

// add event listeners
startBtn.addEventListener("click", startQuiz);
// homeBtn.addEventListener("click", home);
// clearBtn.addEventListener("clikc", clear);
// submitBtn.addEventListener("click", submit);