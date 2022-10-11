import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import Swal from "sweetalert2";

const Quiz = () => {
  const quizs = useLoaderData();

  const [totalRight, setTotalRight] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  
  const { data } = quizs;

  const { id, name, total, questions } = data;

  

  return (
    <div className={` pt-8 bg-gray-100 border rounded-lg`}>
      <div className="bg-white container py-5 mx-auto rounded-lg">
        <h1 className="text-4xl text-purple-400 font-bold">Quizzes of {name}</h1>
        <p className="text-2xl mt-5 font-semibold">Total question : {total}</p>
      </div>
      <div>
        {questions.map((question) => (
          <Questions
            totalRight={totalRight}
            setTotalRight={setTotalRight}
            totalWrong={totalWrong}
            setTotalWrong={setTotalWrong}
            key={question.id}
            question={question}
          ></Questions>
        ))}
      </div>
       
      <button onClick={()=>
      Swal.fire({
    title: `${totalRight > totalWrong ?'Good Job':'keep learn More' }`,
    text: `Total Right answer is : ${totalRight} 
     Total Wrong answer is : ${totalWrong}`,
    icon: `${totalRight > totalWrong ?'success':'error'}`,
    confirmButtonText: "Back",
  })}
        
        className="bg-purple-400 text-white font-bold py-3 px-5 my-12 rounded-lg"
      >
        Show Result
      </button>
      
    </div>
  );
};

export default Quiz;
