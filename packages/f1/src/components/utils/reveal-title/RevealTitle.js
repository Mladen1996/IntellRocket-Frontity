
import React, { useRef, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import { Waypoint } from "react-waypoint";
import { gsap} from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const RevealTitle = ({ title, tag, customClass = "", rotate = [], titleSecond = "" }) => {

  const splitText = useRef(null);
  const itemsRef = useRef([]);

  const [childSplit, setChildSplit] = useState(false);
  const [parentSplit, setParentSplit] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, rotate.length);
  }, [rotate]);

  useEffect(() => {
    let child = new SplitText(splitText.current, {
      type: "lines",
      linesClass: "split-child",
    });

    setChildSplit(child);

    let parent = new SplitText(splitText.current, {
      type: " lines",
      linesClass: "split-parent",
    });

    setParentSplit(parent);
  }, []);

  useEffect(() => {
    const handleResize = (params) => {
      childSplit.revert();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [childSplit]);

  const CustomTag = `${tag}`;

  const animateTitle = (params) => {
    if (shouldAnimate) {
      gsap.to(childSplit.lines, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        ease: "strong.inOut",
        stagger: 0.1,
      });
    }

    //rotate-text
    const tl = gsap.timeline({ repeat: -1, delay: 0.5, repeatDelay: 0 });
    if (shouldAnimate) {
      itemsRef.current.forEach((item, i) => {
        tl.from(
          itemsRef.current[i],
          {
            duration: 0.5,
            rotateX: -95,
            autoAlpha: 0,
            ease: "circ.out",
            y: 35,
          },
          "-=0.1"
        )
          .to(
            itemsRef.current[i],
            {
              duration: 0.5,
              rotateX: 0,
              autoAlpha: 1,
              ease: "circ.inOut",
              y: 0,
            },
            "-=.1"
          )
          .to(
            itemsRef.current[i],
            {
              duration: 0.5,
              rotateX: 95,
              autoAlpha: 0,
              ease: "circ.in",
              y: -30,
              delay: 2,
            },
            "-=.1"
          );
      });
    }
  };
  const colorized = titleSecond.substring(8);
  const firstPart = titleSecond.slice(0, 8);
  return (
    <Title>
      <Waypoint bottomOffset="8%" onEnter={animateTitle} onLeave={() => setShouldAnimate(false)}>
        <CustomTag ref={splitText} className={`reveal-title ${customClass}`}>
          {title}
          {/*rotate.length ? (
            <div className="rotate-text">
              {rotate.map((item, i) => (
                <span ref={(el) => (itemsRef.current[i] = el)} className="rotating" key={i}>
                  {item}
                </span>
              ))}
            </div>
              ) : null*/}
          {titleSecond.length ? (
            <span className="title-size">
              {firstPart}
              <span className="colorize">{colorized}</span>
            </span>
          ) : null}
        </CustomTag>
      </Waypoint>
    </Title>
  );
};

export default connect(RevealTitle);


const Title = styled.div`   
.reveal-title > div {
      position: relative;
      margin: 0;
}
  
.colorize-text {
      background: linear-gradient(to right, #ff416c, #ff4b2b);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
}


.colorize-text .split-child {
        background: linear-gradient(to right, #ff416c, #ff4b2b);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
}
  
  .split-parent {
    overflow: hidden;
  }
  .split-child {
    transform: translateY(100%);
    display: inline-block;
    color: #181b31;
  }
  
  li .split-parent, li.split-child {
      color: #bdbdbe;
    }
    li   .split-parent {
      margin-bottom: 10px;
    }
 
  .colorize {
    font-size: 2rem;
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .title-size {
    font-size: 2rem;
    display: block;
  }
  @media (min-width: 768px) {
    .title-size,
    .colorize {
      font-size: 2.625rem;
    }
  }
`;