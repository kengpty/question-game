"use client";
import React from "react";
import { getRandomQuestion, getFirstQuestion } from "@/utils/randomQuestion";
import { Question } from "@/utils/question";
import Leaderboard from "@/components/Leaderboard";

const TOTAL_QUESTIONS = 20;

const Home: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState<Question | null>(
    null
  );

  const [questionNumber, setQuestionNumber] = React.useState<number>(1);
  const [showLeaderboard, setShowLeaderboard] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(
    null
  );
  const [userScore, setUserScore] = React.useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = React.useState<number[]>(
    []
  );

  React.useEffect(() => {
    setCurrentQuestion(getFirstQuestion());
  }, []);

  React.useEffect(() => {
    if (questionNumber < TOTAL_QUESTIONS) {
      setCurrentQuestion(getRandomQuestion(selectedQuestions));
    }
  }, [selectedQuestions]);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    const isCorrect =
      currentQuestion?.options[index] === currentQuestion?.answer;
    if (isCorrect) {
      setUserScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = (currentQuestion: Question) => {
    if (questionNumber < TOTAL_QUESTIONS) {
      setSelectedQuestions([...selectedQuestions, currentQuestion?.id]);
      setQuestionNumber((prevNumber) => prevNumber + 1);
      setSelectedOption(null);
    } else {
      setShowLeaderboard(true);
    }
  };

  const handleRestartGame = () => {
    setSelectedQuestions([]);
    setCurrentQuestion(getFirstQuestion());
    setQuestionNumber(1);
    setShowLeaderboard(false);
    setSelectedOption(null);
    setUserScore(0);
  };

  return (
    <div className="container mx-auto p-4">
      {!showLeaderboard && (
        <div className="bg-white rounded shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-black">
            {questionNumber}. {currentQuestion?.question}
          </h1>
          <ul className="space-y-2">
            {currentQuestion?.options.map((option, index) => (
              <li
                key={index}
                className={`bg-gray-100 p-4 rounded-lg mb-2 cursor-pointer hover:text-neutral-400	 ${
                  selectedOption === index
                    ? "bg-blue-500 text-orange-600	"
                    : "text-black"
                }`}
                onClick={() => handleSelectOption(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          {questionNumber <= TOTAL_QUESTIONS && (
            <button
              onClick={() =>
                currentQuestion ? handleNextQuestion(currentQuestion) : null
              }
              className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
              disabled={selectedOption !== null ? false : true}
            >
              {questionNumber < TOTAL_QUESTIONS ? "Next Question" : "Finish"}
            </button>
          )}
        </div>
      )}

      {showLeaderboard && (
        <div className="mt-4 bg-white rounded px-3 py-1 md:w-2/4 mx-auto">
          <Leaderboard playerName="Me" playerScore={userScore} />
          <div className="text-center">
            <button
              onClick={handleRestartGame}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
