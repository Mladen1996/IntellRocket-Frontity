import React from "react";
import { connect, styled } from "frontity";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";


import OpenImage from "../open_image/OpenImage";

function SharedSectionHero({ data,customClass}) {
    
 /* const rotString=data[4].rotating_text;
  const rotText=rotString.split(".");
  console.log(rotText);*/
    
  const title = data.filter((fields)=>{
    if(fields.title){
      return fields.title;
    } 
  })
  const paragraph = data.filter((fields)=>{
    if(fields.section_paragraph){
      return fields.section_paragraph;
    } 
  })
  const sectionImage = data.filter((fields)=>{
    if(fields.section_image){
      return fields.section_image;
    } 
  })

  return (
    <SectionHero>
      <section id="shared-hero" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mb-lg-5">
          {
             
             title.map((element)=>{
               return(
                 <RevealTitle tag="h1" title={element.title} customClass={customClass}/>
               )
             })

           
           }
           
           {
            
            paragraph.map((element)=>{
              return(
               <RevealText tag="p" text={element.section_paragraph} />
              )
            })

          
          }
            
          </div>
          <div className="col-12 col-lg-12 ">
            <div className="img-wrap">
            {
             
             sectionImage.map((element,index)=>{
              if(index==1){
                return(
                  <div className="img-small">
                  <OpenImage
                 imageId={element.section_image}
                  customClass="right"
                  />
                  </div>
                 )
              } 
              else{
                return(
                  <div className="img-large d-flex">
                  <OpenImage
                 imageId={element.section_image}
                  customClass="right"
                  />
                  </div>
                 )
              }
             
             })

           
           }
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </SectionHero>
    
  );
}

export default SharedSectionHero;


const SectionHero=styled.div`
#shared-hero {
  padding-top: 60px;
}
  #shared-hero .rotate-title .rotate-career .split-parent:nth-of-type(2) {
        float: unset;
  }
  #shared-hero .rotate-title .rotate-career .split-parent:nth-of-type(2) .rotate-text span {
            margin-left: 0;
          }
  #shared-hero .rotate-text {
            position: relative;
            height: 65px;

  }
  #shared-hero .rotate-text span {
              visibility: hidden;
              font-size: 2.25rem;
              line-height: 1.3;
              color: #ff4746;
              background: var(--accent-color);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              position: absolute;
              top: 0;
              left: 0;
              transform: translateY(0);
 }
  
 #shared-hero img {
  margin-right: 0;
}
#shared-hero .row {
  flex-direction: column-reverse;
}

#shared-hero .img-wrap {
  position: relative;
  margin-bottom: 30px;
}
#shared-hero .img-wrap .img-small {
    display: none;
}

@media (min-width: 576px) {
  #shared-hero {
    padding-top: 90px;
  }
  #shared-hero .rotate-title .split-parent:nth-of-type(2) {
        float: left;
        width:100%;
  }
  #shared-hero .rotate-title .rotate-text span {
          margin-left: 10px;
  }

  @media (min-width: 768px) {
    #shared-hero {
     /* padding-top: 140px;*/
    }
    #shared-hero .rotate-text span {
          font-size: 3.25rem;
        }    
}

@media (min-width: 992px) {
  #shared-hero {
    /*padding-top: 220px;*/
  }
   #shared-hero .row {
      flex-direction: column;
  }

  #shared-hero .img-wrap {
      margin-bottom: 0;
      height: 580px;
  }
  #shared-hero .img-wrap .img-large {
        width: 55%;
        position: absolute;
        top: 0;
        right: 0;
      }
  #shared-hero .img-wrap .img-small {
        display: block;
        position: absolute;
        bottom: -24px;
        width: 55%;
        left: 0;
        bottom: -20px;
  }
  
}

@media (min-width: 1200px) {
  #shared-hero .img-wrap {
      height: 800px;
  }
  #shared-hero .img-wrap .img-large {
        width: 58%;
      }
  #shared-hero .img-wrap .img-small {
        width: 58%;
        bottom: 0;
  }
 
}
`;