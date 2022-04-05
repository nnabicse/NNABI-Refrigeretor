import React from 'react';
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, ZAxis, Scatter, BarChart, Bar, ComposedChart } from 'recharts';

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
        <div className='dashboard-container'>
            <div>
                <h1 className='chart-header'>
                    MONTH WISE SELL
                </h1>
                <ResponsiveContainer width="100%" aspect={1.5}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h1 className='chart-header'>REVENUE VS INVESTMENT</h1>
                <ResponsiveContainer width="100%" aspect={1.5}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend></Legend>
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h1 className='chart-header'>INVESTMENT VS REVENUE</h1>
                <ResponsiveContainer width="100%" aspect={1.5}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h1 className='chart-header'>REVENUE VS INVESTMENT</h1>
                <ResponsiveContainer width="100%" aspect={1.5}>
                    <ComposedChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


export default Dashboard;