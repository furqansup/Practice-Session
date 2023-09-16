const questions = [
  {
    question: "Which hook is used to update the state?",
    answer: [
      { text: "useRef", correct: false },
      { text: "useEffect", correct: false },
      { text: "useState", correct: true },
      { text: "useMemo", correct: false },
    ],
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer: [
      {
        text: "To handle asynchronous operations",
        correct: false,
      },
      {
        text: "To perform side effects after render",
        correct: true,
      },
      {
        text: "To manage and update component state",
        correct: false,
      },
      {
        text: "To define component lifecycle methods",
        correct: false,
      },
    ],
  },
  {
    question: "What is JSX in React?",
    answer: [
      {
        text: "JavaScript XML",
        correct: true,
      },
      {
        text: "JavaScript Extension",
        correct: false,
      },
      {
        text: "JavaScript XHTML",
        correct: false,
      },
      {
        text: "JavaScript Syntax Extension",
        correct: false,
      },
    ],
  },
  {
    question: "In React, props are...",
    answer: [
      {
        text: "Immutable",
        correct: true,
      },
      {
        text: "Mutable",
        correct: false,
      },
      {
        text: "Constant",
        correct: false,
      },
      {
        text: "Dynamic",
        correct: false,
      },
    ],
  },
  {
    question: "What function is used to render a React component?",
    answer: [
      {
        text: "renderComponent()",
        correct: false,
      },
      {
        text: "displayComponent()",
        correct: false,
      },
      {
        text: "componentDidMount()",
        correct: false,
      },
      {
        text: "render()",
        correct: true,
      },
    ],
  },
  {
    question: "What is the purpose of React Router?",
    answer: [
      {
        text: "To manage application state",
        correct: false,
      },
      {
        text: "To handle HTTP requests",
        correct: false,
      },
      {
        text: "To manage browser history and navigation",
        correct: true,
      },
      {
        text: "To handle authentication",
        correct: false,
      },
    ],
  },
  {
    question: "What is the virtual DOM in React?",
    answer: [
      {
        text: "The DOM representation of a React component",
        correct: false,
      },
      {
        text: "A lightweight copy of the actual DOM",
        correct: true,
      },
      {
        text: "The initial state of a component",
        correct: false,
      },
      {
        text: "The real-time DOM updates in a React app",
        correct: false,
      },
    ],
  },
  {
    question: "What is a React prop?",
    answer: [
      {
        text: "A function in a React component",
        correct: false,
      },
      {
        text: "An HTML element in JSX",
        correct: false,
      },
      {
        text: "A component's property passed by its parent",
        correct: true,
      },
      {
        text: "A built-in JavaScript method",
        correct: false,
      },
    ],
  },
  {
    question: "What hook is used to perform side effects in a React component?",
    answer: [
      {
        text: "useEffect",
        correct: true,
      },
      {
        text: "useSideEffect",
        correct: false,
      },
      {
        text: "useLifecycle",
        correct: false,
      },
      {
        text: "useAsync",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which method is called after a component is removed from the DOM?",
    answer: [
      {
        text: "componentDidUnmount",
        correct: false,
      },
      {
        text: "componentWillUnmount",
        correct: true,
      },
      {
        text: "componentRemoved",
        correct: false,
      },
      {
        text: "componentUnmount",
        correct: false,
      },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".answer-btns");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  if (score > 5) {
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length} 🥳.`;
  } else {
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}. Try Again for better score 😇.`;
  }
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
