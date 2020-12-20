import React,{useState} from "react";
import { connect, styled } from "frontity";
import Image from "../image";
import RevealText from "../utils/reveal-text/RevealText";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import { Waypoint } from "react-waypoint";

function ServiceList({ data}) {

  const titles = data.filter((fields)=>{
    if(fields.title){
      return fields.title;
    } 
  }) 

  const paragraphs = data.filter((fields)=>{
    if(fields.section_paragraph){
      return fields.section_paragraph;
    } 
  }) 

  const images = data.filter((fields)=>{
    if(fields.section_image){
      return fields.section_image;
    } 
  }) 

  const [isVisible, setIsVisible] = useState(false);

    
  return (
    <MyContainer>
        <section id="service-list">
      <div className="container">
        <div className="row">
          {
            titles.map((element,index)=>{
              console.log(element);
              return(
                <section id="section-list-item" className="col-12">
                <div className="row">
                  <div className="col-12 col-md-6 margin-b">
                    <Waypoint bottomOffset="150px" onEnter={() => setIsVisible(true)}>
                      <Image imageId={images[index].section_image} className={isVisible ? "show" : "hidden"} />
                    </Waypoint>
                  </div>
                  <div className="col-12 col-md-6  margin-b align-self-center">
                    <div className="services-list-item ">
                      <RevealTitle tag="h2" title={element.title} />
                      <p dangerouslySetInnerHTML={{__html: paragraphs[index].section_paragraph}}></p>
                      
                    </div>
                  </div>
                </div>
              </section>
              )
            })
          }
            
        
        </div>
      </div>
    </section>
    </MyContainer>
    
  );
}

export default ServiceList;


const MyContainer=styled.div`
#service-list ul {
    list-style: disc;
    padding-inline-start: 30px;
}
#service-list ul li {
      color: #595959;
    }
section#section-list-item:nth-of-type(2) .row {
        flex-direction: row-reverse;
      }
   
#services-list .services-list-item {
    box-sizing: border-box;
}
#services-list .services-list-item .list {
      margin-top: 20px;
}
#services-list .services-list-item .overflow {
      overflow: hidden;
      margin-bottom: 30px;
}
#services-list .services-list-item .overflow h2 {
        margin-bottom: 0;
}
#services-list .services-list-item .overflow .text-slide-in {
        animation-delay: 0;
}
  
strong{
  font-weight:400!important
}
`;