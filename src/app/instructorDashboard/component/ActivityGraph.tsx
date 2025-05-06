'use client';

import { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { fetchActivityData } from '../../lib/activitychartData';

export default function ActivityGraph() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState<'week' | 'month'>('week');
  const [chartType, setChartType] = useState<'theory' | 'practice'>('theory');

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchActivityData(filter);
      setData(response);
    };
    loadData();
  }, [filter]);

  return (
    <div className="bg-[#F7F7F7] p-4 rounded-lg shadow w-full max-w-[45%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium font-inter text-[#000000] text-[17px]">Activities</h2>
        {/* Radio Buttons */}
      <div className="flex gap-6 mb-2 text-sm justify-center">
        <label className="flex items-center gap-1 font-inter font-semibold text-[10px]">
          <input
            type="radio"
            value="theory"
            checked={chartType === 'theory'}
            onChange={() => setChartType('theory')}
          />
          Theory
        </label>
        <label className="flex items-center gap-1 font-inter font-semibold text-[10px]">
          <input
            type="radio"
            value="practice"
            checked={chartType === 'practice'}
            onChange={() => setChartType('practice')}
          />
          Practice
        </label>
      </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'week' | 'month')}
          className="border rounded-2xl px-5 py-1 text-sm bg-[#3DB765] text-white"
        >
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
        
      </div>

      
      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <LineChart  />
          <XAxis
           dataKey="date"
           stroke="#000000"
           tick={{ fill: '#000000', fontSize: 12 }}
          />
          <YAxis
            stroke="#000000"
            label={{ value: 'Hr', angle: -90, position: 'insideLeft', fill: '#000000' }}
            tick={{ fill: '#000000', fontSize: 12 }}
           />
          <Tooltip formatter={(value: any) => `${value} Hours`} />
          <Legend />
          {chartType === 'theory' && (
            <Line
              type="monotone"
              dataKey="theory"
              stroke="#d1d5db"
              name="Theory"
              strokeWidth={3}
            />
          )}
          {chartType === 'practice' && (
            <Line
              type="monotone"
              dataKey="practice"
              stroke="#22c55e"
              name="Practice"
              strokeWidth={3}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
