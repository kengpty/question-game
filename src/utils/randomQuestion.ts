// src/utils/randomQuestion.ts
import questions from "./question";
import { Question } from "./question";

export const getRandomQuestion = (questionId: number[]): Question => {
  const availableQuestions = questions.filter(
    (question) => !questionId.includes(question.id)
  );
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  availableQuestions[randomIndex].options = shuffleArray(
    availableQuestions[randomIndex].options
  );
  return availableQuestions[randomIndex];
};

export const getFirstQuestion = (): Question => {
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
