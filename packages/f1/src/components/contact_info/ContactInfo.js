import React, { useState } from "react";
import { connect, styled } from "frontity";
import Image from "../image";
import { Waypoint } from "react-waypoint";

import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import contactData from "./contactData";
import { gsap } from "gsap";

function ContactInfo({data,contactForm}) {
  const [isVisible, setIsVisible] = useState(false);
  const animateCard = () => {
    gsap.to(".info-card", {
      duration: 0.7,
      opacity: 1,
      stagger: 0.15,
    });
  };
  return (
    <ContactContainer>
      <section id="contact-page">
        <div className="container">
          <div className="row margin-b-100">
            <div className="col-12 col-lg-8 text-wrap">
              <RevealTitle
                tag="h1"
                title={data[0].contact_title}
              />
              <RevealText
                tag="p"
                text={data[0].contact_subtitle}
              />
            </div>
            <Waypoint bottomOffset="20%" onEnter={() => setIsVisible(true)}>
              <div className="col-12 col-md-8">
                <div className={isVisible ? "show" : "hidden"}>
                  {contactForm}
                </div>
              </div>
            </Waypoint>
            <Waypoint>
              <div className="col-12 col-md-4 mb-5 mb-md-0">
                <div className={isVisible ? "show" : "hidden"}>
                  <h3>Working Hours</h3>
                  <ul>
                    <li>Monday: 9.00 - 17.00h</li>
                    <li>Tuesday: 9.00 - 17.00h </li>
                    <li>Wednesday: 9.00 - 17.00h </li>
                    <li>Thursday: 9.00 - 17.00h</li>
                    <li>Friday: 9.00 - 17.00h</li>
                    <li>Saturday: Closed</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </Waypoint>
          </div>

          <div className="row margin-b d-flex">
            {contactData.map((item, i) => {
              console.log(item.img);
              return (
                <Waypoint bottomOffset="200px" onEnter={() => animateCard()}>
                <div className="col-12 col-sm-6  col-xl-4 mb-4">
                  <div className="info-card card-culture d-flex flex-column align-items-center">
                    <img src={item.img} />     
                    <p></p>            
                    <p className="info-text">{item.info}</p>
                  </div>
                </div>
              </Waypoint>
              )
            })}
          </div>
          
        </div>
      </section>
     
    </ContactContainer>
  );
}

export default connect(ContactInfo);


const ContactContainer=styled.div`

#contact-page {
  padding-top: 60px;
}
#contact-page .text-wrap {
    margin-bottom: 60px;
}
#contact-page .text-wrap .form-wrap input,#contact-page .text-wrap .form-wrap textarea {
      padding: 15px 20px;
}
#contact-page .text-wrap .form-wrap .submit {
      margin-bottom: 10px;
}
  
#contact-page  h1 {
    margin-bottom: 30px;
  }
  #contact-page  h3 {
    margin-bottom: 10px;
  }
  #contact-page  ul li {
      color: #595959;
      font-size: 1rem;
    }
  
    .flexc {
      display: flex;
      justify-content: space-between;
  }

  .pure-material-textfield-outlined:nth-child(1) {
    margin-right: 20px;
}

.flexc label {
  position: relative;
  width: 100%;
  display: inline-block;
}

.mt2 {
  margin-top: 2rem;
}

.contact .wpcf7-form-control-wrap input {
  max-width: unset;
}

.wpcf7-form-control-wrap input {
  height: 50px;
  border-radius: 5px;
  width: 100%;
  max-width: 345px;
  border:1px solid rgb(204, 204, 204);

}

.wpcf7-form-control-wrap input, textarea {
  padding-left: 20px;
}

.move1, .move2, .move5, .move6 {
  position: absolute;
  left: 20px;
  top: 25%;
  background: #fff;
  padding: 0 5px;
  transition: all 0.4s ease;
  cursor: pointer;
}

.wpcf7-form .mt2 label {
  position: relative;
  width: 100%;
}

.wpcf7-form-control-wrap textarea {
  border-radius: 5px;
  width:100%;
  border: 1px solid rgb(204, 204, 204);
}

.move3 {
  position: absolute;
  left: 20px;
  top: 5%;
  background: #fff;
  padding: 0 5px;
  transition: all 0.4s ease;
  cursor: pointer;
}

.cont-flex {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}

.h100 {
  height: 100px;
}

.cont-flex p{
  margin:0px;
}

.radioc {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cont-flex input[type="radio"] {
  margin-right: 10px;
}

.radioc input {
  position: absolute;
  opacity:0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}

.radioc input:checked~.checkmark {
  background-image: linear-gradient(to right,#f91824,#f92d73);
}

.radioc input:checked~.checkmark:after {
  display: block;
}

.radioc .checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.send input {
  width: 150px;
  text-align: center;
  border-radius: 25px;
  padding: 0;
  background-image: linear-gradient(to right,#f91824,#f92d73);
  margin-right: 0;
  height: 50px;
  color: #fff;
  font-size: 16px;
  transition: 0.2s;
  border:none;
}

.info-card {
  height: 100%;
  padding: 60px 30px;
  opacity: 0;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.07);
}
  .info-card .card-culture img {
      margin-bottom: 30px;
  }

  .info-card img {
    width: min-content;
    margin-bottom: 55px;
  }
  .info-card h4 {
    margin-bottom: 30px;
    text-transform: unset;
    font-size: 1.5rem;
  }
  .info-card .info-text {
    text-align: center;
  }


@media (min-width: 768px) {
  #contact-page {
    padding-top: 180px;
  }
  #contact-page  .text-wrap {
      margin-bottom: 160px;
    }
    #contact-page  .form-wrap .name-wrap {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    #contact-page  .form-wrap .email-wrap {
        grid-column: 1/3;
        grid-row: 2/3;
      }
    
      #contact-page h1 {
      margin-bottom: 40px;
    }
    #contact-page h3 {
      margin-bottom: 30px;
    }


@media (min-width: 992px) {
  #contact-page .text-wrap {
      margin-bottom: 240px;
    }
    #contact-page .form-wrap .name-wrap {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    #contact-page .form-wrap .email-wrap {
        grid-column: 2/3;
        grid-row: 1/2;
      }
  
`;
