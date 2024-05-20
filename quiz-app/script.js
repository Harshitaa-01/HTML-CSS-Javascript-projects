const questions = [
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth" , correct: false},
            {text: "Jupiter" , correct: true},
            {text: "Mars" , correct: false},
            {text: "Saturn" , correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Pablo Picasso" , correct: false},
            {text: " Leonardo da Vinci" , correct: true},
            {text: "Vincent van Gogh" , correct: false},
            {text: "Michelangelo" , correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "H2O" , correct: true},
            {text: "CO2" , correct: false},
            {text: "NaCl" , correct: false},
            {text: "O2" , correct: false}
        ]
    },
    {
        question: "Which of the following is not a primary color?",
        answers: [
            {text: "Red" , correct: false},
            {text: "Blue" , correct: false},
            {text: "Green" , correct: false},
            {text: "Yellow" , correct: true}
        ]
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [
            {text: "Albert Einstein" , correct: true},
            {text: " Isaac Newton" , correct: false},
            {text: "Galileo Galilei" , correct: false},
            {text: " Nikola Tesla" , correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answerBtns");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    currentScore =0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    console.log(selectedBtn);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        currentScore++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display ="block";
}
function handleNextBtn(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${currentScore} out of ${questions.length}`;
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})
startQuiz();