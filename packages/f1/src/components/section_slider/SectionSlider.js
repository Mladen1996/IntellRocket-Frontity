import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { connect, styled } from "frontity";
import SliderCard from "./SliderCard";
import SliderArrow from "./SliderArrow";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";

const SectionSlider = ({ title, toFilter, path,data }) => {




  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    rows: 1,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderTl, setSliderTl] = useState(null);

  const animateSlider = (params) => {
    sliderTl.to("#slider-item", {
      duration: 0.6,
      opacity: 1,
      x: 0,
      stagger: 0.2,
    });
  };

  useEffect(() => {
    let tl = gsap.timeline();
    setSliderTl(tl);
  }, []);

  const sliderRef = useRef(null);
  return (
    <SliderContainer>
         <section id="section-slider" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-wrap ">
              <h2>{title}</h2>
              <div className="arrow-wrap">
                <SliderArrow type="prev" onClick={() => sliderRef.current.slickPrev()} />
                <SliderArrow type="next" onClick={() => sliderRef.current.slickNext()} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <Waypoint onEnter={() => animateSlider()}>
              <div>
                <Slider {...settings} ref={sliderRef}>
                {data.map((item) => (
                        
                      <SliderCard item={item} key={item.title} path={path} />
                    ))}
                </Slider>
              </div>
            </Waypoint>
          </div>
        </div>
        
      </div>
    </section>
    </SliderContainer>
   
  );
};

export default SectionSlider;


const SliderContainer=styled.div`
#section-slider {
    overflow: hidden;
}

#section-slider .title-wrap {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}

#section-slider .title-wrap h2 {
    margin-bottom: 10px;
}
#section-slider .title-wrap .arrow-wrap {
    line-height: 1;
    display:flex;
}

#section-slider .slick-slider .slick-list .slick-slide {
    width: auto;
}

@media (min-width: 768px) {
    #section-slider .title-wrap {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }
    #section-slider .title-wrap h2 {
          margin-bottom: 0;
        }
    
    #section-slider .slick-slider .slick-list .slick-slide {
            width: 690px;
            height: 420px;
            margin-right: 30px;
      }
      #section-slider .slick-slider .slick-list .slick-slide > div {
              height: 100%;
            }
     
  }

  @media (min-width: 992px) {
    #section-slider .slick-slider {
        min-width: 100vw;
    }
    #section-slider .slick-slider .slick-list .slick-slide {
            width: 510px;
            height: 420px;
            margin-right: 30px;
    }
    #section-slider .slick-slider .slick-list .slick-slide > div {
              height: 100%;
            }
          
  }

`;
