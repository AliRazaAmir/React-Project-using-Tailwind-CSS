import React from "react";
import { FaApple } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Students = () => {
  return (
    <>
      <section className="h-auto w-full flex flex-wrap flex-col item-center text-center p-10">
        <div className="flex flex-wrap flex-col items-center">
          <p className="font-bold text-indigo-800 text-3xl md:text-4xl">
            Pure Hardworks, No Shortcut
          </p>
          <div className=" h-1 w-20  border-b-4 border-yellow-400 mt-2"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="flex flex-col items-center mb-10 w-46 mt-10  ">
            <FaApple className="text-indigo-500 text-6xl" />
            <p className="text-3xl font-bold">600+</p>
            <p className="text-2xl font-semibold">Differents Languages</p>
          </div>
          <div className="flex flex-col items-center mb-10 w-46 mt-10  ">
            <FaLinkedin className="text-indigo-500 text-6xl" />
            <p className="text-3xl font-bold">500+</p>
            <p className="text-2xl font-semibold">Linkedin Course</p>
          </div>
          <div className="flex flex-col items-center mb-10 w-46 mt-10  ">
            <FaReact className="text-indigo-500 text-6xl" />
            <p className="text-3xl font-bold">700+</p>
            <p className="text-2xl font-semibold">React Course</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
