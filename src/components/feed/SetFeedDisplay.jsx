import { NavLink } from "react-router-dom";
import UseCustomFeedSelection from "../customData/UseCustomFeedSelection";
import { Sports } from "../utilities/Api";
import { useEffect, useState } from "react";
function SetFeedDisplay({ setIsHovered }) {
  const displays = UseCustomFeedSelection();
  const [type,setType]=useState()
  

  return (
    <div className="w-[100vw] sm:w-96 bg-gray-200 shadow-2xl rounded-md   ">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-lg font-medium text-orange-400 pt-5 border-b-2 border-orange-500">
          Choose feed display content
        </h1>
        <span
          onClick={() => setIsHovered(false)}
          className="font-bold cursor-pointer text-4xl text-orange-500 p-1"
        >
          &times;
        </span>
      </div>
      
      <Sports typeNews={type}/>

      <ul className="grid grid-cols-2 gap-1 justify-start p-2 mt-3">

        <li onClick={() => setIsHovered(false)} className="dropDown  group ">
          <NavLink
            to="news/latest"
            className="text-gray-600 group-hover:text-gray-800 px-1 w-full "
          >
            Latest
          </NavLink>
        </li>
        <li onClick={() => setIsHovered(false)} className="dropDown group">
          <NavLink
            to="news/headlines"
            className="text-gray-600 group-hover:text-gray-800 group-hover:scale-95 transition-all duration-500 ease-linear px-1"
          >
            Headlines
          </NavLink>
        </li>
        {displays.map((display) => (
          <li
            onClick={() => {
              setIsHovered(false);
              setType(display.category.toLowerCase())
            }}
            className="dropDown group"
          >
            <NavLink
              to={`news/${display.category.split(" ").join("").toLowerCase()}`}
              className="text-gray-600 group-hover:text-gray-800 px-1  group-hover:scale-95 transition-all duration-300 ease-linear"
            >
              {display.category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SetFeedDisplay;
