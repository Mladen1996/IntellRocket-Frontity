import React, { useRef, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import RevealText from "../utils/reveal-text/RevealText";
import RevealSingleLine from "../utils/reveal-single-line/RevealSingleLine";
import Button from "../utils/button/Button";
import { gsap, Back } from "gsap";
import { Waypoint } from "react-waypoint";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import Image from "../image";


function TeamSection({data}) {
 
  const teamInner = data.filter((fields)=>{
    if(fields.our_team_inner_img){
      return fields.our_team_inner_img;
    } 
  }) 
  const teamMiddle = data.filter((fields)=>{
    if(fields.our_team_middle_img){
      return fields.our_team_middle_img;
    } 
  }) 

  const teamOuter = data.filter((fields)=>{
    if(fields.our_team_outer_img){
      return fields.our_team_outer_img;
    } 
  })

  const smallTitle = data.filter((fields)=>{
    if(fields.our_team_small_title){
      return fields.our_team_small_title;
    } 
  })
  const title = data.filter((fields)=>{
    if(fields.our_team_title){
      return fields.our_team_title;
    } 
  })
  const paragraph = data.filter((fields)=>{
    if(fields.our_team_text){
      return fields.our_team_text;
    } 
  }) 

  const buttonText = data.filter((fields)=>{
    if(fields.our_team_button){
      return fields.our_team_button;
    } 
  }) 

  const buttonUrl = data.filter((fields)=>{
    if(fields.our_team_button_url){
      return fields.our_team_button_url;
    } 
  }) 


  const circleInnerRef = useRef(null);
  const circleMiddleRef = useRef(null);
  const circleOuterRef = useRef(null);
  const circleWrapRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [heightWrap, sethHeightWrap] = useState(true);

  const [tl, setTl] = useState(null);

  const heightInner = circleInnerRef.current?.clientWidth;
  const heightMiddle = circleMiddleRef.current?.clientWidth;
  const heightOuter = circleOuterRef.current?.clientWidth;

  useEffect(() => {
    sethHeightWrap(circleWrapRef.current?.clientWidth);

    const handleWindowResize = () => {
      sethHeightWrap(circleWrapRef.current?.clientWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();
    setTl(tl);
  }, []);

  const animateCircle = () => {
    if (shouldAnimate) {
      tl.fromTo(
        circleInnerRef.current,
        { opacity: 0, scale: 0, transformOrigin: "center" },
        { opacity: 1, duration: 1, scale: 1, transformOrigin: "center", ease: Back.easeOut }
      )
        .fromTo(
          circleMiddleRef.current,
          { opacity: 0, scale: 0, transformOrigin: "center" },
          { opacity: 1, duration: 1, scale: 1, transformOrigin: "center", ease: Back.easeOut },
          "-=0.8"
        )
        .fromTo(
          circleOuterRef.current,
          { opacity: 0, scale: 0, transformOrigin: "center" },
          { opacity: 1, duration: 1, scale: 1, transformOrigin: "center", ease: Back.easeOut },
          "-=0.8"
        )
        .fromTo(
          ".team",
          {
            opacity: 0,
            scale: 0,
          },
          { opacity: 1, scale: 1, ease: Back.easeOut },
          "-=0.8"
        );
    }
  };

  return (
    <TeamContainer>
         <section id="about-team" className="margin-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-5">
            <Waypoint
              bottomOffset="200px"
              onEnter={() => animateCircle()}
              onLeave={() => setShouldAnimate(false)}
            >
              <div
                className="circle-wrap"
                ref={circleWrapRef}
                style={{ height: `${heightWrap}px` }}
              >
                <div
                  ref={circleInnerRef}
                  style={{ height: `${heightInner}px` }}
                  className="circle-inner circle"
                >
                  <div className="circle-bg"></div>
                    {
                      teamInner.map((element)=>{
                        return(
                          <div className="team-avatar" >
                            <Image imageId={element.our_team_inner_img} />
                         </div>
                        )
                        
                      })
                    }
                    
                   

                </div>
                <div
                  ref={circleMiddleRef}
                  style={{ height: `${heightMiddle}px` }}
                  className="circle-middle circle"
                >
                  <div className="circle-bg"></div>
                  
                  {
                      teamMiddle.map((element)=>{
                        return(
                          <div className="team-avatar" >
                            <Image imageId={element.our_team_middle_img} />
                         </div>
                        )
                        
                      })
                    }
              
                </div>
                <div ref={circleOuterRef} className="circle-outer circle">
                  <div className="circle-bg"></div>

                  {
                      teamOuter.map((element)=>{
                        return(
                          <div className="team-avatar" >
                            <Image imageId={element.our_team_outer_img} />
                         </div>
                        )
                        
                      })
                    }
                 
                </div>
              </div>
            </Waypoint>
          </div>
          <div className="col-12 col-lg-5 ml-lg-5">
            <div className="text-wrap">
            {
             
             smallTitle.map((element)=>{
               return(
                <RevealTitle tag="h5" title={element.our_team_small_title} customClass="colorize-text" />
               )
             })

           
           }
           
           
            {
             
             title.map((element)=>{
               return(
                <RevealSingleLine tag="h3" text={element.our_team_title} />
               )
             })

           
           }
           
           {
            
            paragraph.map((element)=>{
              return(
               <RevealText tag="p" text={element.our_team_text} />
              )
            })

          
          }
              
              
            </div>
            {
            
            buttonText.map((element,index)=>{
              return(
                <a href={buttonUrl[index].our_team_button_url}>
              <Button name="btn" label={element.our_team_button} animate="true" />
            </a>
              )
            })

          
          }


            
          </div>
        </div>
      </div>
    </section>
    </TeamContainer>
   
  );
}

export default TeamSection;


const TeamContainer=styled.section`
#about-team .circle-wrap {
      position: relative;
      width: 100%;
}
#about-team .circle-wrap .team-avatar {
    height: 50px;
    width: 50px;
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
  }
  #about-team .circle-wrap .circle-bg {
    background: rgb(255, 46, 46);
    height: 100%;
    opacity: 0.2;
    border-radius: 50%;
  }
  #about-team .circle-wrap .circle-inner {
    opacity: 0;

    position: absolute;
    width: 31.9%;
    height: 31.9%;
    top: 34.05%;
    left: 34.05%;
    z-index: 2;
    border-radius: 100%;
  }

  #about-team .circle-wrap .circle-inner .team-avatar {
    top: -5%;
    right: 1%;
}

#about-team .circle-wrap .circle-inner .team-avatar:nth-of-type(2) {
    top: unset;
    left: -11%;
    bottom: -5%;
  }

  #about-team .circle-wrap .circle-middle {
    opacity: 0;

    position: absolute;
    width: 66.67%;
    height: 66.67%;
    top: 16.665%;
    left: 16.665%;
    z-index: 1;
    border-radius: 100%;
  }

  #about-team .circle-wrap .circle-middle .team-avatar {
    top: 40%;
    right: -9%;
}

#about-team .circle-wrap .circle-middle .team-avatar:nth-of-type(2) {
    right: 36%;
    bottom: -9%;
    top: unset;
  }
  #about-team .circle-wrap .circle-middle .team-avatar:nth-of-type(3) {
    top: -8%;
    left: 30%;
  }


  #about-team .circle-wrap .circle-outer {
    opacity: 0;

      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      border-radius: 100%;
  }

  #about-team .circle-wrap .circle-outer .team-avatar {
    top: -1%;
    right: 18%;
}

#about-team .circle-wrap .circle-outer .team-avatar:nth-of-type(2) {
    top: 7%;
    right: 79%;
  }
  #about-team .circle-wrap .circle-outer .team-avatar:nth-of-type(3) {
    top: unset;
    bottom: 10%;
    right: 79%;
  }
  #about-team .circle-wrap .circle-outer .team-avatar:nth-of-type(4) {
    top: unset;
    bottom: 15%;
    right: 3%;
  }

  #about-team h3 {
    text-transform: uppercase;
  }
  #about-team h5 {
    margin-bottom: 20px;
  }
  #about-team p {
    margin-bottom: 60px;
  }

  @media (min-width: 576px) {
    #about-team .circle-wrap .team-avatar {
          width: 80px;
          height: 80px;
        }
     
  }
`;
