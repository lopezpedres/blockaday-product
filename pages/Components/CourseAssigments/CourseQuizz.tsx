import React from "react";

const CourseQuizz = () => {
  return (
    <div>
      <div>
        <div>
          <p> Is this a question example?</p>
        </div>
        <div className="flex flex-col">
          <label>
            <input type="radio" value="1" />
            <span>Yes</span>
          </label>
          <label>
            <input type="radio" value="1" />
            <span>Yes</span>
          </label>
          <label>
            <input type="radio" value="1" />
            <span>Yes</span>
          </label>

        </div>
      </div>
    </div>
  );
};

export default CourseQuizz;
