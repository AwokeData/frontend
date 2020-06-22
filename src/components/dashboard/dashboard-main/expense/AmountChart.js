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
    name: 'Entertainment',
    amount1: 1500,
    amount2: 4100,
  },
  {
    name: 'Gym',
    amount1: 2100,
    amount2: 5000,
  },
  {
    name: 'Credit Card',
    amount1: 2700,
    amount2: 8100,
  },
  {
    name: 'Restaurants',
    amount1: 2050,
    amount2: 4100,
  },
  {
    name: 'Services',
    amount1: 1700,
    amount2: 2800,
  },
  {
    name: 'Debit',
    amount1: 900,
    amount2: 5000,
  },
  {
    name: 'Deposite',
    amount1: 8000,
    amount2: 3650,
  },
];

// class CustomizedDot extends PureComponent {
//   render() {
//     const { cx, cy } = this.props;

//     return (
//       <svg
//         x={cx - 5}
//         y={cy - 5}
//         width={100}
//         height={100}
//         fill="#C0504D"
//         viewBox="0 0 1024 1024"
//       >
//         <rect width={100} height={100} />
//       </svg>
//     );
//   }
// }

export default class AmountChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={269}>
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" fill="white" />
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
          <Legend />
          <Bar dataKey="amount1" fill="#8884d8" />
          <Bar dataKey="amount2" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
