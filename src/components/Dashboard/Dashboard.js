import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    ResponsiveContainer
} from "recharts";
import './Dashboard.css'

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];


const Dashboard = () => {
    return (
        <div className='dashboard-container mt-5 px-5'>
            <div className='chart'>
                <h3 className='text-center mt-2'>MONTH WISE SELL</h3>
                <LineChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </LineChart>
            </div>
            <div className='pie-chart'>
                <div className='chart'>
                    <h3 className='text-center mt-2'>INVESTMENT VS REVENUE</h3>
                    <div className=''>
                    <PieChart width={500} height={500}>
                        <Pie
                            data={data}
                            dataKey="investment"
                            cx={200}
                            cy={200}
                            outerRadius={60}
                            fill="#8884d8"
                        />
                        <Pie
                            data={data}
                            dataKey="revenue"
                            cx={200}
                            cy={200}
                            innerRadius={70}
                            outerRadius={90}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;