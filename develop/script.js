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
const homeBtn = $("#home-btn");
const clearBtn = $("#clear-btn");
let timeRemainingEl = $("#time-remaining");
const quizPrompt = $("#quiz-prompt");
const startBtn = $("#start-btn");
let questionCard = (".question-card");
let answerOptions = $(".answer-options");
let questionPrompt = $("#question-prompt");
let highScoreEl = ("");
let currentQuestionInt = 0;
let secondsLeft = 30;

//create the questions needed for the quiz
var questions = [ 
    {
        question: "Bla Bla Bla111",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 0,
         } ,

      {
        question: "Bla Bla Bla222",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 3,
         } ,
    
     {
        question: "Bla Bla Bla333",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 1,
         } ,
    
  {
        question: "Bla Bla Bla444",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 0,
         } ,
    
  {
        question: "Bla Bla Bla555",
        options: [
        "A. bla",
        "B. bla",
        "C. Bla",],
        answer: 3,
         } ,
    
];

function getNextQuestion(questionNum){
  currentQuestionInt++
  return (questions[questionNum]);
}

// Function for Starting the quiz: removes buttons and starts timer and activates runQuiz function. 
function startQuiz(){

  setInterval(function() {
    secondsLeft--;
    timeRemainingEl.textContent = secondsLeft + " Seconds left till Game Over"
    console.log("hello!@!@!");
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    
    }

  }, 1000);

  startBtn.remove()
  quizPrompt.remove()
  runQuiz()

}



// how to connect text in JS to specific questions and rotate them though as they are clicked.
function runQuiz() {
  
   let questionOption = getNextQuestion(currentQuestionInt);
   console.log(questionOption)
   questionMessage.textContent = questionOption.question
   $().style.display = 'block';
}

// add event listeners
 startBtn.on("click", startQuiz);
// homeBtn.addEventListener("click", home);
// clearBtn.addEventListener("clikc", clear);
// submitBtn.addEventListener("click", submit);

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
