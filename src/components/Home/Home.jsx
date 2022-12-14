import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizzesContext } from '../../Layouts/Main';
import banner from '../assets/banner.jpg'
import Quizzes from '../Quizzes/Quizzes';
const Home = () => {
    const quizzes = useContext(QuizzesContext);
    
    
    return (
        <div className='bg-gray-100'>
            <header>
                <section className="bg-gray-100 text-gray-900">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className='text-purple-400 text-5xl md:text-6xl'>Welcome to True Programmer Quizzes</h1>
                            <h2> </h2>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">Are you <span className=' text-xl md:text-2xl text-purple-400 font-bold'>Programmer ?</span>.If your answer is yes.Brother this site create for you,Because now you have any quizzes on this site and you can gain or earn lot of knowledge in This Quizzes. <Link><span className='text-purple-400 border bg-purple-50 font-bold'>Go Now</span></Link> and test your knowledge.
                            </p>
                            
                        </div>
                    </div>
                </section>
            </header>
            {/* Quizzes Container Start  */}
            <div className="quizzes-container grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto pb-16">
                {
                    quizzes.map(quiz =><Quizzes 
                        quiz={quiz}
                        key={quiz.id}
                        ></Quizzes>)
                }
            </div>
        </div>
    );
};

export default Home;