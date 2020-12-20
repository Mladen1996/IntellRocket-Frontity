import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { connect, styled } from "frontity";
import Image from "../../image";


const OpenImage = ({ imageId, customClass, isWorkList, setIsImgVisible }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isWorkList && isVisible) {
      setIsImgVisible(true);
    }
  }, [isVisible, setIsImgVisible, isWorkList]);



  return (
    <ImageContainer>
         <Waypoint onEnter={() => setIsVisible(true)} bottomOffset="56%">
      <div className={isVisible ? `overlay ${customClass}` : "overlay"}>
        <figure>
          <Image imageId={imageId} />
        </figure>
      </div>
    </Waypoint>
    </ImageContainer>
   
  );
};

export default OpenImage;

const ImageContainer=styled.div`
width:100%;
.overlay {
    position: relative;
    width: 100%;
}
.overlay figure {
    position: relative;
    overflow: hidden;
}

.overlay figure::after {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    bottom: 100%;
    left: 0;
    background: #ddd;
    z-index: 3;
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      left 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s;
  }
  .overlay figure::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 100%;
    left: 100%;
    background: #555;
    z-index: 99;
    transition: left 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      right 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s;
  }
  .overlay figure img {
    opacity: 0;
    transform: translateX(-10px);
  }

   .right figure::after {
        right: 0;
        bottom: 0;
        left: 100%;
    }
     .right figure img {
        transition: opacity 0.05s 0.4s, transform 0.4s ease-out 0.4s;
        opacity: 1;
        transform: translateX(0);
      }

      .left figure::before {
        right: 100%;
        bottom: 0;
        left: 0;
    }
     .left figure img {
        transition: opacity 0.05s 0.4s, transform 0.4s ease-out 0.4s;
        opacity: 1;
        transform: translateX(0);
      }
  
`;