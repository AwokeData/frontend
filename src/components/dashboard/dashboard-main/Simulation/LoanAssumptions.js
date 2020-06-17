import React, { useState } from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import $ from 'jquery';

const LoanRight = styled.div`
  .ui.input > input {
    border-radius: 20px !important;
  }

  .ui.basic.buttons {
    background-color: #ffffff;
    border-radius: 20px;
  }

  .ui.buttons .button {
    border: none;
  }

  .ui.buttons .button:hover {
    border-radius: 20px;
  }

  .ui.buttons .button:focus {
    border-radius: 20px;
  }

  .ui.buttons .button:active {
    border: 1px solid black;
    border-radius: 20px;
  }

  .ui.basic.buttons .active {
    border: 1px solid black;
    border-radius: 20px;
    background-color: #ffffff !important;
  }
`;

const genSlideStyle = (value, range) => {
  const percentage = 100 / range;
  return {
    point: {
      left: `calc(${value * percentage}% - ${5}px)`,
    },
    range: {
      width: `${value * percentage}%`,
    },
  };
};

function LoanAssumptions() {
  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(425);
  const [term, setTerm] = useState(5);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const changeRate = (e) => {
    setRate(e.target.value);
  };

  const changeTerm = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = (e) => {
    $('.button').removeClass('active');
    e.target.className = 'ui button active';
  };

  const amountStyle = genSlideStyle(amount, 100000);
  const rateStyle = genSlideStyle(rate, 10000);
  const termStyle = genSlideStyle(term, 10);
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={7} style={{ padding: '0 20px 10px 30px' }}>
          <div className="range-header">
            <p className="title">Loan Amount</p>
            <p className="value">$ {amount}</p>
          </div>
          <div className="range">
            <span className="range-value" style={amountStyle.range} />
            <span className="circle" style={amountStyle.point} />
            <input
              className="range-slide"
              type="range"
              min="0"
              max="100000"
              value={amount}
              onChange={changeAmount}
            />
          </div>

          <div className="range-header">
            <p className="title">Interest Rate</p>
            <p className="value">{rate / 100} %</p>
          </div>
          <div className="range">
            <span className="range-value" style={rateStyle.range} />
            <span className="circle" style={rateStyle.point} />
            <input
              className="range-slide"
              type="range"
              min="0"
              max="10000"
              value={rate}
              onChange={changeRate}
            />
          </div>
          <div className="range-header">
            <p className="title">Term</p>
            <p className="value">{term} Years</p>
          </div>
          <div className="range">
            <span className="range-value" style={termStyle.range} />
            <span className="circle" style={termStyle.point} />
            <input
              className="range-slide"
              type="range"
              min="0"
              max="10"
              value={term}
              onChange={changeTerm}
            />
          </div>
        </Grid.Column>
        <Grid.Column width={9} style={{ padding: '0 20px 10px 15px' }}>
          <LoanRight>
            <div className="range-header">
              <p className="title">Amortization</p>
            </div>
            <Button.Group
              basic
              buttons={['Mortgage', 'Straight-Line', 'Balloon']}
              onClick={handleClick}
            />
            <div className="range-header">
              <p className="title">Closing Costs</p>
            </div>
            <Input
              name="cost"
              placeholder="cost..."
              value="$ 5,000"
              style={{ borderRadius: '10px !important' }}
            />
          </LoanRight>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default LoanAssumptions;
