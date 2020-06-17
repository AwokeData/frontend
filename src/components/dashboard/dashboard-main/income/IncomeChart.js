import React, { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';

const data = [
  { name: 'Deposite', value: 90 },
  { name: 'Debit', value: 10 },
];

const COLORS = ['#C0504D', '#4E81BD'];

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
            width="30"
            height="30"
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
              width="20"
              height="18"
              x="12"
              y="3"
            />
          </svg>
          <span className="recharts-legend-item-text" style={{ fontSize: 24 }}>
            {' '}
            {entry.payload.value} %
          </span>
          <br />
          <span className="recharts-legend-item-text" style={{ fontSize: 14 }}>
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default class IncomeChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy={100}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend align="center" content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
