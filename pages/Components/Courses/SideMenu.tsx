import React from "react";

const SideMenu = () => {
  const weeks: string[] = ["Module 1", "Module 2", "Module 3", "Module 4"];
  return (
    <nav className="col-span-1 overflow-auto">
        <img src="images/hero-header.png" className="h-28 mx-auto my-5"/>
      <ul className="pl-16">
          <li className="text-lg font-bold p-2 border-l-4 border-blue-600">Summary</li>
        {weeks.map((week, index) => (
          <li key={index} className="pl-8 py-2 my-2 hover:bg-gray-100 rounded-sm">{week}</li>
        ))}
        <li className="text-lg font-bold p-2">Scores</li>
        <li className="text-lg font-bold p-2">Forum</li>
      </ul>
    </nav>
  );
};

export default SideMenu;
