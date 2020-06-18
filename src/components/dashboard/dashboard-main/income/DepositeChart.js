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
    name: '9/15/19',
    uv: 780,
  },
  {
    name: '9/22/19',
    uv: 0,
  },
  {
    name: '9/29/19',
    uv: 590,
  },
  {
    name: '10/6/19',
    uv: 0,
  },
  {
    name: '10/13/19',
    uv: 850,
  },
  {
    name: '10/20/19',
    uv: 0,
  },
  {
    name: '10/27/19',
    uv: 0,
  },
  {
    name: '11/3/19',
    uv: 1180,
  },
  {
    name: '11/10/19',
    uv: 0,
  },
  {
    name: '11/17/19',
    uv: 1420,
  },
  {
    name: '11/24/19',
    uv: 0,
  },
  {
    name: '12/1/19',
    uv: 1100,
  },
  {
    name: '12/8/19',
    uv: 0,
  },
  {
    name: '12/15/19',
    uv: 1460,
  },
  {
    name: '12/22/19',
    uv: 0,
  },
  {
    name: '12/29/19',
    uv: 590,
  },
];

export default class DepositeChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={272}>
        <BarChart
          data={data}
          padding={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" fill="white" />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <CartesianGrid strokeDasharray="3 3" fill="white" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
            tickLine={false}
            interval={0}
          />
          <YAxis
            ticks={[
              0,
              200.0,
              400.0,
              600.0,
              800.0,
              1000.0,
              1200.0,
              1400.0,
              1600.0,
            ]}
            textAnchor="end"
            interval={0}
            fontSize={10}
            dx={-10}
          />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
