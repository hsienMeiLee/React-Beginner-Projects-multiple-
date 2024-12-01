import React, { useState } from "react";
import qBank from "./QuestionBank";
import Question from "./Question";
import Score from "./Score";

const QuizApp = () => {
  const questionBank = qBank;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-3 rounded-md shadow-md bg-emerald-200 min-w-[300px]">
        <h1 className="font-medium text-2xl text-gray-900 text-center">Quiz App</h1>
        {!quizEnd ? (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            onSubmit={handleSubmit}
          />
        ) : (
          <Score score={score} onNextQuestion={handleNextQuestion} />
        )}
      </div>
    </div>
  );
};

export default QuizApp;
