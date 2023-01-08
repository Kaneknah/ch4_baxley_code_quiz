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
let questionCard = ".question-card";
let answerOptions = $(".answer-options");
let questionPrompt = $("#question-prompt");
let highScoreEl = "";
let currentQuestionInt = 0;
let secondsLeft = 30;
let resultsText = $(".results-text");
let score = $("#score");

//create the questions needed for the quiz
var questions = [
	{
		question: "Is Andrew a Dingus?",
		options: ["A. Yes", "B. Duh", "C. Fuck yeah"],
		answer: "C. Fuck yeah",
	},

	{
		question: "Bla Bla Bla222",
		options: ["A. bla", "B. bla", "C. Bla"],
		answer: 2,
	},

	{
		question: "Bla Bla Bla333",
		options: ["A. bla", "B. bla", "C. Bla"],
		answer: 1,
	},

	{
		question: "Bla Bla Bla444",
		options: ["A. bla", "B. bla", "C. Bla"],
		answer: 0,
	},

	{
		question: "Bla Bla Bla555",
		options: ["A. bla", "B. bla", "C. Bla"],
		answer: 2,
	},
];
//Function for moving to the next question.
function getNextQuestion(questionNum) {
	currentQuestionInt++;
	return questions[questionNum];
}

// Function for Starting the quiz: removes buttons and starts timer and activates runQuiz function.
function startQuiz() {
	var timeInterval = setInterval(function () {
		secondsLeft--;
		timeRemainingEl.text(`Time Remaining: ${secondsLeft}`);
		if (secondsLeft === 0) {
			clearInterval(timeInterval);
		}
	}, 1000);

	startBtn.remove();
	quizPrompt.remove();

	let currentQuestion = getNextQuestion(currentQuestionInt);
	displayQuestion(currentQuestion);
}

// how to connect text in JS to specific questions and rotate them though as they are clicked.
function displayQuestion(question) {
	questionPrompt.text(`Question: ${question.question}`);
	question.options.forEach((option) => {
		const answerBtn = $("<button></button>").click(
			{ question: question },
			answerResults
		);
		answerOptions.append(answerBtn.text(option));
	});

	//  answerBtn.on("click", answerResults());
}

//Function for when the user selects an answer
function answerResults(event) {
	let selectedAnswer = $(event.target).text();
	if (selectedAnswer === event.data.question.answer) {
		correctAnswer();
	} else {
		wrongAnswer();
	}
	let currentQuestion = getNextQuestion(currentQuestionInt);
	// getNextQuestion(questions);
	displayQuestion(currentQuestion);
	//add delete current button function and add a call here.
}
//Function for if the wrong answer was clicked.
function wrongAnswer() {
	console.log("Idiot");
	secondsLeft -= 5;
	let responseText = "Sorry Wrong Answer";
	resultsText.append(responseText);
}
//function for if the right answer was clicked.
function correctAnswer() {
	console.log("good job");
	let responseText = "Congrats! you are right!";
	score += 5;
	resultsText.append(responseText);
}

function renderScore() {}

// add event listeners
startBtn.on("click", startQuiz);
// homeBtn.addEventListener("click", home);
// clearBtn.addEventListener("click", clear);
// submitBtn.addEventListener("click", submit);
