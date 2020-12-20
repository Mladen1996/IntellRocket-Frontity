import React, { useState } from "react";
import { connect, styled } from "frontity";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import OpenImage from "../utils/open_image/OpenImage";

function WorkList({data}) {

  const [isImgVisible, setIsImgVisible] = useState(false);

  return (
    <WorkContainer>
        <section id="work-list" className="margin-b">
      <div className="container ">
        <div className="row">
           
        {data.map((item, i) => {
            return (
              <div key={i} className="col-12 col-md-6 img-wrap ">
               
                  <OpenImage
                    setIsImgVisible={setIsImgVisible}
                    isWorkList="true"
                    imageId={item.featured_media}
                    customClass="right"
                    title={item.title}
                  />
                  {isImgVisible ? (
                    <>
                      <RevealTitle tag="h2" title={item.title.rendered} customClass="split-title" />
                      <RevealText tag="p" text="Strategy, Web design, Wordpress" />
                    </>
                  ) : null}
              </div>
            )
          })
          }
         
          
        </div>
      </div>
    </section>
    </WorkContainer>
    
  );
}

export default WorkList;

const WorkContainer=styled.div`
#work-list {
    padding-top: 170px;
}

#work-list .text-wrap {
      padding-bottom: 160px;
      text-align: center;
}
#work-list .img-wrap {
      margin-bottom: 60px;
}
#work-list .img-wrap:hover .split-title::after {
            transform: scaleX(1);
            transform-origin: left center;
            transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
}
        
  
#work-list .img-wrap h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
      #work-list .img-wrap figure {
        margin-bottom: 30px;
      }
      #work-list .img-wrap .overflow {
        margin-bottom: 10px;
      }
      #work-list .img-wrap .overflow  h4 {
          display: inline-block;
          text-transform: initial;
          font-size: 1.5rem;
          margin-bottom: 0;
      }
      #work-list .img-wrap .overflow  h4 .underline ::after {
              height: 2px;
            }
     
`;