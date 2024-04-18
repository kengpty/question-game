"use client";

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is 10 + 5?",
    options: ["15", "12", "14", "20"],
    answer: "15",
  },
  {
    id: 2,
    question: "What is 8 × 4?",
    options: ["32", "24", "36", "40"],
    answer: "32",
  },
  {
    id: 3,
    question: "What is 25 - 9?",
    options: ["16", "14", "18", "15"],
    answer: "16",
  },
  {
    id: 4,
    question: "What is 50 ÷ 5?",
    options: ["10", "5", "12", "8"],
    answer: "10",
  },
  {
    id: 5,
    question: "What is (3^3)?",
    options: ["6", "9", "12", "27"],
    answer: "27",
  },
  {
    id: 6,
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    id: 7,
    question: "What is (15 × 2) - 5?",
    options: ["20", "25", "30", "35"],
    answer: "25",
  },
  {
    id: 8,
    question: "What is 18 + 7?",
    options: ["24", "25", "26", "27"],
    answer: "25",
  },
  {
    id: 9,
    question: "What is (4^2)?",
    options: ["12", "14", "16", "18"],
    answer: "16",
  },
  {
    id: 10,
    question: "What is 36 ÷ 6?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
  {
    id: 11,
    question: "What is 9 × 9?",
    options: ["72", "81", "90", "100"],
    answer: "81",
  },
  {
    id: 12,
    question: "What is 55 - 25?",
    options: ["30", "28", "29", "27"],
    answer: "30",
  },
  {
    id: 13,
    question: "What is the cube root of 64?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    id: 14,
    question: "What is 7 × 8?",
    options: ["54", "55", "56", "57"],
    answer: "56",
  },
  {
    id: 15,
    question: "What is (5^2)?",
    options: ["20", "25", "30", "35"],
    answer: "25",
  },
  {
    id: 16,
    question: "What is (12 + 6) - 3?",
    options: ["15", "16", "17", "18"],
    answer: "15",
  },
  {
    id: 17,
    question: "What is 48 ÷ 4?",
    options: ["10", "12", "14", "16"],
    answer: "12",
  },
  {
    id: 18,
    question: "What is (2^4)?",
    options: ["16", "8", "10", "12"],
    answer: "16",
  },
  {
    id: 19,
    question: "What is 30 + 20?",
    options: ["45", "50", "55", "60"],
    answer: "50",
  },
  {
    id: 20,
    question: "What is 15 - 7?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
];

export default questions;
