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
let questionCard = $(".question-card");
let answerOptions = $(".answer-options");
let questionPrompt = $("#question-prompt");
let highScoreEl = "";
let currentQuestionInt = 0;
let secondsLeft = 50;
let resultsText = $("#results-text");
let score = 0;

//create the questions needed for the quiz
var questions = [
	{
		question:
			"What is the proper format for running node.js in the terminal for an index.js file?",
		options: [
			"A. Random typing till it works",
			"B. Give up, Terminal is too hard",
			"C. node index",
		],
		answer: "C. node index",
	},

	{
		question: "Which of the following statements is true for CSS",
		options: [
			"A. It is an illegal torture used at GitMo",
			"B. I would rather take a cheese grader to my inner thigh than use it",
			"C. It stands for 'Complex Signaling System'",
		],
		answer:
			"B. I would rather take a cheese grader to my inner thigh than use it",
	},

	{
		question:
			"What is a good replacement for an 'if/else' statement for Java Script?",
		options: [
			"A. Why/god statement ",
			"B. Switch statement",
			"C. He Said/She Said",
		],
		answer: "B. Switch statement",
	},

	{
		question: "Does the TA Niles know everything about Writing code?",
		options: [
			"A. Yes, He is the Chosen One",
			"B. No, Thats not possible",
			"C. Who is Niles?",
		],
		answer: "A. Yes, He is the Chosen One",
	},

	{
		question:
			"If you run into a mental block during Boot-camp, what is the best course of action",
		options: [
			"A. Give up",
			"B. Cry and then give up",
			"C. Cry and then give up and then get back at it because you paid like $13k to take this course, and if you don't pass it would have been better to invest it in Crypto. and thats sad.",
		],
		answer:
			"C. Cry and then give up and then get back at it because you paid like $13k to take this course, and if you don't pass it would have been better to invest it in Crypto. and thats sad.",
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
	removeButtons();
	questionPrompt.text(`Question: ${question.question}`);
	question.options.forEach((option) => {
		const answerBtn = $("<button></button>")
			// .att(".option-btns")
			.click({ question: question }, answerResults);

		answerOptions.append(answerBtn.text(option));
	});
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
	if ($("#results-text")) {
		$("#results-text").empty();
	}
	secondsLeft -= 5;
	let responseText = "Sorry Wrong Answer";
	resultsText.append(responseText);
}
//function for if the right answer was clicked.
function correctAnswer() {
	console.log("good job");
	if ($("#results-text")) {
		$("#results-text").empty();
	}
	let responseText = "Congrats! you are right!";
	score += 5;
	console.log(score);
	resultsText.append(responseText);
}

function endQuiz() {
	$(".question-card").empty();
	let finalScoreTitle = $("<div></div>")
		.attr("id", "final-score-title")
		.text(
			" Your final score is " +
				score +
				"!. Please enter your initials and save it!"
		)
		.quizPrompt.append(finalScoreTitle);

	let initialsForm = $("<form></form>").attr("id", "initial-form").on(click, function (event) {
		event.preventDefault();
		let formText = $('#initial-form').val();
		if (!formText) {
			let errorOnForm = $("<div></<div>")
				.attr("id", "error-on-form")
				.text("Please enter your Initials to save the High Score.");

			resultsText.append(errorOnForm);
		} else {
			let initialsScore = formText + ": " + score;
			localStorage.setItem(score, initialsScore);
			RenderFinalScore()
		}
	}
	
}

function renderFinalScore() {
	$(".question-card").empty();
	let scoreList = $("<li></li>").attr("class", "score-list").text(initialsScore);

	answerOptions.append(scoreList)

	let finalScoreTitle = $("<div></div>")
	.attr("id", "final-score-title")
	.text(" High Score List ");

	quizPrompt.append(finalScoreTitle);
	};
	
function removeButtons() {
	if ($(".answer-options")) {
		$(".answer-options").empty();
	}
}

// add event listeners
startBtn.on("click", startQuiz);
// homeBtn.addEventListener("click", home);
// clearBtn.addEventListener("click", clear);
// submitBtn.addEventListener("click", submit);

