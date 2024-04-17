"use client";

import { useState } from "react";
import { questions } from "@/utils/question";
import Question from "@/components/Question";
import Leaderboard from "@/components/Leaderboard";
import { shuffle } from "lodash";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [leaderboard, setLeaderboard] = useState<
    { name: string; score: number }[]
  >([]);

  const shuffledQuestions = shuffle(questions);

  const handleSelectAnswer = (selectedOption: number) => {
    // Check if the selected option is correct
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctOption === selectedOption;

    // Update leaderboard if the answer is correct
    if (isCorrect) {
      setLeaderboard((prevLeaderboard) => [
        ...prevLeaderboard,
        { name: "Player", score: 1 },
      ]);
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setLeaderboard([]);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
      {currentQuestionIndex < 20 ? (
        <Question
          question={currentQuestion}
          onSelectAnswer={handleSelectAnswer}
        />
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
          <Leaderboard leaderboardData={leaderboard} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
