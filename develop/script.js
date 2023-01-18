const clearBtn = $("#clear-btn");
let timeRemainingEl = $("#time-remaining");
const quizPrompt = $("#quiz-prompt");
const startBtn = $("#start-btn");
let questionCard = $(".question-card");
let answerOptions = $(".answer-options");
let questionPrompt = $(".question-prompt");
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
			"C. Node index",
		],
		answer: "C. Node index",
	},

	{
		question: "Which of the following statements is true for CSS?",
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
		question: "Does the TA Niles know everything about writing code?",
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
			"C. Cry and then give up and then get back at it because you paid like $13k to take this course, and if you don't pass it would have been better to invest it in Crypto, and thats sad.",
		],
		answer:
			"C. Cry and then give up and then get back at it because you paid like $13k to take this course, and if you don't pass it would have been better to invest it in Crypto, and thats sad.",
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
		if (secondsLeft === 0 && !endQuiz) {
			clearInterval(timeInterval);
			endQuiz();
		}
	}, 1000);
	//Removes the initial display of the HTML
	startBtn.remove();
	quizPrompt.empty();
	//runs through the questions, starting with the initial question.
	let currentQuestion = getNextQuestion(currentQuestionInt);
	displayQuestion(currentQuestion);
}

// how to connect text in JS to specific questions and rotate them though as they are clicked.
function displayQuestion(question) {
	removeButtons();
	questionPrompt.text(`Question: ${question.question}`);
	question.options.forEach((option) => {
		const answerBtn = $("<button></button>")
			.attr("class", "answer-btns m-2")
			.addClass("btn btn-primary")
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
	if (currentQuestion) {
		displayQuestion(currentQuestion);
	} else {
		endQuiz();
	}
	//add delete current button function and add a call here.
}
//Function for if the wrong answer was clicked.
function wrongAnswer() {
	console.log("Idiot");
	if ($("#results-text")) {
		$("#results-text").empty();
	}
	secondsLeft -= 5;
	let responseText = "Sorry Wrong Answer (-5 seconds) ";
	resultsText.append(responseText);
}
//function for if the right answer was clicked.
function correctAnswer() {
	console.log("good job");
	if ($("#results-text")) {
		$("#results-text").empty();
	}
	let responseText = "Congrats! you are right! (+5 Points) ";
	score += 5;
	console.log(score);
	resultsText.append(responseText);
}
// Function for using the end processes for the quiz
function endQuiz() {
	//resting the HTML
	timeRemainingEl.remove();
	//Stopping the timer.
	$(".question-card").empty();
	if ($("#results-text")) {
		$("#results-text").empty();
	}
	//Displaying the prompt for entering in final scores.
	let finalScorePrompt = $("<div></div>")
		.attr("id", "final-score-prompt")
		.text(
			" Your final score is " +
				score +
				"! Please enter your initials and save it!    "
		);
	//Creating the input and button infomraiton for saving scores.
	let initialsInput = $("<input></input>")
		.attr("id", "initial-input")
		.addClass("form-control w-25");
	let initialsBtn = $("<button></button>")
		.attr("id", "initial-button")
		.text("Submit")
		.addClass("btn btn-primary m-2 form-control-sm w-25")
		.on("click", function (event) {
			event.preventDefault();
			//Code for the event of saving scores.
			let formText = $("#initial-input").val();
			if (!formText) {
				//if no info was added into the input
				let errorOnForm = $("<div></<div>")
					.attr("id", "error-on-form")
					.text("Please enter your Initials to save the High Score.   ");

				resultsText.append(errorOnForm);
			} else {
				//store data to localStorage and run the render Score.
				localStorage.setItem(formText, JSON.stringify(score));
				renderFinalScore(formText, score);
			}
		});
	//appending the information for this function.
	quizPrompt.append(finalScorePrompt);
	finalScorePrompt.append(initialsBtn);
	finalScorePrompt.append(initialsInput);
}
//Function for rendering the final score page
function renderFinalScore(score, formText) {
	$(quizPrompt).empty();
	//Creating a title
	let finalScoreTitle = $("<div></div>")
		.attr("id", "final-score-title")
		.text(" High Score List: ");
	//Retrieving information from the localStorage to display the high scores.
	Object.keys(localStorage).forEach((key) => {
		let localScores = JSON.parse(localStorage.getItem(key));
		if (localScores !== null) {
			document.querySelector(".scores").textContent =
				"Score : " +
				formText +
				" ------------------------------------------------------------ " +
				score;
		}
		//appending the information for this function.
		quizPrompt.append(finalScoreTitle);
	});
}
//Helper Function rto remove buttons when moving to next question.
function removeButtons() {
	if ($(".answer-options")) {
		$(".answer-options").empty();
	}
}

// add event listeners
startBtn.on("click", startQuiz);
