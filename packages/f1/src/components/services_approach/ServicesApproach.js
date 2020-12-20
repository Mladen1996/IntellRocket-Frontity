import React from "react";
import { connect, styled } from "frontity";
import RevealText from "../utils/reveal-text/RevealText";
import RevealTitle from "../utils/reveal-title/RevealTitle";


function ServiceApproach({ data}) {
    
  const titles = data.filter((fields)=>{
    if(fields.title){
      return fields.title;
    } 
  }) 

  const paragraphs = data.filter((fields)=>{
    if(fields.paragraph){
      return fields.paragraph;
    } 
  })

    
  return (
    <MyContainer>
        <section id="service-approach">
      <div className="container">
        <div className="row">
        {
          titles.map((element,index)=>{
            return(
              <div className="col-md-6 offset-md-3">
              <div className="list-item mb-5">
                <RevealTitle tag="h3" title={element.title} />
                <RevealText tag="p" text={paragraphs[index].paragraph} borderBottom="true" />
              </div>
            </div>
            )
           
            
          })
        }
        
        
       
        
        </div>
      </div>
    </section>
    </MyContainer>
    
  );
}

export default ServiceApproach;


const MyContainer=styled.div`
#service-approach {
  margin-bottom: 100px;
}
#service-approach .list-item h3 {
      font-size: 1.25rem;
}
#service-approach .list-item .reveal-text {
      margin-bottom: 10px;
    }
  

@media (min-width: 992px) {
  #service-approach {
    margin-bottom: 180px;
  }
}
`;