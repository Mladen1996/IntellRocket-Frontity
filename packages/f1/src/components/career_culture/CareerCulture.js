import React, { useState } from "react";
import { connect, styled } from "frontity";
import Image from "../image";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";

function CareerCulture({data}) {
  const animateCard = () => {
    gsap.to(".info-card", {
      duration: 0.7,
      opacity: 1,
      stagger: 0.15,
    });
  };
  const title = data.filter((fields)=>{
    if(fields.section_ctitle){
      return fields.section_ctitle;
    } 
  })
  const paragraph = data.filter((fields)=>{
    if(fields.section_cparagraph){
      return fields.section_cparagraph;
    } 
  })

  const titles = data.filter((fields)=>{
    if(fields.title){
      return fields.title;
    } 
  })

  const images = data.filter((fields)=>{
    if(fields.section_image){
      return fields.section_image;
    } 
  })
  const sectionParagraph = data.filter((fields)=>{
    if(fields.section_paragraph){
      return fields.section_paragraph;
    } 
  })

  return (
    <CarrerContainer>
      <section id="career-culture" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-wrap">
            {
             
             title.map((element)=>{
               return(
                <h2>{element.section_ctitle}</h2>
               )
             })

           
           }

          {
             
             paragraph.map((element)=>{
               return(
                <p>
              {data[1].section_cparagraph}
              </p>
               )
             })

           
           }
            
             
            </div>
          </div>
        </div>
        <div className="row">
        {
             
             titles.map((element,index)=>{
               return(
                <Waypoint bottomOffset="200px" onEnter={() => animateCard()}>
                <div className="col-12 col-sm-6  col-xl-4 mb-4">
                  <div className="info-card card-culture d-flex flex-column align-items-center">
                    <Image imageId={images[index].section_image} />
                    <h4>{element.title}</h4>
                    <p className="info-text">{sectionParagraph[index].section_paragraph}</p>
                  </div>
                </div>
              </Waypoint>
               )
             })

           
           }
        </div>
      </div>
    </section>
    </CarrerContainer>
    
  );
}

export default CareerCulture;

const CarrerContainer=styled.div`
#career-culture {
  text-align: center;
}
#career-culture  .text-wrap {
    margin-bottom: 40px;
  }

@media (min-width: 992px) {
  #career-culture .text-wrap {
      margin-bottom: 80px;
    }
  
}

.info-card {
  height: 100%;
  padding: 60px 30px;
  opacity: 0;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.07);
}
  .info-card .card-culture img {
      margin-bottom: 30px;
  }

  .info-card img {
    width: min-content;
    margin-bottom: 55px;
  }
  .info-card h4 {
    margin-bottom: 30px;
    text-transform: unset;
    font-size: 1.5rem;
  }
  .info-card .info-text {
    text-align: center;
  }

`;


