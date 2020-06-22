import React from 'react';
import styled from 'styled-components';

const IntroductionWrapper = styled.section`
  height: calc(50vh);
  width: 100vw;
  position: relative;
  padding: 0;
  background-image: url(${process.env.PUBLIC_URL + '/imgs/slant-bg.png'});
  background-repeat: no-repeat;
  background-size: cover;

  .main-img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45vw;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .flex-box {
    align-items: center;
    flex-direction: row-reverse;
    height: 100%;
    margin: auto;
  }

  h2 {
    text-transform: capitalize;
  }

  .left {
    text-align: left;
    color: $primary-blue;
  }

  .right {
    img {
      width: 100%;
    }
    flex-basis: 50%;
  }

  @media screen and (max-width: 900px) {
    .item.left {
      flex-basis: 60%;
    }
    .item.right {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 0;

    .flex-box {
      display: block !important;
    }

    .item {
      margin: 0;
    }

    .item.right {
      margin: auto;

      img {
        max-width: 300px;
        margin-top: 50px;
      }
    }

    .item.left {
      text-align: center;
    }
  }

  @media screen and (max-width: 320px) {
    padding-top: calc(50vh - 200px);

    img {
      display: none;
    }
  }
`;

// TODO: FIX BLOB LATER

const Intro = () => (
  <IntroductionWrapper>
    <img
      className="main-img"
      src={process.env.PUBLIC_URL + '/imgs/aboutinfo.png'}
      alt="astronaunt floating in space"
    />
    <div className="flex-box two-items container">
      <div className="item right">
        <div></div>
      </div>
      <div className="item left">
        <h2>About Us</h2>
      </div>
    </div>
  </IntroductionWrapper>
);

export default Intro;
