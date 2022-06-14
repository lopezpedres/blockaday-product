import React, { useState } from "react";
import { useMemo } from "react";

const data: Record<string, QuestionItem> = {
  "0": {
    question: "Question 1 ?",
    possibleAnswers: [
      { answer: "Answer 1", correct: false },
      { answer: "Answer 2", correct: false },
      { answer: "Answer 3", correct: false },
      { answer: "Answer 4", correct: true },
    ],
  },
  "1": {
    question: "Question 2 ?",
    description: "Description of question 2",
    possibleAnswers: [
      { answer: "Answer 1", correct: true },
      { answer: "Answer 2", correct: false },
    ],
  },
  "2": {
    question: "Question 3 ?",
    possibleAnswers: [
      { answer: "Answer 1", correct: true },
      { answer: "Answer 2", correct: false },
      { answer: "Answer 3", correct: false },
    ],
  },
};

interface QuestionItem {
  question: string;
  description?: string;
  possibleAnswers: {
    answer: string;
    correct: boolean;
  }[];
}

type QuestionAnswer = {
  questionId: string;
  index: number;
};

type QuestionAnswerProps = {
  id: string;
  show: boolean;
  answers: Record<string, QuestionAnswer>;
  setAnswers: (answers: Record<string, QuestionAnswer>) => void;
};

export function classes(...classes: (string|boolean|undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const AnswerComponent = ({
  id,
  show,
  answers,
  setAnswers,
}: QuestionAnswerProps) => {
  const question = data[id];
  const answer = answers[id];

  const inputHandler = (index: number) => {
    console.log("all good here");

    const newAnswer = { questionId: id, index };

    const newAnswers = { ...answers, [id]: newAnswer };
    setAnswers(newAnswers);
  };
  return (
    <div className="flex flex-col pl-4">
      {question.possibleAnswers.map((possibleAnswer, index) => {
        const possibleCorrect = possibleAnswer.correct;
        const isSelected = answer?.index === index;
        const currentCorrect = isSelected && possibleCorrect;

        const colorGreen = (currentCorrect || (!currentCorrect && possibleCorrect)) && show;
        const colorRed = !currentCorrect && show && isSelected;
        return (
          <label
            key={index}
            className={classes(
              "py-2",
              colorGreen && "bg-green-500",
              colorRed && "bg-red-500",
            )}
          >
            <input
              className="scale-150 m-4 "
              type="radio"
              name={question.question}
              onClick={(e) => inputHandler(index)}
            />
            <span className="">{possibleAnswer.answer}</span>
          </label>
        );
      })}
    </div>
  );
};

const Scoring = ({
  id,
  answers,
  show,
}: {
  answers: Record<string, QuestionAnswer>;
  show: boolean;
  id: string;
}) => {
  const answer = answers[id];
  const question = data[id];

  const isCorrect = question.possibleAnswers[answer.index].correct;

  if (isCorrect) {
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
        {Object.entries(data).map(([id, question]) => {
          return (
            <div key={question.question} className="p-8 border-2 mb-10">
              <div className="flex flex- wrap text-2xl font-bold pb-2">
                <span className=" px-2">{parseInt(id) + 1}.</span>
                <h2 className="">{question.question}</h2>
              </div>
              {question.description && <p>{question.description}</p>}

              <AnswerComponent
                id={id}
                show={show}
                answers={answers}
                setAnswers={setAnswers}
              />

              {show && <Scoring answers={answers} id={id} show={show} />}
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
