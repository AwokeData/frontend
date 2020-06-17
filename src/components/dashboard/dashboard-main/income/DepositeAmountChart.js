import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '$500.00',
    uv: 0,
  },
  {
    name: '$0.00',
    uv: 2,
  },
  {
    name: '$500.00',
    uv: 20,
  },
  {
    name: '$1,000.00',
    uv: 50,
  },
  {
    name: '$1,500.00',
    uv: 20,
  },
  {
    name: '$2,000.00',
    uv: 2,
  },
  {
    name: '$2,500.00',
    uv: 0,
  },
];

export default class DepositeAmountChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            vertical={false}
            fill="white"
            stroke="#000000"
            strokeWidth={1}
          />
          <XAxis dataKey="name" />
          <YAxis
            tickLine={false}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 10, 20, 30, 40, 50, 60]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#4E81BD"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
