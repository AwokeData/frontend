import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Card } from 'semantic-ui-react';
import MonthlyExpneseChart from './MonthlyExpneseChart';
import WeeklyExpneseChart from './WeeklyExpneseChart';
import MonthlyMortgageChart from './MonthlyMortgageChart';
import WeeklyMortgageChart from './WeeklyMortgageChart.js';

const Header = styled.div`
  .title {
    font-weight: Poppins-Bold;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const CreditDom = styled.div`
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

export default function Credit() {
  return (
    <>
      <Header>
        <p className="title">Credit Analysis</p>
      </Header>
      <CreditDom>
        <p className="estimate-title">Monthly Income-to-Expense Ratio</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Label>
                <p className="price">1.75x</p>
                <p className="price-explain">Avg. Income-to-Expense Ratio </p>
              </Label>
              <Label>
                <p className="price">1.95x</p>
                <p className="price-explain">Max. Income-to-Expense Ratio</p>
              </Label>
              <Label>
                <p className="price">0.5x</p>
                <p className="price-explain">Vol. Income-to-Expense Ratio </p>
              </Label>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Monthly Income-to-Expense Ratio</Card.Header>
                </Card.Content>
                <Card.Content>
                  <MonthlyExpneseChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </CreditDom>
      <CreditDom>
        <p className="estimate-title">Weekly Income-to-Expense Ratio</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Label>
                <p className="price">1.75x</p>
                <p className="price-explain">Avg. Income-to-Expense Ratio </p>
              </Label>
              <Label>
                <p className="price">1.95x</p>
                <p className="price-explain">Max. Income-to-Expense Ratio</p>
              </Label>
              <Label>
                <p className="price">0.5x</p>
                <p className="price-explain">Vol. Income-to-Expense Ratio </p>
              </Label>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Weekly Income-to-Expense Ratio</Card.Header>
                </Card.Content>
                <Card.Content>
                  <WeeklyExpneseChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </CreditDom>
      <CreditDom>
        <p className="estimate-title">Income-to-Mortgage Ratio</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Label>
                <p className="price">1.75x</p>
                <p className="price-explain">Avg. Income-to-Expense Ratio </p>
              </Label>
              <Label>
                <p className="price">1.95x</p>
                <p className="price-explain">Max. Income-to-Expense Ratio</p>
              </Label>
              <Label>
                <p className="price">0.5x</p>
                <p className="price-explain">Vol. Income-to-Expense Ratio </p>
              </Label>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Monthly Income-to-Mortgage Ratio</Card.Header>
                </Card.Content>
                <Card.Content>
                  <MonthlyMortgageChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </CreditDom>
      <CreditDom>
        <p className="estimate-title">Income-to-Credit Card Ratio</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Label>
                <p className="price">1.75x</p>
                <p className="price-explain">Avg. Income-to-Expense Ratio </p>
              </Label>
              <Label>
                <p className="price">1.95x</p>
                <p className="price-explain">Max. Income-to-Expense Ratio</p>
              </Label>
              <Label>
                <p className="price">0.5x</p>
                <p className="price-explain">Vol. Income-to-Expense Ratio </p>
              </Label>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Monthly Income-to-Credit Card Ratio</Card.Header>
                </Card.Content>
                <Card.Content>
                  <WeeklyMortgageChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </CreditDom>
    </>
  );
}
