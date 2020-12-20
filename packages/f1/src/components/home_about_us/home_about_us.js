import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Image from "../image";

 
// simplest form (only email)


const HomeAboutUs = ({ state,homepage }) => {
  // const options = state.source.get("acf-options-page");
  
 
  const HomeAboutUsData = homepage.home_about_us.map((fields, index) => {
    return fields;
  })


  return (
    <>
       <Section
      
      id="section-second"
      className="margin-b">
    
      <div className="container ">
        <div className="row justify-content-between flex-lg-row flex-column-reverse">
          <div className="col-12 col-lg-5 d-flex align-items-center ">
            <div className="text-wrap">
              <h2>{HomeAboutUsData[0].title}</h2>
                <p>{HomeAboutUsData[1].paragraph}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="img-wrap d-flex justify-content-end">
              <div className="img-large d-flex">
              <Image imageId={HomeAboutUsData[4].about_image}/>
              </div>
              <div className="img-small">
              <Image imageId={HomeAboutUsData[5].about_image}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(HomeAboutUs);

const Section = styled.section`   
padding-top: 50px;
  .text-wrap .heading {
      margin-bottom: 10px;
  }


  .img-wrap {
    position: relative;
    margin-bottom: 80px;

    .img-large {
      width: 80%;
    }
    .img-small {
      max-width: 380px;
      width: 50%;
      position: absolute;
      bottom: -24px;
      left: 0;
    }
  


 
`;
