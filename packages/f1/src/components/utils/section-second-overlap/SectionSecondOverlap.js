import React,{ forwardRef } from "react";
import { connect, styled } from "frontity";
import OpenImage from "../open_image/OpenImage";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";


const SectionSecondOverlap = forwardRef((props, ref) => {
  const { data, customClass } = props; 
  console.log(data);
  const topTitle = data.filter((fields)=>{
    if(fields.top_title){
      return fields.top_title;
    } 
  })
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
  const aboutImage = data.filter((fields)=>{
    if(fields.about_image){
      return fields.about_image;
    } 
  })

  console.log(aboutImage);

  return (
    <SecondContainer>
      <section
      
      id="section-second"
      className={customClass ? `${customClass} margin-b` : "margin-b"}
    >

<div className="container ">
        <div className="row justify-content-between flex-lg-row flex-column-reverse">
          <div className="col-12 col-lg-5 d-flex align-items-center ">
            <div class="text-wrap">
            {
              topTitle.length>0 ? (
              topTitle.map((element)=>{
                return(
                  <RevealTitle tag="h5" title={element.top_title} customClass="heading colorize-text" />
                )
              })

              ):null
            }

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
            </div>
            
            </div>
          <div className="col-12 col-lg-6">
            <div className="img-wrap d-flex justify-content-end">
             
                      
              {
             
             aboutImage.map((element,index)=>{
              if(index==1){
                return(
                  <div className="img-small">
                  <OpenImage
                 imageId={element.about_image}
                  customClass="right"
                  />
                  </div>
                 )
              } 
              else{
                return(
                  <div className="img-large d-flex">
                  <OpenImage
                 imageId={element.about_image}
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
    </SecondContainer>
    
  );
}
);

export default SectionSecondOverlap;

const SecondContainer=styled.section`
#section-second {
  padding-top: 50px;
}
#section-second .text-wrap .heading {
    margin-bottom: 10px;
}

#section-second .text-wrap .heading .split-child {
  color: red;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.img-wrap {
  position: relative;
  margin-bottom: 80px;
}
.img-wrap .img-large {
  width: 80%;
}
.img-wrap .img-small {
  max-width: 380px;
  width: 50%;
  position: absolute;
  bottom: -24px;
  left: 0;
}

.about-page .text-wrap h2 {
      font-size: 2.25rem;
}

@media (min-width: 768px) {
  #section-second .img-wrap .img-large {
        justify-content: flex-end;
  }
  #section-second .img-wrap .img-large img {
          width: 100%;
  }
    
}

@media (min-width: 992px) {
  #section-second .text-wrap {
      margin-bottom: 0;
  }
   #section-second .text-wrap .heading {
        margin-bottom: 30px;
    }

    .img-wrap {
      margin-bottom: 0;
    }

    .img-wrap .img-small {
        left: -50px;
        width: 70%;
        bottom: -44px;
    }
  
}

@media (min-width: 1200px) {
  #section-second .img-wrap .img-large {
        width: 100%;
  }
  #section-second .img-wrap .img-large .img-small {
        left: -40px;
        width: 100%;
        bottom: -44px;
  }
}
`;