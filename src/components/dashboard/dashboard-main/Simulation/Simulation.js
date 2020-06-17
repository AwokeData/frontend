import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Card } from 'semantic-ui-react';
import LoanAssumptions from './LoanAssumptions';
import ActiveAccountChart from './ActiveAccountChart';
import LoanChart from './LoanChart';
import IncomeChart from './IncomeChart';
import DailyChart from './DailyChart';

const Header = styled.div`
  .title {
    font-weight: Poppins-Bold;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const Loan = styled.div`
  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;
    }

    .chart-header {
      padding-left: 30px;
      background-color: #c7c7c7;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

const ActiveAccount = styled.div`
  margin-top: 30px;

  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;
    }

    .chart-header {
      padding-left: 30px;
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

const LoanIncome = styled.div`
  margin-top: 30px;

  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;
    }

    .chart-header {
      padding-left: 30px;
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

const Stochastic = styled.div`
  margin-top: 50px;

  .estimate-title {
    font-family: Poppins-SemiBold;
    font-size: 18px;
    margin-left: 15px;
  }

  .active-title {
    font-family: Poppins-SemiBold;
    font-size: 18px;
    margin-left: 15px;
  }

  .ui.label {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 25px;
    padding: 15px 25px 15px 25px;
    margin-bottom: 40px;
  }

  .price {
    font-family: Poppins-SemiBold;
    font-size: 24px;
    margin-bottom: 7px;
  }

  .price-explain {
    font-family: Poppins-Regular;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }

  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;
    }

    .chart-header {
      padding-left: 30px;
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

export default function Simulation() {
  return (
    <>
      <Header>
        <p className="title">Simulation</p>
      </Header>
      <Loan>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={10}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Loan Assumptions</Card.Header>
                </Card.Content>
                <Card.Content>
                  <LoanAssumptions />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Loan>
      <ActiveAccount>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={15} style={{ margin: '0 auto' }}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Active Account Balance Simulation</Card.Header>
                </Card.Content>
                <Card.Content>
                  <ActiveAccountChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ActiveAccount>
      <LoanIncome>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={9}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Loan Balance Over Time</Card.Header>
                </Card.Content>
                <Card.Content>
                  <LoanChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={7}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Income Vs Expense Over Loan Period</Card.Header>
                </Card.Content>
                <Card.Content>
                  <IncomeChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </LoanIncome>
      <Stochastic>
        <p className="estimate-title">Stochastic Process</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Label>
                <p className="price">3.65%</p>
                <p className="price-explain">Probability of Default</p>
              </Label>
              <Label>
                <p className="price">57.4%</p>
                <p className="price-explain">Prepayment Probability</p>
              </Label>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>
                    Daily Temperature Variation in Bengaluru - July 2017
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <DailyChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Stochastic>
    </>
  );
}
