import React, { useState } from "react";
import { useMemo } from "react";

const data = [
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

type item = {
  item: {
    question: string;
    possibleAnswers: {
      answer: string;
      correct: boolean;
    }[];
  };
};

type answer = {
  question : string,
  isCorrect: string
}

const CourseQuizz = ()=>  {
  //Todo: Need to change this any type eventually
  const [show, setShow] = useState<boolean>(false);
  const [answers, setAnswers] = useState<answer[]> ([])
  const inputHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.getModifierState
    console.log("all good here")
    const newValues:answer = {
      question: e.currentTarget.name,
      isCorrect:e.currentTarget.value,

    }
    setAnswers([...answers,newValues])
    console.log(newValues)
  };
  const QuestionAnswer = ({ item }: item) => {
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
  const Scoring = (item:item)=>{
    console.log("Enters Scoring")
    return (
      <>

      {answers.map((answer:answer)=>{
        console.log(answer.question,"equals",item.item.question)
        {(answer.question===item.item.question)&&((Boolean(answer.isCorrect))?  <p>This is correct</p>: <p>this is not correct</p>)}
      })}
      </>
    )
  }
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
              {show? <Scoring item={item}/> :<QuestionAnswer item={item} />}
            </div>
          );
        })}
        <button onClick={()=>setShow(true)} className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-4 px-16 lg:py-4 lg:px-10 w-80 lg:w-52 rounded h-auto mb-4  ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CourseQuizz;