import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";

 
// simplest form (only email)


const HomeDev = ({ state,homepage }) => {
  // const options = state.source.get("acf-options-page");
 
      
      const title = homepage.home_dev.filter((fields)=>{
        if(fields.title){
          return fields.title;
        } 
      })
      const paragraphs = homepage.home_dev.filter((fields)=>{
      if(fields.paragraph){
        return fields.paragraph;
      } 
      })
      const links = homepage.home_dev.filter((fields)=>{
      if(fields.links){
      return fields.links;
      } 
      })

      
  return (
    <CardContainer>

        <section id="section-offer" className="margin-b">
      <div className="container">
        <div className="row">
       
            
           {title.map((element, i) => {
               const lk=`${links[i].links}`;
              const desc=paragraphs[i].paragraph;
              console.log(desc)
            return (
              
        <div id="card-offer" className="col-12 col-md-4">
        <RevealTitle tag="span" title={i+1} customClass="colorize-text" />
      <RevealTitle tag="h3" title={element.title} />
      <RevealText tag="p" text="Simple. Fast. Reliable. Take your business to
the top with a riveting presentation and
impeccable performance." />
      <div class="d-flex flex-column list-item" dangerouslySetInnerHTML={{__html: lk}} />
    </div>
    
               
            )
            


            
                })} 
    
        </div>
      </div>
    </section>
    </CardContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(HomeDev);

const CardContainer=styled.div`
width:100%;
#card-offer .list-item strong{
  display: block;
  transform: translateY(100%);
  text-transform: uppercase;
  font-size: .75rem;
  color:#595959;
  line-height: 1.8;
  font-weight:400;
}
#card-offer:not(:last-of-type) {
      margin-bottom: 20px;
}
#card-offer> span {
      color: #ff6863;
    }
    #card-offer    p {
      margin-bottom: 0px;
    }
  
  @media (min-width: 768px) {
    #card-offer:nth-of-type(2) {
        margin-top: 70px;
      }
      #card-offer:nth-of-type(3) {
        margin-top: 140px;
      }
    }

`;