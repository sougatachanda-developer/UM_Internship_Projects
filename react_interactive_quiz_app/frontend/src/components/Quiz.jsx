import React, { useState, useEffect } from "react";
import questionsData from "../data/questionBank.json";

const Quiz = ({ questionLimit = 10 }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // timer for each question initial 10s
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [viewAnswers, setViewAnswers] = useState(false);

  useEffect(() => {
    const shuffledQuestions = [...questionsData]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionLimit);
    setQuestions(shuffledQuestions);
  }, [questionLimit]);

  useEffect(() => {
    if (timeLeft === 0 && !quizCompleted) handleNext();
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, quizCompleted]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex]?.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: questions[currentQuestionIndex]?.question,
        selectedAnswer,
        correctAnswer: questions[currentQuestionIndex]?.correctAnswer,
      },
    ]);

    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(10); // Set timer for each question after initial
    } else {
      setQuizCompleted(true);
      setTimeLeft(0); // Set timer to zero when the quiz is completed
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col items-center py-8">
      <header className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-6 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center sm:text-left">
           Interactive Quiz
        </h1>
        <span className="text-gray-700 font-medium mt-2 sm:mt-0">
          ⏱ Time Left: {timeLeft}s
        </span>
      </header>

      {!quizCompleted ? (
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between mb-4 text-sm sm:text-base">
            <span className="text-gray-600 font-medium">🌟 Difficulty: Medium</span>
            <span className="text-gray-600 font-medium">📋 Questions: {questions.length}</span>
          </div>
          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-purple-700"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="my-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-purple-800">
              {questions[currentQuestionIndex]?.question}
            </h2>
          </div>
          <div className="space-y-4">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <button
                key={index}
                className={`w-full flex items-center justify-start px-4 py-3 border-2 rounded-lg text-sm sm:text-base transition-all duration-300 ${
                  selectedAnswer === option
                    ? "bg-gradient-to-r from-purple-400 to-purple-700 text-white border-purple-600"
                    : "bg-white text-gray-800 border-gray-300 hover:border-purple-400 hover:shadow-lg"
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                <input
                  type="radio"
                  className="mr-3 accent-purple-600"
                  checked={selectedAnswer === option}
                  readOnly
                />
                {option}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0">
            <button
              className="px-6 py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
            >
              ← Previous
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              Next →
            </button>
          </div>
        </div>
      ) : viewAnswers ? (
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">
            📋 Your Answers
          </h1>
          <div className="space-y-6">
            {userAnswers.map((answer, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {index + 1}. {answer.question}
                </h2>
                <p className={`text-sm ${answer.selectedAnswer === answer.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                  Your Answer: {answer.selectedAnswer}
                </p>
                <p className="text-sm text-gray-600">Correct Answer: {answer.correctAnswer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              className="px-6 py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto"
              onClick={() => setViewAnswers(false)}
            >
              Close
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.location.reload()}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">
            🎉 Your Score
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-800 mb-8">
            {score} out of {questions.length} correct answers
          </p>
          <button
            className="px-6 py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto"
            onClick={() => setViewAnswers(true)}
          >
            View Answers
          </button>
          <button
              className="px-6 ml-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.location.reload()}
            >
              Restart Quiz
           </button>   
        </div>
      )}

      <footer className="mt-8 text-gray-600 text-sm text-center">
        Made by Sougata Chanda
      </footer>
    </div>
  );
};

export default Quiz;