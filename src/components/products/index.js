import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import CallToAction from '../call-to-action';

const ProductWrapper = styled.div`
  position: relative;

  .triangle-img {
    position: absolute;
    margin-top: -60px;
    left: 4%;
    width: 100px;
    height: 100px;
    background-image: url(${process.env.PUBLIC_URL +
    '/imgs/product-triangle.png'});
    background-position: center;
    background-size: cover;
    opacity: 0.8;
    z-index: 2;
    display: block;
  }
`;

const ProductSectionTitle = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -75px;
  background-color: #eff9fb;
  z-index: 1;
  min-height: 80vh;

  .circle-img {
    position: absolute;
    top: -250px;
    left: -300px;
    width: 600px;
    height: 600px;
    background-image: url(${process.env.PUBLIC_URL +
    '/iimgs/product-circle.png'});
    background-position: center;
    background-size: cover;
    opacity: 0.8;
    z-index: -1;
  }

  .hero-right-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 650px;
    height: 666px;
    background-image: url(${process.env.PUBLIC_URL +
    '/imgs/product-right.png'});
    background-position: center;
    background-size: cover;
    opacity: 0.8;
    z-index: -1;
  }

  .flex-box {
    align-items: center;
    margin: 70px auto 0;
    width: 100%;
  }

  .item.right {
    flex-basis: 30%;

    img {
      width: 100%;
    }
  }

  h2 {
    font-size: 45px;
    text-align: left;
    z-index: 2;
  }

  @media screen and (max-width: 1020px) {
    h2 {
      font-size: 3em;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 750px) {
    text-align: center;

    .flex-box {
      flex-wrap: wrap;
      margin-top: 50px;
    }

    .item {
      flex-basis: 100% !important;
      margin: 10px 0 !important;
    }

    .hero-right-img {
      display: none;
    }

    h2 {
      font-size: 30px;
    }
  }
`;

const ProductSectionContent = styled.section`
  text-align: center;
  margin: auto;

  .flex-box {
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }

  .item {
    padding: 30px;
    border-radius: 10px;
    flex-grow: 1;
    background-color: white;

    flex: 1 0 80px;
    margin: 15px;
    padding: 30px;

    box-shadow: -2px 18px 27px -19px rgba(107, 107, 107, 1);

    h3 {
      font-size: 28px;
      font-weight: bold;
      line-height: 1.2;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }

  .leftg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 245px;
    background-image: url(${process.env.PUBLIC_URL +
    '/imgs/product-leftg.png'});
    background-position: center;
    background-size: contain;
    z-index: -1;
    transform: translate(-40%, -25%);
  }

  .rightg-img {
    position: absolute;
    width: 230px;
    height: 245px;
    background-position: center;
    background-size: contain;
    z-index: -1;
    transform: translate(40%, 25%);
    background-image: url(${process.env.PUBLIC_URL +
    '/imgs/product-rightg.png'});
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: 800px) {
    .flex-box {
      flex-wrap: wrap;
    }

    .item {
      flex-basis: 100%;
      text-align: center;
      img {
        max-width: 300px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .item h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }

    .leftg-img,
    .rightg-img {
      display: none;
    }
  }
`;

const Product = () => (
  <ProductWrapper id="product">
    <ProductSectionTitle>
      <div className="circle-img"></div>
      <div className="hero-right-img"></div>
      <div className="container">
        <div className="flex-box two-items container">
          <div className="item left">
            <h2>
              Modernizing the underwriting formula, by understanding velocity
              and volatility.
            </h2>
          </div>
          <div className="item right"></div>
        </div>
      </div>
    </ProductSectionTitle>
    <div className="triangle-img"></div>
    <ProductSectionContent>
      <div className="container">
        <h3>Our Products</h3>
        <div className="flex-box">
          <div className="leftg-img"></div>
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + '/imgs/temp.png'}
              alt="temporary img"
            />
            <h3>Account Analytics</h3>
            <p>
              Whether you integrate our API into your business ecosystem, or use
              our interface to face your client, our onboarding team is here for
              you.
            </p>
            <Button className="primary-button fullscreen-btn">Submit</Button>
          </div>
          <div className="item">
            <div className="rightg-img"></div>
            <img
              src={process.env.PUBLIC_URL + '/imgs/temp.png'}
              alt="temporary img"
            />
            <h3>Simulations & Scenarios</h3>
            <p>
              Loan simulations, stochastic stresses, and machine learning. We
              learn your borrower’s behavior and provide you the limits of their
              payment probability.
            </p>
            <Button className="primary-button fullscreen-btn">Submit</Button>
          </div>
          <div className="rightg-img"></div>
        </div>
      </div>
    </ProductSectionContent>
    <CallToAction />
  </ProductWrapper>
);

export default Product;
