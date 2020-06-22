import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'August',
    amount1: 0,
    amount2: 800,
    amount3: 0,
  },
  {
    name: 'September',
    amount1: 1250,
    amount2: 1100,
    amount3: 1800,
  },
  {
    name: 'October',
    amount1: 2300,
    amount2: 1400,
    amount3: 1800,
  },
  {
    name: 'November',
    amount1: 2400,
    amount2: 1700,
    amount3: 2200,
  },
  {
    name: 'December',
    amount1: 2500,
    amount2: 2000,
    amount3: 2800,
  },
  {
    name: 'January',
    amount1: 1250,
    amount2: 2300,
    amount3: 1000,
  },
];

// class CustomizedDot extends PureComponent {
//   render() {
//     const { cx, cy } = this.props;

//     return (
//       <svg
//         x={cx - 5}
//         y={cy - 5}
//         width={70}
//         height={70}
//         fill="#C0504D"
//         viewBox="0 0 1024 1024"
//       >
//         <path
//           d="M 10,150 L 70,10 L 130,150 z"
//           fill="#C0504D"
//           stroke="#C0504D"
//           strokeWidth="10"
//         />
//       </svg>
//     );
//   }
// }

export default class GrossChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={290}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" fill="white" />
          <XAxis dataKey="name" interval={0} fontSize={10} />
          <YAxis
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
            interval={0}
            yAxisId="right"
            orientation="right"
            domain={['dataMin', 'dataMax']}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount1"
            stroke="#4E81BD"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="amount2" stroke="#82ca9d" />
          <Line
            type="monotone"
            dataKey="amount3"
            stroke="#FFC000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
