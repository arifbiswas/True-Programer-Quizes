import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, ReferenceLine, Area } from 'recharts';
import { QuizzesContext } from '../../Layouts/Main';


const ShowChart = () => {
    const datas = useContext(QuizzesContext)
    // console.log(datas);


    return (
        <div>
            <h1 className="text-purple-400 text-5xl my-12 font-black">ShowChart</h1>
            
            <div className='mx-auto my-12'>
                <ResponsiveContainer width={'100%'} height={700}>
                    <AreaChart data={datas}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                        <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ShowChart;