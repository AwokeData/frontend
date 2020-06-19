import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const IntroMissionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  padding: 0;
  height: 65vh !important;

  text-align: left;

  height: 100vh;
  width: 100%;
  text-align: left;

  h2 {
    font-size: 40px;
  }

  h3 {
    text-transform: capitalize;
  }

  .left {
    align-self: center;
    margin-bottom: 30px;
    width: 85%;

    p {
      margin: 0;
      font-size: 18px;
    }

    .ui.input {
      margin-top: 20px;
      height: 48px;
      border: 1px solid darkgray;
      border-radius: 5px;
      width: 50% !important;
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
    }
  }
  .right {
    align-self: center;
  }

  .button {
    margin: 20px 0;
  }

  @media screen and (max-width: 850px) {
    padding: 30px;
    margin: 30px 0;

    .flex-box {
      flex-direction: column-reverse;
    }
    .fullscreen-btn {
      display: none;
    }

    .left {
      width: 100%;

      .ui.input {
        width: 100% !important;
      }
    }
  }

  @media screen and (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: left;
  padding-left: 60px;

  li {
    cursor: pointer;
    position: relative;
  }

  li:before {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    background-image: url(${process.env.PUBLIC_URL + '/imgs/list-icon.png'});
    background-size: cover;
    background-position: center;
    left: -50px;
    top: 25%;
    transform: translateY(-50%);
  }

  h6 {
    margin-bottom: 10px;
    line-height: 1.2;
    font-family: 'Poppins';
    font-size: 20px;
  }

  p {
    font-family: 'Poppins';
  }

  @media screen and (max-width: 850px) {
    padding-left: 45px;
  }
`;

const Mission = () => (
  <IntroMissionSection className="mission">
    <div className="flex-box container">
      <div className="item left">
        <h3>What we offer</h3>
        <p>Still underwriting your borrowers with W2s and paystubs?</p>
        <p>Modernize your business with advanced analytics on your</p>
        <p>client’s payment behavior.</p>
        <Form>
          <Form.Input placeholder="Your Email" />
          <Button className="primary-button fullscreen-btn" type="submit">
            SUBMIT
          </Button>
        </Form>
      </div>
      <div className="item right">
        <StyledList>
          <li>
            <h6>Borrower Behavioral Analysis</h6>
            <p>
              Analyze your borrower’s payment history to predict their
              creditworthiness.
            </p>
          </li>
          <li>
            <h6>Seamless Integration</h6>
            <p>
              We stay behind the scenes, so you can build the client
              relationship directly
            </p>
          </li>
          <li>
            <h6>Stochastic Simulations</h6>
            <p>
              Model a borrower’s behavior against your loan terms, giving you
              confidence in your underwrite
            </p>
          </li>
        </StyledList>
      </div>
    </div>
  </IntroMissionSection>
);

export default Mission;
