import React from "react";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import javascript from "../../assets/icons/javascript.png";
import reactImage from "../../assets/icons/react.png";
import github from "../../assets/icons/github.png";
import tailwind from "../../assets/icons/tailwind.png";
import NodeJS from "../../assets/icons/node.png";
import MySQL from "../../assets/icons/MySQL-icon.png"


const Resume = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        // style: "shadow-sky-400",
      },
      {
        id: 7,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
          id: 8,
          src: MySQL,
          title: "MySQL",
          style: "shadow-orange-400",
        },
        {
          id: 9,
          src: NodeJS,
          title: "NodeJS",
          style: "shadow-lime-400",
        },
    ];
  
    return (
      <div
        name="experience"
        className="bg-gradient-to-b from-emerald-800 via-black to-black w-full h-full"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">

            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
  
          <div className="grid grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-10 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Resume