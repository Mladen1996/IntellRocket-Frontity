import React, { useEffect, useRef  } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Image from "../image";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import ExploreButton from "../utils/explore-button/ExploreButton";
/*import { gsap } from "gsap";*/
/*import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);*/

// simplest form (only email)


const HomeFirstSection = ({ state,data,handleScroll }) => {
  // const options = state.source.get("acf-options-page");
  const start = useRef(null);
  console.log(data);
  /*useEffect(() => {
    gsap.to(start.current, 5, {
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      morphSVG: {
        shape: start.current,
        type: "rotational",
        shapeIndex: [1.1],
        origin: "0% 100%",
      },
      delay: 0,
    });
  }, []);*/
  const title = data.filter((fields)=>{
    if(fields.title){
      return fields.title;
    } 
  })

  const sectionImage = data.filter((fields)=>{
    if(fields.section_image){
      return fields.section_image;
    } 
  })


  return (
    <>
   
              <SectionHero>
              <div className="container d-flex align-items-center">
                <div className="row align-items-center h-100">
                <div className="col-12 col-lg-6 ">
                  {
                    title.map((element, index) => {
                     
                        return(

                          <RevealTitle tag="h1" title={element.title} />
                        )
                      
                    
                    })
                  }
                   <ExploreButton handleScroll={handleScroll} />

                      </div>
                 
                  <div className="col-lg-6 h-100 img-wrap">
                  <svg id="Layer_4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1075.88 846.77">
                      <defs></defs>
                      <title>intellrocket Baze , Border</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <clipPath id="svg-clip">
                            <path
                              ref={start}
                              id="morph-path"
                              className="cls-1"
                              d=" M175.270836,26.7977911 C128.405836,70.3317911 129.938279,144.739124 96.4022789,213.687124 C64.6272789,279.016124 41.242383,286.071679 46.324383,355.582679 C48.314383,382.792679 79.5246278,459.251586 88.7738696,492.334164 C116.497714,591.496483 -75.3047466,680.552915 34.6072534,850.491915 C96.2982534,945.874915 281.559,906.015 400.971,924.052 C537.741,944.711 678.161685,902.348368 778.343685,870.462368 C902.466685,830.956368 927.354,806.232 975,704 C1066.208,508.3 1058.68971,185.848951 904.455709,55.3429506 C808.898709,-25.5130494 786.027661,117.60054 600.323661,90.5925401 C411.016661,63.0605401 256.879836,-49.0102089 175.270836,26.7977911 Z"
                            />
                          </clipPath>
                        </g>
                      </g>
                    </svg>
                    <figure className="clip-svg">
                    {
                    sectionImage.map((element, index) => {
                    return(

                        <Image imageId={element.section_image} />
                      )
                    })
                  }

                   
                    </figure>
                  </div>
                </div>
              </div>
            </SectionHero>
   
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(HomeFirstSection);

const SectionHero = styled.section`   
padding-top: 0;
height: 95vh;
overflow: hidden;
position: relative;
display: flex;
align-items: center;

#star {
  visibility: hidden;
}

.container .img-wrap {
    position: relative;
    display: none;
}

@media (min-width: 992px) {
    .container {
      height: 100%;
    }

    .container .img-wrap {
      display: block;
      height: 100%;
    }

    .container .img-wrap #Layer_4 {
      position: absolute;
      width: 0;
      height: 0;
    }

    .container .img-wrap #Layer4 .cls-1 {
      fill: none;
      stroke: #d1d1d1;
    }

    .img-wrap .clip-svg {
      height: 100%;
      width: 50vw;
      clip-path: url(#svg-clip);
      -webkit-clip-path: url(#svg-clip);
    }

    img-wrap .clip-svg .img {
      max-width: unset;
      min-width: 100%;
      min-height: 100%;
    }
}
 
`;
