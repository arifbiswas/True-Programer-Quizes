import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const QuizzesContext = createContext({})
const Main = () => {
    const  quizzes = useLoaderData();
    // console.log(quizzes.data);
    return (
        <QuizzesContext.Provider value={quizzes.data}>
            <div className='relative h-full'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='relative h-full bottom-[0px]' >
            <Footer></Footer>
            </div>
        </div>
        </QuizzesContext.Provider>
    );
};

export default Main;