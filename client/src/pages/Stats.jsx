/* eslint-disable react-refresh/only-export-components */ 
import { ChartsContainer, OrderTable, StatsContainer } from '../components';
import MonthlyBox from '../components/Stats/MonthlyBox';
import YTDBox from '../components/Stats/YTDBox';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import { FaDatabase } from "react-icons/fa";



const statsQuery = {
    queryKey: ['stats'],
    queryFn: async () => {
        const response = await customFetch.get('/jobs/stats');
        return response.data;
    },
};

export const loader = (queryClient) => async () => {
    const data = await queryClient.ensureQueryData(statsQuery);
    return data;
};


const Stats = () => {
    
    const { data } = useQuery(statsQuery);
    const { defaultStats, monthlyApplications } = data;

    return (
        <>
            

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4'>
                <div className='col-span-1 px-2 lg:px-0'>
                    <div className="mb-2 lg:mb-4 flex items-center justify-center">
                        <FaDatabase color="#0a6c74" size={24} className="mr-1" />
                        <h4>YTD Status</h4>
                    </div>
                    <StatsContainer defaultStats={defaultStats} />
                </div>

                <div className='col-span-1 px-2 lg:px-0'>
                    <div className="mb-2 lg:mb-4 flex items-center justify-center">
                        <FaDatabase color="#0a6c74" size={24} className="mr-1" />
                        <h4>Monthly Status</h4>
                    </div>
                    <StatsContainer defaultStats={defaultStats} />
                </div>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4'>
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