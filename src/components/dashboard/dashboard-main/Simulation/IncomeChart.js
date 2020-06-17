import React, { PureComponent, Component } from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

const data = [
  {
    name: 'Income',
    size: 45,
  },
  {
    name: 'Expenses',
    size: 35,
  },
  {
    name: 'Loan Interest',
    size: 18,
  },
  {
    name: 'Loan Principal',
    size: 2,
  },
];

const COLORS = ['#4E81BD', '#9BBA58', '#2B4D74', '#4BABC6'];

class CustomizedContent extends PureComponent {
  render() {
    const {
      root,
      depth,
      x,
      y,
      width,
      height,
      index,
      colors,
      name,
    } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ? colors[Math.floor((index / root.children.length) * 6)]
                : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={12}
          >
            {name}
          </text>
        ) : null}
      </g>
    );
  }
}

export default class IncomeChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Ldvvz2ak/';

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height={235}>
          <Treemap
            data={data}
            dataKey="size"
            ratio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent colors={COLORS} />}
          />
        </ResponsiveContainer>
        <RenderLegend data={data} />
      </>
    );
  }
}

class RenderLegend extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{ display: 'inline-block', marginRight: 20 }}
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
            <span className="recharts-legend-item-text"> {entry.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}
