import React, { useState } from "react";
import Swal from "sweetalert2";

const Questions = ({
  question,
  totalRight,
  setTotalRight,
  totalWrong,
  setTotalWrong,
}) => {
  
  const Swal = require("sweetalert2");
  const { correctAnswer, id, question: quiz, options } = question;
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const showCorrectAnswer = () => {
  
    Swal.fire({
        title:`Answer is : ${correctAnswer}`,
        text: "Do you want to continue",
        icon: "question",
        confirmButtonText: "Back",
      })
  };
  const handleCheckQuiz = (quiz) => {
   
    if (correctAnswer === quiz) {
   
      if (right === 1) {
        return;
      } else {
        if (wrong === 0) {
          setRight(right + 1);
          setTotalRight(totalRight + 1);
         
          Swal.fire({
            title: "CorrectAnswer",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Back",
          })
        
        }
      }
    } else {
      
      if (right === 0) {
        if (wrong === 1) {
          return;
        } else {
          setWrong(wrong + 1);
          setTotalWrong(totalWrong + 1);
          Swal.fire({
            title: "Incorrect answer",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Back",
          })
        }
      }
    }
  };

  return (
    <div>
      <div className="sticky container mx-auto bg-white p-3 ">
        <h1 className="text-purple-400 font-semibold text-2xl">
          Right <span className="text-[green]">{right}</span>
        </h1>
        <h1 className="text-purple-400 font-semibold text-2xl">
          Wrong <span className="text-[red]">{wrong}</span>
        </h1>
      </div>
      <div className="bg-purple-400 container py-5 mx-auto rounded-lg my-5 relative ">
        <button
          onClick={showCorrectAnswer}
          className="relative  top-0 right-[-160px] bg-white py-2 px-4 md:right-[-700px] md:top-5 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        <div className="text-2xl">
          <h1 className="md:w-[800px] md:mx-auto">
            <span className="text-purple-900 font-semibold ">Q-:</span>
            <span className="text-white">{quiz}</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 md:w-[500px] mx-auto mt-4 justify-center items-center">
          <button
            onClick={() => handleCheckQuiz(options[0])}
            className="bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2"
          >
            <h2>
              <span className="text-purple-300 font-semibold">A.</span>{" "}
              <span className="text-white">{options[0]}</span>
            </h2>
          </button>

          <button
            onClick={() => handleCheckQuiz(options[1])}
            className="bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2"
          >
            <h2>
              <span className="text-purple-300 font-semibold">B.</span>{" "}
              <span className="text-white">{options[1]}</span>
            </h2>
          </button>

          <button
            onClick={() => handleCheckQuiz(options[2])}
            className="bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2"
          >
            <h2>
              <span className="text-purple-300 font-semibold">C.</span>{" "}
              <span className="text-white">{options[2]}</span>
            </h2>
          </button>

          {options[3] && (
            <button
              onClick={() => handleCheckQuiz(options[3])}
              className="bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2"
            >
              <h2>
                <span className="text-purple-300 font-semibold">D.</span>{" "}
                <span className="text-white">{options[3]}</span>
              </h2>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
