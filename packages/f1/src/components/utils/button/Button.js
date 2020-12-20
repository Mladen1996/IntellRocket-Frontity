import React, { useRef, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import { Waypoint } from "react-waypoint";


export default function Button({ name, label, animate, link, handleClick, aria }) {
    const [isVisible, setIsVisible] = useState(false);
    const animateBtn = () => {
      if (animate) {
        setIsVisible(true);
      }
    };
  
    return (
    <ButtonContainer>
        <Waypoint onEnter={animateBtn}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className={isVisible ? `${name} btn-slide-in` : `${name} btn-hidden `}
              aria-label={aria}
            >
              {label}
            </button>
          </a>
        ) : (
          <button
            onClick={handleClick}
            aria-label={aria}
            className={isVisible ? `${name} btn-slide-in` : `${name} btn-hidden `}
          >
            {label}
          </button>
        )}
      </Waypoint>
    </ButtonContainer>
      
    );
  }


const ButtonContainer=styled.section`
.btn {
    transition: all 0.2s;
    border-radius: 30px;
    padding: 16px 32px;
    transform: translateY(0);
}
.btn:hover, .btn:focus {
      transform: translateY(-1px) !important;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.05),
        0 4px 4px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05), 0 16px 16px rgba(0, 0, 0, 0.05);
}
  
.btn .btn-hidden {
      opacity: 0;
}
.btn .btn-static {
      opacity: 1;
}
.btn .btn-secondary {
      opacity: 1;
      color: #f92d73;
      background: none;
      border: 1px solid #f92d73;
}
.btn .btn-secondary:hover {
        color: #fff;
        background: var(--accent-color);
}

.btn .width-150 {
      width: 150px;
}
  
  
.text-only {
    background: transparent;
    padding: 4px;
    border: none;
    color: var(--text-light);
    margin: auto;
    margin-bottom: 30px;
    transform: translateY(0);
    position: relative;
    display: flex;
}
.text-only::after {
      content: " ";
      width: 8px;
      height: 8px;
      border-right: 2px solid #888;
      border-bottom: 2px solid #888;
      position: absolute;
      z-index: -1;
      right: -15px;
      top: 8px;
      transform: rotate(45deg);
}
  
.text-only:focus {
      // transform: translateY(-1px) !important;
}
  
  
  .round {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    position: relative;
    margin-right: 10px;
    padding: 0;
    transform: scale(1);
    // transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
.round::before {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
     
      top: calc(50% - 6px);
      left: calc(50% - 6px);
      transform: translateY(0);
      opacity: 1;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
.round::after {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
     
      opacity: 0;
      transform: translateY(12px);
      top: calc(50% - 12px);
      left: calc(50% - 6px);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
    .round:hover {
      transform: scale(1.1);
    }
    .round:hover::before {
        transform: translateY(-10px);
        opacity: 0;
      }
    .round:hover::after {
        transform: translateY(6px);
        opacity: 1;
      }
   
  
`;
 