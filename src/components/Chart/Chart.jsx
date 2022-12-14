import React from "react";
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart = ({ chart }) => {
  const getDate = (date) => {
    return moment().day('Monday').week(date).locale('ru').format('DD MMMM');
  }
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        // width={500}
        height={250}
        data={chart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={(date) => getDate(date.date)}
          style={{ fontSize: 12, fontFamily: 'Montserrat' }}
        />
        <YAxis style={{ fontSize: 12, fontFamily: 'Montserrat' }} />
        <Tooltip
          itemStyle={{ fontSize: 12, fontFamily: 'Montserrat' }}
          labelStyle={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: 700 }}
        />
        <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'Montserrat' }} />
        <Line type="monotone" name='Просмотры' dataKey="countView" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" name='Звонки' dataKey="countCall" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}