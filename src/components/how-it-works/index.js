import React from 'react';
import styled from 'styled-components';
import { Container, Header } from 'semantic-ui-react';

import CallToAction from '../call-to-action';

const HowItWorksSection = styled.div`
  .background {
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 292px;
    background-color: #fee6d4;
  }
  margin-top: -70px;
  background-image: url(${process.env.PUBLIC_URL + '/imgs/how-blob.png'});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 1700px) {
    background-position: 0% 5%;
  }
  @media screen and (max-width: 1600px) {
    background-position: 0% 1%;
  }
  @media screen and (max-width: 1500px) {
    background-position: 0% 5%;
  }
  @media screen and (max-width: 1200px) {
    background-position: 0% 8%;
  }
  @media screen and (max-width: 1000px) {
    background-position: 0% 10%;
  }
`;

const HowItWorksSectionTitle = styled.section`
  .title {
    height: 400px;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 65px !important;
    text-align: left;
  }

  @media screen and (max-width: 700px) {
    .title {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-size: 45px !important;
    }
  }
`;

const HowItWorksSectionContent = styled.section`
  text-align: left;
  max-width: 900px;
  margin: auto;

  .flex-box {
    justify-content: space-around;
    align-items: center;
    margin: 40px 80px 40px 0;

    &.flip {
      text-align: right;
      margin: 40px 0 40px 80px;
    }
  }

  .item {
    padding: 20px;
  }

  .step-header {
    font-size: 24px;
    margin: 0;
    line-height: 2;
  }

  .how-circle {
    width: 150px;
    height: 150px;
    background-image: url(${process.env.PUBLIC_URL + '/imgs/how-circle.png'});
    background-position: center;
    background-size: contain;
  }

  @media screen and (max-width: 900px) {
    .step-header {
      font-size: 1.75em;
    }
    .flex-box,
    .flex-box.flip {
      margin: 40px auto;
      justify-content: start;
    }
  }
  @media screen and (max-width: 600px) {
    .flex-box {
      flex-wrap: wrap;
      &.flip {
        flex-wrap: wrap-reverse;
      }
    }

    .item {
      flex-basis: 100%;
      text-align: center;

      .how-circle {
        margin: auto;
      }
    }
  }
`;

const HowItWorks = () => (
  <HowItWorksSection>
    <div className="background"></div>
    <Container>
      <HowItWorksSectionTitle>
        <div className="title">
          <Header as="h1">How It Works</Header>
        </div>
      </HowItWorksSectionTitle>
      <HowItWorksSectionContent>
        <div className="flex-box">
          <div className="item left">
            <div className="how-circle"></div>
          </div>
          <div className="item right">
            <h3 className="step-header">Step 1</h3>
            <p>
              Generate and send a unique link to your borrower/client to get
              their approval.
            </p>
          </div>
        </div>
        <div className="flex-box flip">
          <div className="item left">
            <h3 className="step-header">Step 2</h3>
            <p>
              Your borrower/client logs into their normal accounts, fully
              encrypted. <br />
              We don’t see or keep the password and usernames.
            </p>
          </div>
          <div className="item right">
            <div className="how-circle"></div>
          </div>
        </div>
        <div className="flex-box">
          <div className="item left">
            <div className="how-circle"></div>
          </div>
          <div className="item right">
            <h3 className="step-header">Step 3</h3>
            <p>
              The raw data enters our platform, and we give you the results.
            </p>
          </div>
        </div>
        <div className="flex-box flip">
          <div className="item left">
            <h3 className="step-header">Step 4</h3>
            <p>
              Link our API with your internal underwriting systems, or manually
              observe and customize your dashboards.{' '}
            </p>
          </div>
          <div className="item right">
            <div className="how-circle"></div>
          </div>
        </div>
      </HowItWorksSectionContent>
    </Container>
    <CallToAction />
  </HowItWorksSection>
);

export default HowItWorks;
