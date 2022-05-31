import React from "react";

const data = [
    {
        question: "Question 1 ?",
        possibleAnswers : [
            {answer: "Answer 1", correct: true},
            {answer: "Answer 2", correct: false},
            {answer: "Answer 3", correct: false},
            {answer: "Answer 4", correct: false}
        ]
    },
    {
        question: "Question 2 ?",
        possibleAnswers : [
            {answer: "Answer 1", correct: true},
            {answer: "Answer 2", correct: false}
        ]
    },
    {
        question: "Question 3 ?",
        possibleAnswers : [
            {answer: "Answer 1", correct: true},
            {answer: "Answer 2", correct: false},
            {answer: "Answer 3", correct: false},
        ]
    }
]

type item= {
item: {
  question: string;
  possibleAnswers: {
      answer: string;
      correct: boolean;
  }[];
}}

const CourseQuizz = () => {
  const inputHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
  };
  const QuestionAnswer = ({item}:item)=>{
      return (
        <div className="flex flex-col pl-4">
          {item.possibleAnswers.map((answer, index) => (
            <label key={index} className="py-2">
            <input
            className="scale-150"
              type="radio"
              name={item.question}
              onClick={(e) => inputHandler(e)}
              value={answer.answer}
            />
            <span className=" pl-4">{answer.answer}</span>
          </label>
          ))}
        </div>
      )
  }
  return (
    <div className="col-span-4">
      <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Quizz: Module 1</h1>
        {data.map((item)=>{
            return (
                <div key={item.question} className="p-8 border-2 mb-10">
                    <h2 className="text-2xl font-bold pb-2">{item.question}</h2>
                    <QuestionAnswer item={item} />
                </div>
            )
        })}
      </div>
    </div>
  );
};


export default CourseQuizz;
