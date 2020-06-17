import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Card } from 'semantic-ui-react';
import DepositeChart from './DepositeChart';
import IncomeChart from './IncomeChart';
import DepositeAmountChart from './DepositeAmountChart';
import SimpleBarChart from './SimpleBarChart';

const Header = styled.div`
  .title {
    font-weight: Poppins-Bold;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const Deposite = styled.div`
  margin-top: 50px;

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

const IncomeDeposite = styled.div`
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
      padding-left: 30px;
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;
    }
  }
`;

const Estimate = styled.div`
  margin-top: 30px;

  .ui.label {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 25px;
    padding: 15px 25px 15px 25px;
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
`;

const Simple = styled.div`
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

export default function Income() {
  return (
    <>
      <Header>
        <p className="title">Income Analysis</p>
      </Header>
      <Deposite>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Deposits Over Time</Card.Header>
                </Card.Content>
                <Card.Content>
                  <DepositeChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Label>
                <p className="price">$501.30</p>
                <p className="price-explain">Avg. Total Deposite</p>
                <p className="price-explain">per Month</p>
              </Label>
              <Label>
                <p className="price">5</p>
                <p className="price-explain">Avg. Number of Deposits </p>
                <p className="price-explain">per Month</p>
              </Label>
              <Label>
                <p className="price">$200.50</p>
                <p className="price-explain">Avg. Deposit Amount</p>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Deposite>
      <IncomeDeposite>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={5}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Income Types</Card.Header>
                </Card.Content>
                <Card.Content>
                  <IncomeChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={11}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Deposit Amount Confidence Interval</Card.Header>
                </Card.Content>
                <Card.Content>
                  <DepositeAmountChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </IncomeDeposite>
      <Estimate>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Label>
                <p className="price">2</p>
                <p className="price-explain">Sources of Income</p>
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label>
                <p className="price">2 weeks</p>
                <p className="price-explain">Avg. Timing of Deposits</p>
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label>
                <p className="price">$126.32</p>
                <p className="price-explain">Standard Deviation</p>
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label>
                <p className="price">$500.00 - $1,750.00</p>
                <p className="price-explain">95% Confidence Interval</p>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Estimate>
      <Simple>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={12} style={{ margin: '0 auto' }}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>
                    Expense Breakdown by Category (Alternate View)
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <SimpleBarChart />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Simple>
    </>
  );
}
