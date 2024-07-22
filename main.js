document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter"
    },
    {
      question: "What is the capital of Brazil?",
      answer: "Brasilia"
    },
    {
      question: "What is the largest country in the world by land area?",
      answer: "Russia"
    },
    {
      question: "What is the largest living species of lizard?",
      answer: "King Iguana"
    },
    {
      question: "What is the largest mammal on Earth?",
      answer: "Blue Whale"
    },
    {
      question: "What is the world's largest freshwater lake?",
      answer: "Lake Baikal"
    },
    {
      question: "What is the smallest country in the world by land area?",
      answer: "Vatican City"
    },
    {
      question: "What is the largest city in the world by population?",
      answer: "Shanghai"
    },
    {
      question: "What is the world's longest river?",
      answer: "Nile"
    },
    {
      question: "What is the world's largest waterfall?",
      answer: "Victoria Falls"
    },
    {
      question: "What is the world's highest mountain?",
      answer: "Mount Everest"
    },
    {
      question: "What is the world's largest living organism?",
      answer: "Amazon Rainforest"
    },
    {
      question: "What is the world's largest ocean?",
      answer: "Pacific Ocean"
    },
    {
      question: "What is the world's largest desert?",
      answer: "Sahara Desert"
    },
    {
      question: "What is the world's largest national park?",
      answer: "Amazon Rainforest"
    },
    {
      question: "What is the world's largest forest?",
      answer: "Amazon Rainforest"
    },
    {
      question: "What is the world's largest sea?",
      answer: "Pacific Ocean"
    },
    {
      question: "What is the world's largest river basin?",
      answer: "Nile River Basin"
    },
    {
      question: "What is the world's largest island?",
      answer: "Greenland"
    },
    {
      question: "What is the world's largest waterfall by volume?",
      answer: "Victoria Falls"
    },
    {
      question: "What is the world's largest waterfall by height?",
      answer: "Victoria Falls"
    },
  ];

  const quoteDisplay = document.getElementById('quoteDisplay');
  const generateQuoteBtn = document.getElementById('generateQuoteBtn');
  const answerInput = document.getElementById('answerInput');
  const correctness = document.getElementById('correctness');

  let currentQuestion = null;

  generateQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuestion = quotes[randomIndex];
    quoteDisplay.textContent = currentQuestion.question;
    correctness.textContent = '';
  });

  answerInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && currentQuestion) {
      const answer = answerInput.value.trim().toLowerCase();
      const correctAnswer = currentQuestion.answer.toLowerCase();

      if (answer === correctAnswer) {
        correctness.textContent = 'Correct!';
      } else {
        correctness.textContent = 'False!';
      }

      setTimeout(() => {
        correctness.textContent = '';
      }, 2000);

      answerInput.value = '';
    }
  });
});
