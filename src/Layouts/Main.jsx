import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='relative h-full'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='relative h-full bottom-[0px]' >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;