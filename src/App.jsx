import React, { useState, useEffect } from "react";
import { quizData } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import StartScreen from "./components/StartScreen";
import { FaSun, FaMoon } from "react-icons/fa";
export default function App() {
  const [quizType, setQuizType] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [highScore, setHighScore] = useState(
    Number(sessionStorage.getItem("highScore") || 0)
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const questions = quizType ? quizData[quizType] : [];

  useEffect(() => {
    if (showResult && score > highScore) {
      sessionStorage.setItem("highScore", score);
      setHighScore(score);
    }
  }, [showResult, score, highScore]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setQuizType(null);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col items-center justify-start min-h-screen pt-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        {/* Header */}
        <div className="w-full max-w-lg flex justify-center items-center mb-6 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Quiz ⚡</h1>
            <div className="flex items-center gap-4">
              <div className="font-semibold text-lg">
                High Score: <span className="text-green-400">{highScore}</span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded-full transition hover:scale-110"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        {!quizType && (
          <StartScreen onSelectType={(type) => setQuizType(type)} />
        )}

        {quizType && !showResult && (
          <QuestionCard
            question={questions[currentIndex].question}
            options={questions[currentIndex].options}
            onAnswer={handleAnswer}
          />
        )}

        {quizType && showResult && (
          <ResultCard
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
