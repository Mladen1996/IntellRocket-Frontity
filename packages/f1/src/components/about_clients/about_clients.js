import React from "react";
import { connect, styled } from "frontity";
import RevealSingleLine from "../utils/reveal-single-line/RevealSingleLine";
import RevealText from "../utils/reveal-text/RevealText";
import TestimonialCard from "./TestimonialCard";
import Image from "../image";

function AboutClients({ data}) {
  const title = data.filter((fields)=>{
    if(fields.clients_title){
      return fields.clients_title;
    } 
  })
  const paragraph = data.filter((fields)=>{
    if(fields.clients_paragraph){
      return fields.clients_paragraph;
    } 
  })  

  const testimonials = data.filter((fields)=>{
    if(fields.client_testemonial){
      return fields.client_testemonial;
    } 
  }) 

  const logos = data.filter((fields)=>{
    if(fields.logo){
      return fields.logo;
    } 
  })

  const linklogos = data.filter((fields)=>{
    if(fields.linklogo){
      return fields.linklogo;
    } 
  })



  return (
      <ClientsContainer>
         <section id="about-clients" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
          {
             
             title.map((element)=>{
               return(
                <RevealSingleLine tag="h3" text={element.clients_title} />
               )
             })

           
           }
           
           {
            
            paragraph.map((element)=>{
              return(
               <RevealText tag="p" text={element.clients_paragraph} />
              )
            })

          
          }
            
          </div>

          {
            
            testimonials.map((element)=>{
              console.log(element);
              return(
                <TestimonialCard item={element}  />
              )
            })

          
          }

          {
            
            logos.map((element,index)=>{
              return(
                <div class="col-md-2 client">
                <a href={linklogos[index].linklogo}>
                <Image imageId={element.logo}/>
                </a>
               
            </div>
              )
            })

          
          }
         
      

          
            
        </div>
       
      </div>
    </section>
      </ClientsContainer>
    
  );
}

export default AboutClients;

const ClientsContainer=styled.section`
#about-clients .overflow {
      text-align: center;
}
#about-clients .reveal-text {
      text-align: center;
      margin-bottom: 80px;
    }
    #about-clients .testimonial-card {
      position: relative;
      padding: 25px;
      box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.07);
    }
  
      #about-clients .person-image {
        position: relative;
        width: 70px;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 10px;
      }
      #about-clients  .info-wrap {
        flex-direction: column;

      }
  
      #about-clients  .info-wrap .info {
          margin-bottom: 10px;
      }
      #about-clients  .info-wrap .info .name {
            margin-bottom: 0;
            font-size: 1.125rem;
          }
    #about-clients  .info-wrap .info .role {
            color: var(--text-primary);
          }
      
          #about-clients .rating {
        display: flex;
        justify-content: flex-end;
      }
  
      #about-clients .testimonial {
        font-style: italic;
        font-size: 1.25rem;
    }
   
  
  @media (min-width: 768px) {
    #about-clients .testimonial-card  .content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
    }
    #about-clients .testimonial-card    .person-image {
          position: absolute;
          top: -42px;
          left: -22px;
        }
        #about-clients .testimonial-card   .info-wrap {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        #about-clients .testimonial-card   .info-wrap .info {
            margin-bottom: 0;
          }
        
        #about-clients .testimonial-card .rating {
          align-self: initial;
        }
    
  }
  
  @media (min-width: 992px) {
    #about-clients .testimonial-card {
        padding: 40px;
      }

    }
  
`;