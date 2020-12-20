import React, { useRef, useState, useEffect } from "react";
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "../image";

gsap.registerPlugin(SplitText);

const SliderCard = ({ item, path }) => {
  const splitTop = useRef(null);
  const splitBottom = useRef(null);
  const [once, setOnce] = useState(false);
  const [splitTopChar, setSplitTopChar] = useState(null);
  const [splitBottomChar, setSplitBottomChar] = useState(null);
  const [tlTop, setTlTop] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    setTlTop(tl);

    const splitTopWord = new SplitText(splitTop.current, { type: "chars, words" });
    setSplitTopChar(splitTopWord);

    // hover
    const splitBottomWord = new SplitText(splitBottom.current, {
      type: "chars, words",
      charsClass: "bottom-char",
    });
    setSplitBottomChar(splitBottomWord);
  }, []);

  const animateTop = () => {
    if (once) {
      tlTop.play();
      return;
    }
    tlTop
      .to(splitTopChar.chars, {
        duration: 0.1,
        y: -5,
        opacity: 0,
        stagger: 0.02,
      })
      .to(
        splitBottomChar.chars,
        {
          duration: 0.1,
          y: 0,
          opacity: 1,
          stagger: 0.02,
        },
        0.1
      );
  };

  const handleLeave = (params) => {
    tlTop.reverse();
  };

  const handleEnter = (params) => {
    animateTop();
    setOnce(true);
  };

  return (
    <SliderCardContainer>
      
        <div
          id="slider-item"
          onMouseEnter={() => handleEnter()}
          onMouseLeave={() => handleLeave()}
          ref={sliderRef}
        >
          <Image imageId={item.featured_media}/>
          <div className="slider-text-wrap">
            <h4>{item.title.rendered}</h4>
            <div className="text-desc-wrap">
              <span className="line"></span>
              <div className="slider-text-desc" ref={splitTop}>
                <span>STRATEGY</span>
                <span>WEB DESIGN</span>
                <span>WORDPRESS</span>
              </div>
              <h5 className="slider-text-hover" ref={splitBottom}>
                Discover mode
              </h5>
            </div>
          </div>
        </div>
    
    </SliderCardContainer>
  );
};

export default SliderCard;

const SliderCardContainer=styled.div`
height:100%;
#slider-item {
    position: relative;
    display: flex;
    background: #000;
    height: 100%;
    max-height: 300px;
    width: auto;
    transform: translateX(35px);
    opacity: 0;
}
#slider-item:hover .slider-text-wrap .text-desc-wrap .line::after ,
#slider-item:focus .slider-text-wrap .text-desc-wrap .line::after {
    transform: scaleX(1);
            transition: all 0.3s;
  }
#slider-item img {
    width: auto;
    height: min-content;
    object-fit: cover;
    object-position: left;
    opacity: 0.9;
}

#slider-item .slider-text-wrap {
    width: 40%;
    position: absolute;
    padding: 0 0 40px 20px;
    bottom: 0;
    left: 0;
}

#slider-item .slider-text-wrap h4,#slider-item .slider-text-wrap h5 {
  color: #fff;
}
#slider-item .slider-text-wrap h4 {
  text-transform: initial;
  margin-bottom: 20px;
  font-size: 1.5rem;
}
#slider-item .slider-text-wrap .text-desc-wrap {
  display: flex;
  align-items: center;
}

#slider-item .slider-text-wrap .text-desc-wrap .line {
    width: 50px;
    height: 1px;
    background: #fff;
    display: inline-block;
    position: relative;
    margin-right: 10px;
}

#slider-item .slider-text-wrap .text-desc-wrap .line::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: var(--accent-color);
    transition: all 0.3s;
    transform: scaleX(0);
    transform-origin: left;
  }
  #slider-item .slider-text-wrap .text-desc-wrap .slider-text-desc {
    position: relative;
  }

  #slider-item .slider-text-wrap .text-desc-wrap .slider-text-desc span {
    text-transform: uppercase;
    font-size: 1rem;
  }
  #slider-item .slider-text-wrap .text-desc-wrap .slider-text-desc div {
    color: #fff;
  }

  #slider-item .slider-text-wrap .text-desc-wrap .slider-text-hover {
    position: absolute;
    left: 80px;
  }

  #slider-item .slider-text-wrap .text-desc-wrap .slider-text-hover div .bottom-char {
      opacity: 0;
      transform: translateY(60%);
      color: red;
      background: linear-gradient(to right, #f91824, #f92d73);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (min-width: 576px) {
        #slider-item .slider-text-wrap {
            width: 66%;
          }
        
      }

      @media (min-width: 768px) {
        #slider-item {
          max-height: 420px;
          width: 100%;
        }
         #slider-item img {
            width: 100%;
            height: 100%;
            opacity: 0.9;
          }
          #slider-item .slider-text-wrap {
            width: 98%;
          }
        
      }
`;