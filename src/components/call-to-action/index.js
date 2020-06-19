import React from 'react';
import { Container, Grid, Header, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #384586;

  .ui.header {
    color: white;
    text-align: left;
  }

  h1.ui.header {
    font-family: 'Poppins';
    font-weight: Bold;
    font-size: 40px;
  }

  h2.ui.header {
    font-family: 'Poppins';
    font-weight: Bold;
    font-size: 30px;
  }

  .ui.button {
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
  }

  @media screen and (max-width: 770px) {
    .ui.grid > .row > .column {
      width: 100% !important;
    }

    .ui.grid > .row > .column:first-child {
      margin-bottom: 20px;
    }

    .ui.form .fields {
      margin-bottom: 15px !important;
    }
  }
`;

function CallToAction() {
  return (
    <ContactSection>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Have More Questions?</Header>
              <Header as="h2">Speak to Our Sales Team</Header>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Group unstackable widths={2}>
                  <Form.Input placeholder="First name" />
                  <Form.Input placeholder="Last name" />
                </Form.Group>
                <Form.Input placeholder="Email" />
                <Form.Input placeholder="Company Name" />
                <Form.Input placeholder="Phone Number" />
                <Button className="primary-button fullscreen-btn" type="submit">
                  SUBMIT
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </ContactSection>
  );
}

export default CallToAction;
