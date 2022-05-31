import React from "react";
import checkImage from "../../../public/check.svg";

const ContentMenu = () => {
  const mockData = [
    {
      title: "Seccion 1",
      content: [
        {
          type: "video",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          type: "lecture",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          type: "assignment",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      title: "Seccion 2",
      content: [
        {
          type: "video",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          type: "lecture",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          type: "assignment",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
  ];
  return (
    <div className="border-2">
      {mockData.map((content, index) => (
        <div key={index} className=" m-4 p-4 mb-4 border-b-2 ">
          <h1 className="text-2xl font-bold mb-4 ">{content.title}</h1>
          {content.content.map((item, index) => (
            <div key={index} className="flex flex-wrap mb-4 py-4 hover:bg-gray-100 ">
              <img src={checkImage.src} className="h-5 w-5 "/>
              <h2 className="text-lg font-bold pl-10">{item.type}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContentMenu;
