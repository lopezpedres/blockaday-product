import React, { useState } from "react";
import { useMemo } from "react";

const data: Array<QuestionItem> = [
  {
    type: "simple",
    question: "Question 1 ?",
    possibleAnswers: [
      { answer: "Answer 1", correct: false },
      { answer: "Answer 2", correct: false },
      { answer: "Answer 3", correct: false },
      { answer: "Answer 4", correct: true },
    ],
  },
  {
    type: "description",
    question: "Question 2 ?",
    description: "Description of question 2",
    possibleAnswers: [
      { answer: "Answer 1", correct: true },
      { answer: "Answer 2", correct: false },
    ],
  },
  {
    type: "simple",
    question: "Question 3 ?",
    possibleAnswers: [
      { answer: "Answer 1", correct: true },
      { answer: "Answer 2", correct: false },
      { answer: "Answer 3", correct: false },
    ],
  },
];

interface QuestionItemBase {
  type: "simple" | "description";
  question: string;
  possibleAnswers: {
    answer: string;
    correct: boolean;
  }[];
}

interface QuestionItemSimple extends QuestionItemBase {
  type: "simple";
}

interface QuestionItemDescription extends QuestionItemBase {
  type: "description";
  description: string;
}

type QuestionItem = QuestionItemSimple | QuestionItemDescription;

type QuestionAnswer = {
  question: string;
  isCorrect: string;
};


type QuestionAnswerProps<T extends QuestionItemBase> = {
  show: boolean;
  item: T;
  answers: QuestionAnswer[];
  setAnswers: (answers: QuestionAnswer[]) => void;
};

const AnswerComponent = function <T extends QuestionItemBase>({
  show,
  item,
  answers,
  setAnswers,
}: QuestionAnswerProps<T>) {
  const inputHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log("all good here");
    const newValues: QuestionAnswer = {
      question: e.currentTarget.name,
      isCorrect: e.currentTarget.value,
    };
    const a = answers || [];
    setAnswers([...a, newValues]);
  };
  return (
    <div className="flex flex-col pl-4">
      {item.possibleAnswers.map((answer, index) => (
        <label
          key={index}
          className={`py-2 ${
            show && (answer.correct ? "bg-red-600" : "bg-green-600")
          }`}
        >
          <input
            className="scale-150 m-4 "
            type="radio"
            name={item.question}
            onClick={(e) => inputHandler(e)}
            value={answer.correct.toString()}
          />
          <span className="">{answer.answer}</span>
        </label>
      ))}
    </div>
  );
};

const Scoring = function <T extends QuestionItemBase>({
  item,
  answers,
  setAnswers,
  show,
}: QuestionAnswerProps<T>) {
  console.log("Enters Scoring");
  return (
    <>
      <AnswerComponent
        item={item}
        show={show}
        answers={answers}
        setAnswers={setAnswers}
      />
      {answers.map((answer: QuestionAnswer) => {
        console.log(answer.question, "equals", item.question);
        {
          answer.question === item.question &&
            (Boolean(answer.isCorrect) ? (
              <p>This is correct</p>
            ) : (
              <p>this is not correct</p>
            ));
        }
      })}
    </>
  );
};

const CourseQuizz = () => {
  //Todo: Need to change this any type eventually
  const [show, setShow] = useState<boolean>(false);
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
  
  return (
    <div className=" ">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Quizz: Module 1</h1>
        {data.map((item, index) => {

          return (
            <div key={item.question} className="p-8 border-2 mb-10">
              <div className="flex flex- wrap text-2xl font-bold pb-2">
                <span className=" px-2">{index + 1}.</span>
                <h2 className="">{item.question}</h2>
              </div>
              {item.type === "description" && <p>
                {item.description}
              </p>}
              {show ? (
                <Scoring item={item} answers={answers} setAnswers={setAnswers} show={show} />
              ) : (
                <AnswerComponent
                  item={item}
                  show={show}
                  answers={answers}
                  setAnswers={setAnswers}
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
