import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

const data = [
  { name: 'Rent', value: 400, price: '56,000' },
  { name: 'Share', value: 200, price: '40,000' },
  { name: 'Sold', value: 600, price: '20,000' },
];
const COLORS = ['#68D082', '#417EC6', '#F5BB5C'];

export default class ExpenseChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <ResponsiveContainer width="95%" height={150}>
        <PieChart
          onMouseEnter={this.onPieEnter}
          style={{ backgroundColor: 'white', margin: 10 }}
        >
          <Pie
            data={data}
            cx={75}
            cy={70}
            innerRadius={45}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                padding={{ top: 20 }}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            iconType="circle"
            content={renderLegend}
            wrapperStyle={{ width: '60%', top: 21, right: '8%' }}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ marginBottom: 10, listStyleType: 'none' }}
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
              marginRight: 4,
            }}
          >
            <circle
              class="progress-ring__circle"
              stroke={COLORS[index % COLORS.length]}
              stroke-width="8"
              fill="transparent"
              r="8"
              cx="12"
              cy="15"
            />
          </svg>
          <span className="recharts-legend-item-text"> {entry.value}</span>
          <span style={{ float: 'right' }}> $ {entry.payload.price}</span>
        </li>
      ))}
    </ul>
  );
};
