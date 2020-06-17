import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from 'recharts';

const data = [
  {
    name: 'Entertainment',
    uv: 1500,
    pv: 4100,
  },
  {
    name: 'Gym',
    uv: 2100,
    pv: 5000,
  },
  {
    name: 'Credit Card',
    uv: 2700,
    pv: 8100,
  },
  {
    name: 'Restaurants',
    uv: 2050,
    pv: 4100,
  },
  {
    name: 'Services',
    uv: 1700,
    pv: 2800,
  },
  {
    name: 'Debit',
    uv: 900,
    pv: 5000,
  },
  {
    name: 'Deposite',
    uv: 8000,
    pv: 3650,
  },
];

class CustomizedDot extends PureComponent {
  render() {
    const { cx, cy, stroke, payload, value } = this.props;

    return (
      <svg
        x={cx - 5}
        y={cy - 5}
        width={100}
        height={100}
        fill="#C0504D"
        viewBox="0 0 1024 1024"
      >
        <rect width={100} height={100} />
      </svg>
    );
  }
}

export default class AmountChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={269}>
        <ComposedChart
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
          <CartesianGrid
            vertical={false}
            fill="white"
            stroke="#000000"
            strokeWidth={1}
          />
          <XAxis dataKey="name" />
          <YAxis
            interval={0}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]}
          />
          <YAxis
            interval={0}
            yAxisId="right"
            orientation="right"
            domain={['dataMin', 'dataMax']}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
          />
          <Tooltip />
          <Bar dataKey="uv" fill="#396FE1" barSize={40} />
          <Line
            type="number"
            dataKey="pv"
            stroke="#C0504D"
            strokeWidth={0}
            dot={<CustomizedDot />}
            activeDot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
