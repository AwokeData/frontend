import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Card } from 'semantic-ui-react';
import GrossChart from './GrossChart';
import AmountChart from './AmountChart';
import ExpenseChart from './ExpenseChart';
import AlternateChart from './AlternateChart';

const Header = styled.div`
  .title {
    font-weight: Poppins-Bold;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const Gross = styled.div`
  margin-top: 50px;
  .active-title {
    font-family: Poppins-SemiBold;
    font-size: 18px;
    margin-left: 15px;
  }

  .ui.label {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 25px;
    padding: 20px 30px 20px 30px;
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
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

const AmountExpense = styled.div`
  margin-top: 10px;

  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;

      .expense-price {
        margin-top: 20px;
        margin-bottom: 15px;
        font-family: Poppins-SemiBold;
        font-size: 28px;
        text-align: center;
      }

      .description {
        font-family: Poppins-Regular;
        font-size: 14px;
        text-align: center;
      }
    }

    .chart-header {
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

const Alternate = styled.div`
  margin: 0 auto;

  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;
    }

    .chart-header {
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

export default function Expense() {
  return (
    <>
      <Header>
        <p className="title">Expense Analysis</p>
      </Header>
      <Gross>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Gross Expenses Over Time</Card.Header>
                </Card.Content>
                <Card.Content>
                  <GrossChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Label>
                <p className="price">$501.30</p>
                <p className="price-explain">Avg. Total Expenses per Month</p>
              </Label>
              <Label>
                <p className="price">5</p>
                <p className="price-explain">
                  Avg. Number of Expenses per Month
                </p>
              </Label>
              <Label>
                <p className="price">$200.12</p>
                <p className="price-explain">Slope</p>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Gross>
      <AmountExpense>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={11}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Amount vs Frequency by Category</Card.Header>
                </Card.Content>
                <Card.Content>
                  <AmountChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={5}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Expense Breakdown by Category</Card.Header>
                </Card.Content>
                <Card.Content>
                  <ExpenseChart />
                  <Card.Header className="expense-price">$2,400.12</Card.Header>
                  <Card.Description>Total Expenses</Card.Description>
                  <Card.Description>Since August 2020</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </AmountExpense>
      <Alternate>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>
                    Expense Breakdown by Category (Alternate View)
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <AlternateChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Alternate>
    </>
  );
}
