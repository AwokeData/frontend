import React from 'react';
import styled from 'styled-components';

const IntroMissionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  padding: 0;
  height: 70vh !important;

  text-align: left;

  height: 100vh;
  width: 100%;
  text-align: left;

  h2 {
    font-size: 42px;
  }

  h3 {
    text-transform: capitalize;
  }

  .left {
    align-self: center;
    margin-bottom: 30px;
    margin-right: 10%;
  }
  .right {
    align-self: center;
  }

  .button {
    margin: 20px 0;
  }

  @media screen and (max-width: 850px) {
    padding-left: 30px;
    padding-right: 30px;

    .flex-box {
      flex-direction: column-reverse;
    }
    .fullscreen-btn {
      display: none;
    }

    .left {
      margin: -20px 0 0;
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
  }
  @media screen and (max-width: 850px) {
    padding-left: 45px;
  }
`;

const Mission = () => (
  <IntroMissionSection className="mission">
    <div className="flex-box container">
      <div className="item left">
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
      <div className="item right">
        <h3>What we offer</h3>
        <p>
          Still underwriting your borrowers with W2s and paystubs? Modernize
          your business with advanced analytics on your client’s payment
          behavior.
        </p>
      </div>
    </div>
  </IntroMissionSection>
);

export default Mission;
