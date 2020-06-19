import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: '01 Jul',
    Temperature: 11,
    Average: 24.5,
    amt: 19,
  },
  {
    name: '05 Jul',
    Temperature: 8,
    Average: 24,
    amt: 20,
  },
  {
    name: '09 Jul',
    Temperature: 10,
    Average: 25,
    amt: 20,
  },
  {
    name: '13 Jul',
    Temperature: 7,
    Average: 23.5,
    amt: 20,
  },
  {
    name: '17 Jul',
    Temperature: 8,
    Average: 24,
    amt: 20,
  },
  {
    name: '21 Jul',
    Temperature: 9,
    Average: 24.5,
    amt: 20,
  },
  {
    name: '25 Jul',
    Temperature: 9,
    Average: 26.5,
    amt: 22,
  },
  {
    name: '29 Jul',
    Temperature: 9,
    Average: 26.5,
    amt: 22,
  },
];

export default class DailyChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid vertical={false} fill="white" strokeWidth={1} />
          <XAxis dataKey="name" padding={{ left: -20, right: -20 }} />
          <YAxis
            tickLine={false}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 10, 20, 30, 40]}
            label={{
              value: 'Active Account Balance ',
              padding: { top: 10 },
              angle: -90,
              position: 'center',
            }}
          />
          <Tooltip />
          <Area
            dataKey="amt"
            stackId="1"
            stroke="#99A0C2"
            strokeWidth={2}
            fill="white"
          />
          <Line
            dataKey="Average"
            stroke="#78C2A7"
            strokeWidth={2}
            dot={false}
          />
          <Area
            dataKey="Temperature"
            stackId="1"
            stroke="#99A0C2"
            fill="#99A0C2"
            strokeWidth={2}
          />
          <Legend align="center" content={renderLegend} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

const renderLegend = (props) => {
  return (
    <ul style={{ textAlign: 'center', margin: 0 }}>
      <li style={{ display: 'inline-block', marginRight: 40 }}>
        <svg
          className="recharts-surface"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          version="1.1"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            align: 'center',
            marginRight: 4,
          }}
        >
          <rect fill="#99A0C2" width="15" height="15" x="10" y="8" />
        </svg>
        <span className="recharts-legend-item-text">Temperature Range</span>
      </li>
      <li style={{ display: 'inline-block', marginRight: 40 }}>
        <svg
          className="recharts-surface"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          version="1.1"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            align: 'center',
            marginRight: 4,
          }}
        >
          <rect fill="#78C2A7" width="15" height="15" x="10" y="8" />
        </svg>
        <span className="recharts-legend-item-text">Average</span>
      </li>
    </ul>
  );
};
