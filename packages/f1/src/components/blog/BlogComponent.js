import React from "react";
import { connect, styled } from "frontity";
import BlogHero from "./blogs-hero.jpg";


function BlogsPage() {
  return (
    <BlogContainer>
      <div className="blogs-hero margin-b-100">
        <h1>Welcome to our blog!</h1>
      </div>
      
    </BlogContainer>
  );
}

export default BlogsPage;

const BlogContainer=styled.div`
.blogs-hero {
    background: url(${BlogHero}) no-repeat;
    height: 450px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    /*margin-top: -110px;*/
    h1 {
      color: #fff;
    }
  }
`;

