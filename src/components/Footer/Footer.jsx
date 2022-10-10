import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-white">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex justify-center text-purple-00 sm:justify-start">
                            <h1 className='text-3xl text-purple-400 font-bold'>True Programmer Quizzes</h1>
                        </div>

                        <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                            Copyright &copy; 2022. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;