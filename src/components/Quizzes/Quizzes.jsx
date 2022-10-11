import React from 'react';
import { Link } from 'react-router-dom';

const Quizzes = ({quiz}) => {
   
    const {id,logo,name}=quiz;
    return (
        <div className='container mx-auto'>
            <div
                className={`relative bg-[url(${logo})] bg-cover bg-center bg-no-repeat border shadow-md  rounded-lg  w-[350px] h-[400px] px-8 pb-2 pt-56 sm:px-6 sm:pb-6 sm:pt-56 mx-auto`}
            >
                
                <span className="absolute inset-0 bg-gray-900/25"></span>
                <strong
                    className="absolute top-4 left-0 bg-purple-400 py-1.5 px-3 text-xs uppercase tracking-wider text-white"
                >
                    Best Quizzes
                </strong>

                <div className="relative text-center">
                    <h3
                        className="text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
                    >
                        {name}
                    </h3>

                    <p className="mt-1 text-white/95">Updated 2022</p>

                    <Link
                        to={`/quiz${id}`}
                        className="mt-6 block bg-purple-600 px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-purple-700 focus:outline-none focus:ring"
                    >
                        Start Quiz
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Quizzes;