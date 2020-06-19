import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Card } from 'semantic-ui-react';
import ActivateChart from './ActivateChart';
import WeeklyChart from './WeeklyChart';

const Header = styled.div`
  .title {
    font-family: 'Poppins';
    font-weight: Bold;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const Estimate = styled.div`
  .estimate-title {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    margin-left: 15px;
  }

  .ui.label {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 25px;
    padding: 15px 25px 15px 25px;
  }

  .price {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 7px;
  }

  .price-explain {
    font-family: 'Poppins';
    font-weight: normal;
    font-size: 14px;
    margin: 0;
  }
`;

const Active = styled.div`
  margin-top: 50px;
  .active-title {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    margin-left: 15px;
  }

  .ui.label {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 25px;
    padding: 20px 30px 20px 30px;
    margin-bottom: 30px;
  }

  .price {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 7px;
  }

  .price-explain {
    font-family: 'Poppins';
    font-weight: normal;
    font-size: 14px;
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

      .header {
        font-family: 'Poppins';
        font-weight: Bold;
        font-size: 15px;
      }
    }
  }
`;

const Weekly = styled.div`
  margin-top: 10px;
  .active-title {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    margin-left: 15px;
  }

  .ui.label {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 25px;
    padding: 20px 30px 20px 30px;
    margin-bottom: 30px;
  }

  .price {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 7px;
  }

  .price-explain {
    font-family: 'Poppins';
    font-weight: normal;
    font-size: 14px;
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

      .header {
        font-family: 'Poppins';
        font-weight: Bold;
        font-size: 15px;
      }
    }
  }
`;

export default function OverView() {
  return (
    <>
      <Header>
        <p className="title">Overview</p>
      </Header>
      <Estimate>
        <p className="estimate-title">Estimated Annualized Summary</p>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Estimate>
      <Active>
        <p className="active-title">Active Account Summary</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>
                    Active Checking Account Balance Over Time
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <ActivateChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
              <Label>
                <p className="price">$75,757.00</p>
                <p className="price-explain">Ext.Annual Income</p>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Active>
      <Weekly>
        <p className="active-title">Weekly Net Transactions</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Weekly Net Transactions</Card.Header>
                </Card.Content>
                <Card.Content>
                  <WeeklyChart />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Label>
                <p className="price">5</p>
                <p className="price-explain">Positive Weeks</p>
              </Label>
              <Label>
                <p className="price">10</p>
                <p className="price-explain">Negative Weeks</p>
              </Label>
              <Label>
                <p className="price">-$605.15</p>
                <p className="price-explain">Net Amount</p>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Weekly>
    </>
  );
}
