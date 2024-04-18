"use client";

import React, { useState, useEffect } from "react";
import { Question as QuestionType } from "../utils/question";

interface QuestionProps {
  question: QuestionType;
  onSelectAnswer: (selectedOption: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onSelectAnswer }) => {
  useEffect(() => {
    setSelectedOption(null);
  }, [question]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption !== null) {
      onSelectAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center lg:w-2/4 md:w-3/4">
      <h2 className="text-2xl font-bold mb-4 text-black	">
        {question?.question}
      </h2>

      <ul>
        {question?.options &&
          question.options.map((option, index) => (
            <li
              key={index}
              className={`bg-gray-100 p-4 rounded-lg mb-2 cursor-pointer ${
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
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-center"
        onClick={handleSubmitAnswer}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
