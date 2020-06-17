import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 15,
    pv: 2400,
    amt: 38,
  },
];

export default class AlternateChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={170}>
        <BarChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            interval={0}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <YAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
