import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import OpenImage from "../utils/open_image/OpenImage";
import RevealText from "../utils/reveal-text/RevealText";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import Button from "../utils/button/Button";
 
// simplest form (only email)


const CooperationSection = ({ state,data }) => {
  // const options = state.source.get("acf-options-page");
  
 
  const title = data.filter((fields)=>{
    if(fields.title){
      return fields.title;
    } 
  })
  const paragraph = data.filter((fields)=>{
    if(fields.paragraph){
      return fields.paragraph;
    } 
  })
  const image = data.filter((fields)=>{
    if(fields.image){
      return fields.image;
    } 
  })

  const links = data.filter((fields)=>{
    if(fields.link){
      return fields.link;
    } 
  })
  const linksTitle = data.filter((fields)=>{
    if(fields.linktitle){
      return fields.linktitle;
    } 
  })
 

  return (
    <>
       <Section id="section-services" className="margin-b">
       <div className="container">
        <div className="row justify-content-between flex-lg-row flex-column-reverse">
          <div className="col-12 col-lg-5 pb-3 d-flex align-items-center ">
            <div className="text-wrap">
            {
             
             title.map((element)=>{
               return(
                 <RevealTitle tag="h2" title={element.title} />
               )
             })

           
           }
           
           {
            
            paragraph.map((element)=>{
              return(
               <RevealText tag="p" text={element.paragraph} />
              )
            })

          
          }

          {
            
            links.map((element,index)=>{
              return(
                <a href={element.link}>
                <Button name="btn" label={linksTitle[index].linktitle} animate="true" />
              </a>
              )
            })

          
          }
              
              
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="img-wrap">
            {
             
             image.map((element,index)=>{
              return(
               
                <OpenImage
               imageId={element.image}
                customClass="left"
                />
               
               )
             })
            }
              
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(CooperationSection);

const Section = styled.section`   
  overflow: hidden;

p {
		margin-bottom: 40px;
}
	.img-wrap {
		width: 100%;
	}


@media (min-width: 992px) {
	.img-wrap {
			width: 50vw;
		}
	
}
 
`;
