/* eslint-disable react-refresh/only-export-components */
import { ChartsContainer, OrderTable, StatsContainer } from '../components';
import MonthlyBox from '../components/Stats/MonthlyBox';
import YTDBox from '../components/Stats/YTDBox';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';


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
            <StatsContainer defaultStats={defaultStats} />
            
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