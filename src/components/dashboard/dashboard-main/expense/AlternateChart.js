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
    alternate: '-',
    Entertainment: 15,
    Gym: 22,
    CreditCard: 26,
    Restaurants: 20,
    Services: 17,
  },
];

const COLORS = ['#3D73E6', '#E03634', '#9ADF40', '#6B48A9', '#33BDE7'];

export default class AlternateChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={170}>
        <BarChart
          data={data}
          layout="vertical"
          barCategoryGap={1}
          margin={{ top: 10, right: 30, left: 30, bottom: 15 }}
        >
          <CartesianGrid
            horizontal={false}
            fill="white"
            stroke="#000000"
            strokeWidth={1}
          />
          <XAxis
            type="number"
            interval={0}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <YAxis
            type="category"
            width={150}
            padding={{ left: 20 }}
            dataKey="alternate"
            hide
          />
          <Bar
            dataKey="Entertainment"
            stackId="a"
            fill="#3D73E6"
            barSize={60}
          />
          <Bar dataKey="Gym" stackId="a" fill="#E03634" barSize={60} />
          <Bar dataKey="CreditCard" stackId="a" fill="#9ADF40" barSize={60} />
          <Bar dataKey="Restaurants" stackId="a" fill="#6B48A9" barSize={60} />
          <Bar dataKey="Services" stackId="a" fill="#33BDE7" barSize={60} />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Legend align="center" content={renderLegend} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul style={{ textAlign: 'center', margin: 0 }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ display: 'inline-block', marginRight: 40 }}
        >
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
            <rect
              fill={COLORS[index % COLORS.length]}
              width="15"
              height="15"
              x="10"
              y="8"
            />
          </svg>
          <span className="recharts-legend-item-text"> {entry.value}</span>
        </li>
      ))}
    </ul>
  );
};
