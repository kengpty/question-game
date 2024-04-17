export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
}
export const questions: Question[] = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctOption: 1,
  },
  // Add more questions here
];
// export default questions;

// const generateRandomQuestions = (): Question[] => {
//   const questions: Question[] = [];

//   for (let i = 1; i <= 20; i++) {
//     const question: Question = {
//       id: i,
//       question: `Question ${i}: What is ${getRandomNumber()} + ${getRandomNumber()}?`,
//       options: generateOptions(),
//       correctOption: getRandomInt(0, 3),
//     };
//     questions.push(question);
//   }

//   return questions;
// };

// const getRandomNumber = (): number => {
//   return getRandomInt(1, 10);
// };

// const generateOptions = (): string[] => {
//   const options: string[] = [];

//   for (let i = 0; i < 4; i++) {
//     options.push(String(getRandomNumber()));
//   }

//   return options;
// };

// const getRandomInt = (min: number, max: number): number => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// export default generateRandomQuestions;
