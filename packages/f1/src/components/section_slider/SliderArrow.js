import React, { useRef, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

function SliderArrow(props) {
  const { type, ...rest } = props;
  const circleNext = useRef(null);
  const lineNext = useRef(null);
  const arrowNext = useRef(null);
  const [once, setOnce] = useState(false);
  const [tl, setTl] = useState(null);

  useEffect(() => {
    let tl = gsap.timeline();
    setTl(tl);
  }, []);

  const animateCircle = (params) => {
    if (once) {
      tl.play();
      return;
    }
    tl.set(circleNext.current, { visibility: "visible" })
      .set(lineNext.current, {
        visibility: "visible",
      })
      .set(arrowNext.current, { visibility: "visible" });

    tl.fromTo(circleNext.current, { drawSVG: 0 }, { duration: 0.5, drawSVG: "100%" })
      .fromTo(lineNext.current, { drawSVG: 0 }, { duration: 0.5, drawSVG: "100%" }, 0)
      .fromTo(arrowNext.current, { drawSVG: 0 }, { duration: 0.5, drawSVG: "100%" }, 0.2);
  };

  const handleLeave = (params) => {
    tl.reverse();
  };

  const handleEnter = (params) => {
    animateCircle();
    setOnce(true);
  };

  return (
    <ArrowContainer>
        <button
      className={type === "next" ? "slider-arrow" : "slider-arrow prev"}
      area-label={type === "next" ? "go to next slide" : "go to previous slide"}
      {...rest}
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
    >
      <svg
        version="1.2"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
      >
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M18.416,24.5L32.584,24.5"
        ></path>
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M27.529,19.541L32.488,24.5L27.529,29.459"
        ></path>
        <path
          ref={lineNext}
          id="line-next"
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M18.416,24.5L32.584,24.5"
        ></path>
        <path
          ref={arrowNext}
          id="arrow-next"
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M27.529,19.541L32.488,24.5L27.529,29.459"
        ></path>
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M4.844999999999999,24.363A20,20 0,1,1 44.845,24.363A20,20 0,1,1 4.844999999999999,24.363"
        ></path>
        <path
          id="circle-next"
          ref={circleNext}
          fill="none"
          strokeMiterlimit="10"
          d="M4.844999999999999,24.363A20,20 0,1,1 44.845,24.363A20,20 0,1,1 4.844999999999999,24.363"
        ></path>
      </svg>
    </button>
    </ArrowContainer>
    
  );
}

export default SliderArrow;


const ArrowContainer=styled.div`
.slider-arrow {
    background: #fff;
    line-height: 1;
    outline:none;
}


.slider-arrow #circle-next,.slider-arrow #arrow-next,.slider-arrow #line-next {
      visibility: hidden;
      stroke: black;
      stroke-width: 2px;
    }
  
  .prev {
      transform: scaleX(-1);
    }
  
`;