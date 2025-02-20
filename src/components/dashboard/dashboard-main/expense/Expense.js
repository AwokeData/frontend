import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Card, Table } from 'semantic-ui-react';
import GrossChart from './GrossChart';
import AmountChart from './AmountChart';
import ExpenseChart from './ExpenseChart';
import AlternateChart from './AlternateChart';
import CategoryChart from './CategoryChart';

const Header = styled.div`
  .title {
    font-family: 'Poppins';
    font-weight: Bold;
    font-size: 34px;
    margin-bottom: 20px;
  }
`;

const Gross = styled.div`
  margin-top: 50px;
  .active-title {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 16px;
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
    font-size: 22px;
    margin-bottom: 7px;
  }

  .price-explain {
    font-family: 'Poppins';
    font-weight: normal;
    font-size: 12px;
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
        font-size: 13px;
      }
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
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 26px;
        text-align: center;
      }

      .description {
        font-family: 'Poppins';
        font-weight: normal;
        font-size: 12px;
        text-align: center;
      }
    }

    .chart-header {
      padding-left: 30px;
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;

      .header {
        font-family: 'Poppins';
        font-weight: Bold;
        font-size: 13px;
      }
    }
  }
`;

const Alternate = styled.div`
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

      .header {
        font-family: 'Poppins';
        font-weight: Bold;
        font-size: 13px;
      }
    }
  }
`;

const Category = styled.div`
  margin-top: 30px;

  .ui.card {
    width: 100%;
    border-radius: 25px;
    box-shadow: none;

    .content {
      background-color: #f5f5f5;
      border-radius: 0px 0px 25px 25px !important;
      padding-left: 0;
      padding-right: 0;
    }

    .chart-header {
      padding-left: 30px;
      background-color: #eceef4;
      border-radius: 25px 25px 0px 0px !important;

      .header {
        font-family: 'Poppins';
        font-weight: Bold;
        font-size: 13px;
      }
    }
  }

  .ui.basic.table {
    thead th {
      font-weight: normal !important;
      font-family: 'Poppins';
      font-size: 13px;
    }

    tbody td:nth-child(1),
    td:nth-child(2),
    td:nth-child(3),
    td:nth-child(4) {
      font-family: 'Poppins';
      font-size: 15px;
      font-weight: Bold;
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
            <Grid.Column width={12} style={{ margin: '0 auto' }}>
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
      <Category>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={16} style={{ margin: '0 auto' }}>
              <Card>
                <Card.Content className="chart-header">
                  <Card.Header>Category Analysis</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Table basic="very">
                    <Table.Header>
                      <Table.Row textAlign="center">
                        <Table.HeaderCell style={{ width: '15%' }}>
                          Category Name
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ width: '15%' }}>
                          Period Average
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ width: '15%' }}>
                          Monthly Average
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ width: '15%' }}>
                          Weekly Average
                        </Table.HeaderCell>
                        <Table.HeaderCell>Graph Over Time</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row textAlign="center">
                        <Table.Cell>Entertainment</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell style={{ paddingBottom: 0 }}>
                          <CategoryChart />
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>Gym</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell style={{ paddingBottom: 0 }}>
                          <CategoryChart />
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>Credit Card</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell style={{ paddingBottom: 0 }}>
                          <CategoryChart />
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>Restaurants</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell style={{ paddingBottom: 0 }}>
                          <CategoryChart />
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>Services</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell>$170.39</Table.Cell>
                        <Table.Cell style={{ paddingBottom: 0 }}>
                          <CategoryChart />
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Category>
    </>
  );
}
