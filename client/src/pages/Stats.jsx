/* eslint-disable react-refresh/only-export-components */ 
import { useState } from 'react';
import { ChartsContainer, OrderTable, SearchFilter, StatsContainer } from '../components';
import MonthlyBox from '../components/Stats/MonthlyBox';
import YTDBox from '../components/Stats/YTDBox';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import { FaArrowDown, FaDatabase } from "react-icons/fa";
import StatsContainerMore from '../components/StatsContainerMore';


//
const statsQuery = {
    queryKey: ['stats'],
    queryFn: async () => {
        const response = await customFetch.get('/jobs/stats');
        return response.data;
    },
};

//
export const loader = (queryClient) => async () => {
    const data = await queryClient.ensureQueryData(statsQuery);
    return data;
};


const Stats = () => {
    
    const { data } = useQuery(statsQuery);
    const { defaultStats, monthlyApplications } = data;

    // YTD
    const [showComponent, setShowComponent] = useState(false);
    const handleClick = () => {
        setShowComponent(!showComponent);
    };

    // MONTHLY
    const [showComponentTwo, setShowComponentTwo] = useState(false);
    const handleClickTwo = () => {
        setShowComponentTwo(!showComponentTwo);
    };

    return (
        <>
            <SearchFilter />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6'>
                <div className='col-span-1 px-2 lg:px-0'>
                    <div className="mb-4 mt-4 lg:mt-0 lg:mb-4 flex items-center justify-center">
                        <FaDatabase color="#0a6c74" size={24} className="mr-1" />
                        <h4 className='text-2xl md:text-3xl lg:text-3xl'>YTD Status</h4>
                    </div>
                    <StatsContainer defaultStats={defaultStats} />
                    <div className="mt-4" onClick={handleClick}>
                        <p className='cursor-pointer flex items-center justify-center font-semibold mb-4 hover:scale-110 hover:underline'>
                            Pending & Declined Orders 
                            <FaArrowDown className='ml-1 mt-0.5' size={14}/>
                        </p>
                        {showComponent && <StatsContainerMore />}
                    </div>
                </div>

                <div className='col-span-1 px-2 lg:px-0'>
                    <div className="mb-4 mt-10 lg:mt-0 lg:mb-4 flex items-center justify-center">
                        <FaDatabase color="#0a6c74" size={24} className="mr-1" />
                        <h4 className='text-2xl md:text-3xl lg:text-3xl'>Monthly Status</h4>
                    </div>
                    <StatsContainer defaultStats={defaultStats} />
                    <div className="mt-4" onClick={handleClickTwo}>
                        <p className='cursor-pointer flex items-center justify-center font-semibold mb-4 hover:scale-110 hover:underline'>
                            Pending & Declined Orders 
                            <FaArrowDown className='ml-1 mt-0.5' size={14}/>
                        </p>
                        {showComponentTwo && <StatsContainerMore />}
                    </div>
                </div>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6'>
                <div className='col-span-1 px-2 lg:px-0'>
                    <YTDBox />
                </div>
                <div className='col-span-1 px-2 lg:px-0'>
                    <MonthlyBox />
                </div>
            </div>


            {monthlyApplications?.length > 1 && (
                <ChartsContainer data={monthlyApplications} />
            )}

            <OrderTable />
        </>
    );

};

export default Stats;