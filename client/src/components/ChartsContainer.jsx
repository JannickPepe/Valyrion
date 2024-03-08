/* eslint-disable react/prop-types */
import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { IoBarChartSharp } from 'react-icons/io5';


const ChartsContainer = ({ data }) => {
    const [barChart, setBarChart] = useState(true);

    return (
        <Wrapper>
            <div className='grid grid-cols-1 lg:grid-cols-2'> 
                <div className='lg:col-span-1'>
                    <div className="flex items-center justify-center">
                        <IoBarChartSharp color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                        <h4>YTD Orders</h4>
                    </div>
                    <button type='button' onClick={() => setBarChart(!barChart)}>
                        {barChart ? 'Area Chart' : 'Bar Chart'}
                    </button>
                    {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
                </div>

                <div className='mt-10 lg:mt-0 lg:col-span-1'>
                    <div className="flex items-center justify-center">
                        <IoBarChartSharp color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                        <h4>Monthly Orders</h4>
                    </div>
                    <button type='button' onClick={() => setBarChart(!barChart)}>
                        {barChart ? 'Bar Chart' : 'Area Chart'}
                    </button>
                    {barChart ? <AreaChart data={data} /> : <BarChart data={data} />}
                </div>
            </div>
        </Wrapper>
    );
};

export default ChartsContainer;