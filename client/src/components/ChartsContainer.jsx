/* eslint-disable react/prop-types */

import { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = ({ data }) => {
    const [barChart, setBarChart] = useState(true);

    return (
        <Wrapper>
            <div className='grid grid-cols-2'> 
                <div className='col-span-1'>
                    <h4>YTD Orders</h4>
                    <button type='button' onClick={() => setBarChart(!barChart)}>
                        {barChart ? 'Area Chart' : 'Bar Chart'}
                    </button>
                    {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
                </div>

                <div className='col-span-1'>
                    <h4>Monthly Orders</h4>
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