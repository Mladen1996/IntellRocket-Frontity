import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import Image from '../image';
import StarIcon from "./star-icon.svg";

function TestimonialCard({ item }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Waypoint bottomOffset="200px" onEnter={() => setIsVisible(true)}>
      <div className="col-12 col-md-6 mb-4 mb-md-4">
        <div className={isVisible ? "testimonial-card show" : "testimonial-card hidden"}>
          <div className="content-wrapper mb-4">
            <div className="d-flex align-items-center ">
              <div className="person-image">
                <Image imageId={item.client_img} />
              </div>
              <div className="info-wrap d-flex ">
                <div className="info">
                  <h3 className="name">{item.client_name}</h3>
                  <p className="role">{item.client_position}</p>
                </div>
              </div>
            </div>
            <div className="rating mb-4 mb-sm-0">
              <ul className="d-flex">
                <li>
                  <img src={StarIcon} alt="" />
                </li>
                <li>
                  <img src={StarIcon} alt="" />
                </li>
                <li>
                  <img src={StarIcon} alt="" />
                </li>
                <li>
                  <img src={StarIcon} alt="" />
                </li>
                <li>
                  <img src={StarIcon} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <p className="testimonial ">{item.client_testemonial}</p>
        </div>
      </div>
    </Waypoint>
  );
}

export default TestimonialCard;
