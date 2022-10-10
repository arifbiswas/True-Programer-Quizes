import React, { useEffect, useState } from 'react';

const Questions = ({question}) => {
    let totalR = 0;
    const [right ,setRight] = useState(0)
    const [wrong ,setWrong] = useState(0)
    const [totalRight,setTotalRight]=useState(0);
    // console.log(question);
    const {correctAnswer,id,question:quiz,options
    } =question;

    const [checkQuiz,setCheckQuiz]=useState('')
    const handleCheckQuiz =(quiz)=>{
        // console.log(quiz);
        if(correctAnswer === quiz){
            // console.log('right');
            if(right === 1){
                
                return
            }
            else{
                setRight(right + 1)
                totalR = totalR + 1;
                setTotalRight(totalR)
            }
        }
        else{
            // console.log('wrong');
           if(wrong === 3){
            return;
           }
           else{
            setWrong(wrong + 1)
           }
        }
    }
    console.log(totalRight );
    return (
       <div>
         <div className='sticky container mx-auto bg-white p-3 '>
                <h1 className='text-purple-400 font-semibold text-2xl'>Right <span className='text-[green]'>{right}</span></h1>
                <h1 className='text-purple-400 font-semibold text-2xl'>Wrong <span className='text-[red]'>{wrong}</span></h1>
            </div>
         <div className='bg-purple-400 container py-5 mx-auto rounded-lg my-5 '>  
            <div className='text-2xl'>
            <h1 className='md:w-[800px] md:mx-auto'><span className='text-purple-900 font-semibold '>Q-:</span><span className='text-white'>{quiz}</span></h1>
            </div>
            <div className='flex flex-wrap gap-5 md:w-[500px] mx-auto mt-4 justify-center items-center'>

               <button onClick={()=>handleCheckQuiz(options[0])}

                className='bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2'><h2><span className='text-purple-300 font-semibold'>A.</span> <span className='text-white'>{options[0]}</span></h2></button>

               <button onClick={()=>handleCheckQuiz(options[1])}

                className='bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2'><h2><span className='text-purple-300 font-semibold'>B.</span> <span className='text-white'>{options[1]}</span></h2></button>

               <button onClick={()=>handleCheckQuiz(options[2])}

                className='bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2'><h2><span className='text-purple-300 font-semibold'>C.</span> <span className='text-white'>{options[2]}</span></h2></button>

              { options[3] && <button onClick={()=>handleCheckQuiz(options[3])}
              
              className='bg-gray-800 hover:bg-gray-700 px-14 rounded-2xl my-2 py-2'><h2><span className='text-purple-300 font-semibold'>D.</span> <span className='text-white'>{options[3]}</span></h2></button>}
               
            </div>
        </div>
       </div>
    );
};

export default Questions;