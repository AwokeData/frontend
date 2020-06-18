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
    name: '9/22/19',
    uv: -500,
  },
  {
    name: '9/29/19',
    uv: -450,
  },
  {
    name: '10/6/19',
    uv: 680,
  },
  {
    name: '10/13/19',
    uv: -580,
  },
  {
    name: '10/20/19',
    uv: 100,
  },
  {
    name: '10/27/19',
    uv: 60,
  },
  {
    name: '11/3/19',
    uv: 880,
  },
  {
    name: '11/10/19',
    uv: 420,
  },
  {
    name: '11/17/19',
    uv: 500,
  },
  {
    name: '11/24/19',
    uv: -100,
  },
  {
    name: '12/1/19',
    uv: 880,
  },
  {
    name: '12/8/19',
    uv: 400,
  },
  {
    name: '12/15/19',
    uv: 520,
  },
  {
    name: '12/22/19',
    uv: -300,
  },
  {
    name: '12/29/19',
    uv: -800,
  },
  {
    name: '1/5/19',
    uv: -300,
  },
  {
    name: '1/12/19',
    uv: 0,
  },
  {
    name: '1/19/20',
    uv: -120,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class WeeklyChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={272}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} interval={0} fontSize={10} />
          <YAxis
            ticks={[
              -1000.0,
              -800.0,
              -600.0,
              -400.0,
              -200.0,
              0,
              200.0,
              400.0,
              600.0,
              800.0,
              1000.0,
            ]}
            textAnchor="end"
            interval={0}
            fontSize={10}
            dx={-10}
          />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#000"
            fill="url(#splitColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
