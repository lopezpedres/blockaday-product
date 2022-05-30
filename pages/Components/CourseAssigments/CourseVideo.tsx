import React from "react";

const CourseVideo = () => {
  return (
    <div className="col-span-4">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-4xl mb-5"> Getting started with Blockchain</h1>
        <iframe
          width="946"
          height="532"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseVideo;
