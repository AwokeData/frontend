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
    name: 'August',
    uv: 0,
    pv: 0,
  },
  {
    name: 'September',
    uv: 100,
    pv: 200,
  },
  {
    name: 'October',
    uv: 400,
    pv: 600,
  },
  {
    name: 'November',
    uv: 80,
    pv: 200,
  },
  {
    name: 'December',
    uv: 600,
    pv: 600,
  },
  {
    name: 'January',
    uv: 200,
    pv: 400,
  },
];

export default class CategoryChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 10 }}
            interval={0}
            padding={{ left: 50, right: 50 }}
          />
          <YAxis
            tickLine={false}
            width={45}
            interval={0}
            domain={['dataMin', 'dataMax']}
            tick={{ fontSize: 10 }}
            ticks={[0, 200, 400, 600, 800]}
            label={{
              value: '$ Amount ',
              angle: -90,
              position: 'insideBottomLeft',
              fontSize: 10,
            }}
          />
          <YAxis
            tickLine={false}
            interval={0}
            yAxisId="right"
            orientation="right"
            domain={['dataMin', 'dataMax']}
            tick={{ fontSize: 10 }}
            ticks={[0, 1, 2, 3, 4]}
            label={{ value: 'Count', angle: -90, fontSize: 10 }}
          />
          <CartesianGrid
            vertical={false}
            fill="white"
            stroke="#000000"
            strokeWidth={1}
          />
          <Tooltip />
          <Line
            type="number"
            dataKey="uv"
            stroke="#4E81BD"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="number"
            dataKey="pv"
            stroke="#C0504D"
            strokeWidth={0}
            dot={{ fill: '#C0504D' }}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
