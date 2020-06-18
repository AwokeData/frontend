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
    name: '6/23/20',
    uv: 1200,
  },
  {
    name: '6/30/20',
    uv: 700,
  },
  {
    name: '7/7/20',
    uv: 1400,
  },
  {
    name: '7/14/20',
    uv: 800,
  },
  {
    name: '7/21/20',
    uv: 600,
  },
  {
    name: '7/28/20',
    uv: 100,
  },
  {
    name: '8/4/20',
    uv: 800,
  },
  {
    name: '8/11/20',
    uv: 300,
  },
  {
    name: '8/18/20',
    uv: 950,
  },
  {
    name: '8/25/19',
    uv: 500,
  },
  {
    name: '9/1/20',
    uv: 1200,
  },
  {
    name: '9/8/20',
    uv: 700,
  },
  {
    name: '9/15/20',
    uv: 1400,
  },
  {
    name: '9/22/20',
    uv: 850,
  },
  {
    name: '9/29/20',
    uv: 1550,
  },
  {
    name: '10/6/20',
    uv: 1100,
  },
  {
    name: '10/13/20',
    uv: 1800,
  },
  {
    name: '10/20/20',
    uv: 1300,
  },
  {
    name: '10/27/20',
    uv: 1300,
  },
  {
    name: '11/3/20',
    uv: 1500,
  },
  {
    name: '11/10/20',
    uv: 2200,
  },
  {
    name: '11/17/20',
    uv: 1700,
  },
  {
    name: '11/24/20',
    uv: 2300,
  },
  {
    name: '12/1/20',
    uv: 1900,
  },
];

export default class ActiveAccountChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={272}>
        <AreaChart
          data={data}
          padding={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid fill="white" strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} interval={0} fontSize={9} />
          <YAxis
            ticks={[0, 500.0, 1000.0, 1500.0, 2000.0, 2500.0, 3000.0]}
            tickLine={false}
            textAnchor="end"
            interval={0}
            fontSize={10}
            dx={-10}
          />
          <YAxis yAxisId="right" width={20} orientation="right" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
