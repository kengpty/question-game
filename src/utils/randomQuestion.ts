// src/utils/randomQuestion.ts
import questions from "./question";
import { Question } from "./question";

export const getRandomQuestion = (): Question => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = { ...questions[randomIndex] };

  question.options = shuffleArray(question.options);

  return question;
};

const shuffleArray = (array: any[]): any[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
