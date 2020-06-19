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
    name: '12/15/19',
    price1: 1050,
    price2: 860,
  },
  {
    name: '12/16/19',
    price1: 820,
    price2: 831,
  },
  {
    name: '12/17/19',
    price1: 500,
    price2: 802,
  },
  {
    name: '12/18/19',
    price1: 790,
    price2: 773,
  },
  {
    name: '12/19/19',
    price1: 920,
    price2: 744,
  },
  {
    name: '12/20/19',
    price1: 1220,
    price2: 715,
  },
  {
    name: '12/21/19',
    price1: 1000,
    price2: 686,
  },
  {
    name: '12/22/19',
    price1: 420,
    price2: 657,
  },
  {
    name: '12/23/19',
    price1: 480,
    price2: 628,
  },
  {
    name: '12/24/19',
    price1: 520,
    price2: 599,
  },
  {
    name: '12/25/19',
    price1: 700,
    price2: 570,
  },
  {
    name: '12/26/19',
    price1: 400,
    price2: 541,
  },
  {
    name: '12/27/19',
    price1: -20,
    price2: 512,
  },
  {
    name: '12/28/19',
    price1: 480,
    price2: 483,
  },
  {
    name: '12/29/19',
    price1: 660,
    price2: 454,
  },
  {
    name: '12/30/19',
    price1: 290,
    price2: 425,
  },
  {
    name: '12/31/19',
    price1: 580,
    price2: 396,
  },
  {
    name: '1/1/20',
    price1: 760,
    price2: 367,
  },
];

// class CustomizedAxisTick extends PureComponent {
//   render() {
//     const { x, y, payload } = this.props;

//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text
//           x={-10}
//           y={0}
//           dy={-5}
//           fontSize={11}
//           textAnchor="start"
//           fill="#666"
//           transform="rotate(-45)"
//         >
//           {payload.value}
//         </text>
//       </g>
//     );
//   }
// }

export default class ActivateChart extends PureComponent {
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
          <CartesianGrid strokeDasharray="3 3" fill="white" />
          <XAxis dataKey="name" interval={0} fontSize={10} />
          <YAxis
            domain={['dataMin', 'dataMax']}
            interval={0}
            ticks={[-200, 0, 200, 400, 600, 800, 1000, 1200, 1400]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price1"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="price2" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
