/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { BsClipboardData } from 'react-icons/bs';
import { FaExchangeAlt } from 'react-icons/fa';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';

const StatsLineChartsMonth = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const newData = []

        for(let i = 0; i<12; i++) {
            newData.push({
                month: i+1,
                thismonth: (Math.random() * 20 + 20).toFixed(2),
                lastmonth: (Math.random() * 10 + 10).toFixed(2),
            })
        }
        setData(newData)
    }, [])

    return (
        <div className='mt-16'>
            <div className="flex items-center justify-center">
                <BsClipboardData color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                <h4 className='mb-4 text-2xl md:text-3xl lg:text-3xl'>YTD comparing from prev months</h4>
            </div>
            <FaExchangeAlt className="mx-auto mb-2 hover:scale-110 text-[#2cb1bc] hover:text-black" size={20} />
            <ResponsiveContainer width='100%' height={340}>
                <LineChart data={data}>
                    <XAxis dataKey={'month'} />
                    <YAxis dataKey={'thismonth'} domain={[0, 50]} type='number' />
                    <CartesianGrid stroke='grey' strokeDasharray='5 5' />
                    <Line dataKey={'thismonth'} stroke='purple' strokeLinecap={3} isAnimationActive={true} />
                    <Line dataKey={'lastmonth'} stroke='orange' strokeLinecap={3} isAnimationActive={true} />
                    <Legend />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

};

export default StatsLineChartsMonth;

const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {

        return (
        <div className="p-4 bg-[#0e7c86] flex flex-col gap-4 rounded-md">
            <p className="text-medium text-lg text-white">{label} months ago</p>
                <p className="text-sm text-[#87eaf2]">
                This month:
                <span className="mx-1 underline">{payload[0].value}</span><span className='font-bold'>orders</span>
            </p>
                <p className="text-sm text-white">
                Last month:
                <span className="mx-1 underline">{payload[1].value}</span><span className='font-bold'>orders</span>
            </p>
        </div>
        );
    }

};
