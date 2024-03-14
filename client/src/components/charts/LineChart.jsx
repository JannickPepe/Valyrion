/* eslint-disable react/prop-types */


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

const salesData = [
    {
        name: 'Jan',
        revenue: 4000,
        profit: 2400,
    },
    {
        name: 'Feb',
        revenue: 3000,
        profit: 1398,
    },
    {
        name: 'Mar',
        revenue: 9800,
        profit: 2000,
    },
    {
        name: 'Apr',
        revenue: 3908,
        profit: 2780,
    },
    {
        name: 'May',
        revenue: 4800,
        profit: 1890,
    },
    {
        name: 'Jun',
        revenue: 3800,
        profit: 2390,
    },
];

const LineChartComponent = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={salesData}
                margin={{
                right: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#38bec9" />
                <Line type="monotone" dataKey="profit" stroke="#0a6c74" />
            </LineChart>
        </ResponsiveContainer>
    );

};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {

        return (
        <div className="p-4 bg-[#0e7c86] flex flex-col gap-4 rounded-md">
            <p className="text-medium text-lg text-white">{label}</p>
            <p className="text-sm text-[#87eaf2]">
                Revenue:
                <span className="ml-2">${payload[0].value}</span>
            </p>
            <p className="text-sm text-white">
                Profit:
                <span className="ml-2">${payload[1].value}</span>
            </p>
        </div>
        );
    }
};
