import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const InformationSection = styled.section`
  h1.ui.header {
    font-size: 48px;
    width: 70%;
    margin: 0 auto;
  }

  h3.ui.header {
    font-size: 30px;
    text-align: left;
  }

  .row {
    margin-top: 40px;
  }

  .column {
    p {
      font-size: 18px;
      text-align: left;
    }
  }

  @media screen and (max-width: 991px) {
    h1.ui.header {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    .ui.grid > .row > .column {
      width: 100% !important;
    }
  }
`;

export default function Information() {
  return (
    <InformationSection>
      <Container>
        <Header as="h1">
          We love data, and we think the world should too.
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3">Our Goals</Header>
              <p>
                While large institutions spend millions of dollars on
                development and underwriting technology, small lenders and
                credit unions are left to continue using credit scores, W2s, and
                pay stubs, to understand a borrower’s financial risk.
              </p>
              <p>
                We are here to provide a solution to modernize underwriting in a
                big way, without needing to develop an R&D department, for every
                institution that faces lending risk.
              </p>
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={process.env.PUBLIC_URL + '/imgs/temp.png'} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={process.env.PUBLIC_URL + '/imgs/temp.png'} />
            </Grid.Column>
            <Grid.Column>
              <Header as="h3">Our Experience</Header>
              <p>
                We are a team made up of credit analysts, risk managers,
                actuaries, attorneys, data scientists, and investment bankers.
                We’ve been at the forefront of institutional risk management on
                all sides of the street.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </InformationSection>
  );
}
