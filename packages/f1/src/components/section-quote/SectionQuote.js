import React from "react";
import { connect, styled } from "frontity";
import Button from "../utils/button/Button";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import Background from "./section-quote-bg-img.jpg";

const SectionQuote = () => {
  return (
    <QuoteContainer>
        <section id="section-quote">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h3" title="Let’s Make Something Beautiful Together" />
          </div>
          <div className="col-12 col-lg-3">
            <a href="#">
              <Button name="btn" label="Get a Quote" animate="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </QuoteContainer>
    
  );
};

export default SectionQuote;

const QuoteContainer=styled.div`
#section-quote {
    background: url(${Background}) center center no-repeat;
    background-size: cover;
    padding: 100px 0;
    margin-bottom: 60px;
}
#section-quote .reveal-title {
      margin-bottom: 20px;
      color: #fff;
}

#section-quote .reveal-title .split-child {
        color: #fff;
      }

  @media (min-width: 992px) {
    #section-quote {
      margin-bottom: 120px;
    }
    #section-quote h3 {
        margin-bottom: 0;
      }
    
  }
`;