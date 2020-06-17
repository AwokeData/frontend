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
    pv: 800,
    wv: 0,
  },
  {
    name: 'September',
    uv: 1250,
    pv: 1100,
    wv: 1800,
  },
  {
    name: 'October',
    uv: 2300,
    pv: 1400,
    wv: 1800,
  },
  {
    name: 'November',
    uv: 2400,
    pv: 1700,
    wv: 2200,
  },
  {
    name: 'December',
    uv: 2500,
    pv: 2000,
    wv: 2800,
  },
  {
    name: 'January',
    uv: 1250,
    pv: 2300,
    wv: 1000,
  },
];

class CustomizedDot extends PureComponent {
  render() {
    const { cx, cy } = this.props;

    return (
      <svg
        x={cx - 5}
        y={cy - 5}
        width={70}
        height={70}
        fill="#C0504D"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M 10,150 L 70,10 L 130,150 z"
          fill="#C0504D"
          stroke="#C0504D"
          strokeWidth="10"
        />
      </svg>
    );
  }
}

export default class MonthlyExpenseChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={248}>
        <LineChart
          data={data}
          padding={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            interval={0}
            padding={{ left: 50, right: 50 }}
          />
          <YAxis
            tickLine={false}
            width={70}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
            label={{
              value: '$ Amount ',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <YAxis
            tickLine={false}
            interval={0}
            yAxisId="right"
            orientation="right"
            domain={['dataMin', 'dataMax']}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]}
            label={{ value: 'Count', angle: -90 }}
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
            stroke="#FFC000"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
          <Line
            type="number"
            dataKey="wv"
            stroke="#C0504D"
            strokeWidth={0}
            dot={<CustomizedDot />}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
