import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Image from "../image";

const Header = ({ state }) => {
  return (
    <>

<div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-sm-3">
           
                  <StyledLink link="/">
                  <Image imageId="10979"/>
              </StyledLink>
           
          </div>
          <div className="col-6 col-sm-8 nav-mobile d-flex align-items-center justify-content-end">

          <Nav />
          </div>

          </div>
        </div>
       
        <MobileMenu />
     
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight:800;
  }
`;

const StyledLink = styled(Link)`
min-width: 180px;
    width: 150px;
    display: inline-block;
  text-decoration: none;
  color:var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color:var(--black);
  }
`;
