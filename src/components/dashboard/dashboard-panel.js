import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ROOT = '/dashboard/user/id';

const DashboardPanelWrapper = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
  margin: 25px 0 0 10px;
  padding-right: 25px;
  text-align: left;
  color: white;
  flex-basis: 18%;
`;

const PanelBoxes = styled.div`
  padding: 15px 30px;
  border-radius: 30px;
  margin-bottom: 20px;
  height: 81px;

  .active-bar {
    display: none;
  }

  .icon {
    display: none;
  }

  &.active {
    background-color: white;
    color: black;
    position: relative;
    .active-bar {
      display: block;
      position: absolute;
      left: -20px;
      top: 22px;
    }

    .icon {
      display: block;
      float: left;
      margin-top: 10px;
      margin-right: 10px;
    }

    &:hover {
      background-color: white;
    }

    .menu-title {
      font-weight: Normal;
    }
  }

  &:hover {
    background-color: #2b3a81;
    cursor: pointer;
  }

  .user-title {
    font-family: 'Poppins';
    font-weight: Bold;
    font-size: 15px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu-title {
    font-family: 'Poppins';
    font-weight: Normal;
    font-size: 18px;
    margin-top: 10px;
  }
`;

function DashboardPanel() {
  const history = useHistory();
  const [active, setActive] = useState('overview');

  useEffect(() => {
    history.push(`${ROOT}/${active}`);
  }, [active, history]);

  return (
    <DashboardPanelWrapper>
      <PanelBoxes
        style={{
          height: '155px',
          backgroundColor: '#F98229',
          padding: '20px 30px',
        }}
      >
        <p className="user-title"> ID&nbsp;#1869245781</p>
        <p className="user-title"> John&nbsp;Doe</p>
        <p className="user-title"> New&nbsp;York,&nbsp;NY</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="overview"
        className={active === 'overview' ? 'active' : ''}
        onClick={() => setActive('overview')}
      >
        <img
          className="active-bar"
          src={process.env.PUBLIC_URL + '/imgs/active-bar.png'}
          alt="bar"
        />
        <img
          width="30"
          className="icon"
          src={process.env.PUBLIC_URL + '/imgs/overview.png'}
          alt="bar"
        />
        <p className="menu-title">Overview</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="expense"
        className={active === 'expense' ? 'active' : ''}
        onClick={() => setActive('expense')}
      >
        <img
          className="active-bar"
          src={process.env.PUBLIC_URL + '/imgs/active-bar.png'}
          alt="bar"
        />
        <img
          width="30"
          className="icon"
          src={process.env.PUBLIC_URL + '/imgs/expenses.png'}
          alt="bar"
        />
        <p className="menu-title">Expense</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="income"
        className={active === 'income' ? 'active' : ''}
        onClick={() => setActive('income')}
      >
        <img
          className="active-bar"
          src={process.env.PUBLIC_URL + '/imgs/active-bar.png'}
          alt="bar"
        />
        <img
          width="30"
          className="icon"
          src={process.env.PUBLIC_URL + '/imgs/income.png'}
          alt="bar"
        />
        <p className="menu-title"> Income</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="credit"
        className={active === 'credit' ? 'active' : ''}
        onClick={() => setActive('credit')}
      >
        <img
          className="active-bar"
          src={process.env.PUBLIC_URL + '/imgs/active-bar.png'}
          alt="bar"
        />
        <img
          width="30"
          className="icon"
          src={process.env.PUBLIC_URL + '/imgs/credit.png'}
          alt="bar"
        />
        <p className="menu-title"> Credit</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="simulation"
        className={active === 'simulation' ? 'active' : ''}
        onClick={() => setActive('simulation')}
      >
        <img
          className="active-bar"
          src={process.env.PUBLIC_URL + '/imgs/active-bar.png'}
          alt="bar"
        />
        <img
          width="30"
          className="icon"
          src={process.env.PUBLIC_URL + '/imgs/simulation.png'}
          alt="bar"
        />
        <p className="menu-title"> Simulation</p>
      </PanelBoxes>
      <PanelBoxes
        data-attr="stressTesting"
        className={active === 'stressTesting' ? 'active' : ''}
        onClick={() => setActive('stressTesting')}
      >
        <img
          className="active-bar"
          src={process.env.PUBLIC_URL + '/imgs/active-bar.png'}
          alt="bar"
        />
        <p className="menu-title"> Stress Testing</p>
      </PanelBoxes>
    </DashboardPanelWrapper>
  );
}

export default DashboardPanel;
