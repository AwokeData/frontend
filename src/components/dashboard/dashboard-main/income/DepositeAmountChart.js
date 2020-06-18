import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '$-500.00',
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
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid fill="white" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickLine={false}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 10, 20, 30, 40, 50, 60]}
          />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
