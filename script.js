// Questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "What is 5 + 5?",
        answer: "10"
    },
    {
        question: "What is the color of the sky?",
        answer: "blue"
    },
    {
        question: "What is 2 * 3?",
        answer: "6"
    },
    {
        question: "Who is the president of the USA?",
        answer: "turmph"
    }
];

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p class="question">${questions[currentQuestionIndex].question}</p>
        <input type="text" id="user-answer" placeholder="Your answer" onkeydown="handleKeyPress(event)">
    `;
    document.getElementById('feedback-container').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none'; // Hide the Next button
}

// Function to handle the answer submission
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    const feedbackContainer = document.getElementById('feedback-container');

    if (userAnswer === correctAnswer) {
        feedbackContainer.innerHTML = '<p class="correct">Correct!</p>';
        document.getElementById('next-btn').style.display = 'inline-block'; // Show the Next button
        document.getElementById('user-answer').disabled = true; // Disable the input field after correct answer
    } else {
        feedbackContainer.innerHTML = '<p class="incorrect">Incorrect. Try again!</p>';
    }
}

// Handle the Enter key press to submit the answer
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkAnswer(); // Check the answer when Enter is pressed
    }
}

// Move to the next question after clicking the "Next Question" button
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // All questions answered
        document.getElementById('question-container').innerHTML = '<p class="congratulations">Congratulations, you completed the quiz!</p>';
        document.getElementById('next-btn').style.display = 'none'; // Hide the Next button
    }
}

// Initialize the quiz
displayQuestion();
