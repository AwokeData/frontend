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
    name: '6/23/20',
    uv: 1000,
  },
  {
    name: '6/24/20',
    uv: 1000,
  },
  {
    name: '6/25/20',
    uv: 1000,
  },
  {
    name: '6/26/20',
    uv: 1000,
  },
  {
    name: '6/27/20',
    uv: 1000,
  },
  {
    name: '6/28/20',
    uv: 1000,
  },
  {
    name: '6/29/20',
    uv: 1000,
  },
  {
    name: '6/30/20',
    uv: 1000,
  },
  {
    name: '7/1/20',
    uv: 1000,
  },
  {
    name: '7/2/20',
    uv: 1000,
  },
  {
    name: '7/3/20',
    uv: 1000,
  },
  {
    name: '7/4/20',
    uv: 1000,
  },
  {
    name: '7/5/20',
    uv: 1000,
  },
  {
    name: '7/6/20',
    uv: 1000,
  },
  {
    name: '7/7/20',
    uv: 1000,
  },
  {
    name: '7/8/20',
    uv: 1000,
  },
  {
    name: '7/9/20',
    uv: 1000,
  },
  {
    name: '7/10/20',
    uv: 1000,
  },
  {
    name: '7/11/20',
    uv: 1000,
  },
  {
    name: '7/12/20',
    uv: 1000,
  },
  {
    name: '7/13/20',
    uv: 1000,
  },
  {
    name: '7/14/20',
    uv: 1000,
  },
  {
    name: '7/15/20',
    uv: 857,
  },
  {
    name: '7/16/20',
    uv: 714,
  },
  {
    name: '7/17/20',
    uv: 571,
  },
  {
    name: '7/18/20',
    uv: 438,
  },
  {
    name: '7/19/20',
    uv: 295,
  },
  {
    name: '7/20/20',
    uv: 143,
  },
  {
    name: '7/21/20',
    uv: 0,
  },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={-10}
          y={10}
          dy={-5}
          fontSize={10}
          textAnchor="middle"
          fill="#666"
          transform="rotate(-90)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class LoanChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tickLine={false}
            interval={0}
            tick={<CustomizedAxisTick />}
          />
          <YAxis
            ticks={[0, 200.0, 400.0, 600.0, 800.0, 1000.0, 1200.0]}
            width={40}
            textAnchor="end"
            tickLine={false}
            interval={0}
            fontSize={10}
            dx={-10}
          />
          <YAxis yAxisId="right" width={20} orientation="right" />
          <CartesianGrid
            vertical={false}
            fill="white"
            stroke="#000000"
            strokeWidth={0.5}
          />
          <Tooltip />
          <Line
            type="number"
            dataKey="uv"
            stroke="#4E81BD"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
