import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import CtaNews from "../utils/cta-news/CtaNews";
import Image from "../image";
 
// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
    <FooterBox>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <a className="logo">
              <Image imageId="10979" />
            </a>
            <ul className="footer-contact">
              <li>Company name: IntellRocket Inc.</li>
              <li>Address: 2035 Sunset Lake Rd, Suite B-2, Newark, 19702 DE, USA</li>
              <li>Phone: (415) 767-1800</li>
              <li> Email: office@intellrocket.com</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 mb-4 col-lg-2">
            <h4 className="mb-4">Pages</h4>
            <ul className="footer-list">
                <li className="footer-list-item">
                  <a className="underline">
                    Home
                  </a>

                </li>
                <li className="footer-list-item">
                  
                  <a className="underline">
                    About
                  </a>
                  

                </li>
                <li className="footer-list-item">
                  
                  <a className="underline">
                    Contact
                  </a>

                </li>
            
            </ul>
          </div>
          <div className="col-12 col-sm-6 mb-4 col-lg-3">
            <h4 className="mb-4">Reach us</h4>
            <ul className="footer-list">
            
                <li className="footer-list-item">
                  <a className="underline">
                    Contact us
                  </a>

                  </li>
                  <li className="footer-list-item">
                  <a className="underline">
                    Carrers
                  </a>

                  </li>
                  <li className="footer-list-item">
                  <a className="underline">
                    Blog
                  </a>

                  </li>
                  <li className="footer-list-item">
                  <a className="underline">
                    Privacy policy
                  </a>

                  </li>
                 
               
            
            </ul>
          </div>
          <div className="col-10 col-sm-6 col-md-5 col-lg-3">
            <h4 className="footer-item">Follow Us</h4>
            <ul className="social-list d-flex align-items-center">
              <li className="social-list-item">
                <a
                  href="https://www.facebook.com/IntellRocket/"
                  className="social-icon"
                  aria-label="Navigate to Facebook"
                >
                  
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://www.linkedin.com/company/intellrocket/"
                  className="social-icon"
                  aria-label="Navigate to Linkedin"
                >
                   
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://twitter.com/intellrocket"
                  className="social-icon"
                  aria-label="Navigate to Twitter"
                >
                  
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://dribbble.com/intellrocket/"
                  className="social-icon"
                  aria-label="Navigate to Dribbble"
                >
                   
                </a>
              </li>
            </ul>
            <h4 className="footer-item"> Newsletter</h4>
            <CtaNews />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="copyright-wrap flex-column flex-md-row d-flex justify-content-between ">
                <div className="copyright-links">
                  <a className="underline">
                    Privacy Policy
                  </a>
                  <a  className="underline">
                    Site map
                  </a>
                </div>
                <h6>
                  ©2014 - 2020{" "}
                  <a className="underline">
                    IntellRocket,{" "}
                  </a>
                  All rights reserved
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterBox>



     
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const FooterBox = styled.footer`   
  width:100%;
  .logo {
    display: inline-block;
    width: 180px;
    margin-bottom: 40px;
  }


  h4 {
    line-height: 1.8;
  }
  a,li {
    color: var(--text-light);
  }

  ul li {
      line-height: 1.8;
    }
  
    .social-list {
      margin-bottom: 40px;
    }
     .social-list .social-list-item {
        margin-right: 30px;
      }

      .footer-copyright  .copyright-wrap {
          padding: 32px 0;
          border-top: 1px solid #eee;
      }

      .footer-copyright .copyright-wrap .copyright-links а:first-of-type {
        margin-right: 10px;
      }

      .footer-copyright a{
          font-size: 0.875rem;
          margin-right:10px;
      }

      

    

  form .round:after, form .round:before {
    transform: rotate(-90deg);
}
    
`;
