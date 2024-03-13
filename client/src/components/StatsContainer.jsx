/* eslint-disable react/prop-types */

import { FaCalendarCheck, FaShoppingBasket } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';


const StatsContainer = ({ defaultStats }) => {
    const stats = [
        {
            title: 'total orders',
            count: defaultStats?.declined || 0,
            icon: <FaShoppingBasket />,
            color: '#2cb1bc',
            bcg: '#bef8fd',
        },
        {
            title: 'succeded orders',
            count: defaultStats?.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#2cb1bc',
            bcg: '#e0e8f9',
        },
    ];
    return (
        <Wrapper>
            {stats.map((item) => {
                return <StatItem key={item.title} {...item} />;
            })}
        </Wrapper>
    );
};
export default StatsContainer;