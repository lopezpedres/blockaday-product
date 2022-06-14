import React, { useState } from "react";
import { useMemo } from "react";

const data: Array<QuestionItem> = [
  {
    question: "Question 1 ?",
    possibleAnswers: [
      { answer: "Answer 1", correct: false },
      { answer: "Answer 2", correct: false },
      { answer: "Answer 3", correct: false },
      { answer: "Answer 4", correct: true },
    ],
  },
  {
    question: "Question 2 ?",
    description: "Description of question 2",
    possibleAnswers: [
      { answer: "Answer 1", correct: true },
      { answer: "Answer 2", correct: false },
    ],
  },
  {
    question: "Question 3 ?",
    possibleAnswers: [
      { answer: "Answer 1", correct: true },
      { answer: "Answer 2", correct: false },
      { answer: "Answer 3", correct: false },
    ],
  },
];

interface QuestionItem {
  question: string;
  description?: string;
  possibleAnswers: {
    answer: string;
    correct: boolean;
  }[];
}

type QuestionAnswer = {
  question: string;
  isCorrect: string;
};

type QuestionAnswerProps = {
  show: boolean;
  question: QuestionItem;
  answers: Record<string, QuestionAnswer>;
  setAnswers: (answers: Record<string, QuestionAnswer>) => void;
};

const AnswerComponent = ({
  show,
  question,
  answers,
  setAnswers,
}: QuestionAnswerProps) => {
  const inputHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log("all good here");
    const newValues: QuestionAnswer = {
      question: e.currentTarget.name,
      isCorrect: e.currentTarget.value,
    };

    const currentIndex = data.findIndex((q) => q === question);
    const newAnswers = { ...answers, [currentIndex]: newValues };
    setAnswers(newAnswers);
  };
  return (
    <div className="flex flex-col pl-4">
      {question.possibleAnswers.map((answer, index) => (
        <label
          key={index}
          className={`py-2 ${
            show && (answer.correct ? "bg-green-600" : "bg-red-600")
          }`}
        >
          <input
            className="scale-150 m-4 "
            type="radio"
            name={question.question}
            onClick={(e) => inputHandler(e)}
            value={answer.correct.toString()}
          />
          <span className="">{answer.answer}</span>
        </label>
      ))}
    </div>
  );
};

const Scoring = ({
  question,
  answer,
  show,
}: {
  question: QuestionItem;
  answer: QuestionAnswer;
  show: boolean;
}) => {
  console.log("Enters Scoring", answer);
  
  if (answer.isCorrect === "true") {
    return <p>This is correct</p>;
  }
  return <p>this is not correct</p>;
};

const CourseQuizz = () => {
  //Todo: Need to change this any type eventually
  const [show, setShow] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<string, QuestionAnswer>>({});

  return (
    <div className=" ">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Quizz: Module 1</h1>
        {data.map((question, index) => {
          return (
            <div key={question.question} className="p-8 border-2 mb-10">
              <div className="flex flex- wrap text-2xl font-bold pb-2">
                <span className=" px-2">{index + 1}.</span>
                <h2 className="">{question.question}</h2>
              </div>
              {question.description && <p>{question.description}</p>}

              <AnswerComponent
                question={question}
                show={show}
                answers={answers}
                setAnswers={setAnswers}
              />

              {answers[index] && show && (
                <Scoring
                  question={question}
                  answer={answers[index]}
                  show={show}
                />
              )}
            </div>
          );
        })}
        <button
          onClick={() => setShow(true)}
          className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-4 px-16 lg:py-4 lg:px-10 w-80 lg:w-52 rounded h-auto mb-4  "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CourseQuizz;
