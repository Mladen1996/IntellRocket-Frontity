import React, { useRef, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Waypoint } from "react-waypoint";

const RevealText = ({ text, customClass = "", borderBottom, img, tag, toggle }) => {
  const splitText = useRef(null);
  const [childSplit, setChildSplit] = useState(false);
  const [parentSplit, setParentSplit] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    let child = new SplitText(splitText.current, {
      type: " lines",
      linesClass: "text-split-child",
    });

    setChildSplit(child);

    let parent = new SplitText(splitText.current, {
      type: " lines",
      linesClass: "text-split-parent",
    });

    setParentSplit(parent);
  }, []);

  useEffect(() => {
    function handleResize(e) {}
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  const CustomTag = `${tag}`;

  const animateText = (params) => {
    if (shouldAnimate) {
      gsap.to(childSplit.lines, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "sine.inOut",
        stagger: 0.05,
        delay: 0.5,
      });
    }
  };

  useEffect(() => {
    const handleResize = (params) => {
      childSplit.revert();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [childSplit]);

  return (
    <RevealContainer>
      <Waypoint onEnter={animateText} onLeave={() => setShouldAnimate(false)}>
        <CustomTag ref={splitText} className={`reveal-text ${customClass}`}>
          {CustomTag === "ul" ? <li>{text}</li> : text}
          {borderBottom ? <span></span> : null}
          
        </CustomTag>
      </Waypoint>
    </RevealContainer>
  );
};

export default RevealText;


const RevealContainer=styled.div`
.reveal-text  > div {
      position: relative;
      margin: 0;
}
 .reveal-text img {
      display: inline-block;
}

  .text-split-parent {
    display: inline-block;
  }
  .text-split-child {
    transform: translateY(50%);
    display: inline-block;
    opacity: 0;
  }
 .text-split-child span {
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(229, 229, 229, 0.9);
      margin-top: 10px;
}
  
  .reveal-text .text-split-parent,
   .reveal-text .text-split-child {
      font-size: 1rem;
      color: #595959;
      line-height: 1.8;
      font-weight: 400;
    }

`;
