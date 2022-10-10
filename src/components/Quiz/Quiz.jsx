import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz);
    const {data}=quiz;
    const {id,name,total,logo,questions}=data;
    return (
        <div className={` pt-8 bg-gray-100 border rounded-lg`}> 
           <div className="bg-white container py-5 mx-auto rounded-lg">
           <h1 className='text-4xl text-purple-400 font-bold'>{name}</h1>
            <p className='text-2xl mt-5 font-semibold'>Total question : {total}</p>
           </div>
            <div>
                {
                    questions.map(question =><Questions
                    key={id}
                    question={question}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;