import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import Work from "./pages/work";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import GetAQuote from "./pages/get-a-quote";
import Blog from "./pages/blog";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from './styles/bootstrap.css';
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(data);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>

      {(data.isFetching && <Loading />) ||
    (data.isArchive && <List />) ||
    (data.isHome && <HomePage />) ||
    (data.isPage && data.id === 7917 && <AboutUs />) ||
    (data.isPage && data.id === 5682 && <Services />) ||
    (data.isPage && data.id === 7732 && <Work />) ||
    (data.isPage && data.id === 8522 && <Careers />) ||
    (data.isPage && data.id === 3041 && <Contact />) ||
    (data.isPage && data.id === 10032 && <Blog />) ||
    (data.isPage && data.id === 5546 && <GetAQuote />) ||
    (data.isPostType && <Post />) ||
    (data.isError && <PageError />)}
       
      </Main>
      <FooterContainer>
        <Footer/>
      </FooterContainer>      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  .container {
    width:100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  
  .text-slide-in {
    opacity: 0;
    animation: text-slide-in 0.6s forwards;
    animation-delay: 0.6s;
    &.close {
      animation: text-slide-out 0.6s forwards;
    }
  }
  
  .btn-slide-in {
    opacity: 0;
    animation: text-slide-in 0.5s forwards cubic-bezier(0, 0.5, 0.5, 1);
    animation-delay: 0.8s;
  }
  
  @keyframes text-slide-in {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes text-slide-out {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
  .text-center {
    text-align: center;
  }
  
  .hidden {
    opacity: 0;
  }
  .show {
    opacity: 0;
    animation: show 1s forwards;
    animation-delay: 0.5s;
    &.no-delay {
      animation-delay: unset;
    }
  }
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .h-100 {
    height: 100%;
  }
  
  main {
    padding-top: 50px;
  }
  
  * {
    box-sizing: border-box;
    line-height: 1.3;
    margin: 0;
    padding: 0;
    color: var(--text-primary);
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    ::selection {
      background: #fcb2bf;
    }
    :focus {
      outline: 0;
    }
  }
  
  .text-gradient {
    background: linear-gradient(to right, #f91824, #f92d73);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  form {
    .input-wrapper {
      position: relative;
      label {
        position: absolute;
        top: 15px;
        left: 20px;
        font-size: 0.875rem;
        color: var(--input-text);
        transition: 0.2s;
        pointer-events: none;
      }
      input,
      textarea {
        position: relative;
        width: 100%;
        padding: 14px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: var(--background);
        font-size: 1rem;
        &:focus {
          outline: none;
          border: 1px solid transparent;
          background: linear-gradient(to right, var(--background), var(--background)),
            var(--accent-color);
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
          & + label {
            top: -10px;
            background: var(--background);
            padding: 0 4px;
            color: #ff416c;
            transition: 0.2s;
            font-size: 0.75rem;
          }
        }
        &:not(:focus):not(:placeholder-shown) + label {
          top: -10px;
          background: var(--background);
          padding: 0 4px;
          color: #ff416c;
          transition: 0.2s;
          font-size: 0.75rem;
        }
      }
  
      &.label-visible {
        margin-bottom: 30px;
        &.file-wrap {
          margin-bottom: 54px;
        }
        .icon {
          display: inline-block;
          margin-right: 8px;
          width: 20px;
          height: 20px;
          background: url("/intellrocket-app/img/upload-file-icon.svg") center center no-repeat;
        }
        input,
        textarea {
          margin-top: 15px;
        }
        label {
          position: relative;
          top: unset;
          left: unset;
          color: var(--text-light);
          font-size: 1rem;
        }
        input[type="file"] {
          cursor: pointer;
          padding: 0;
          appearance: none;
          opacity: 0;
          display: block;
          height: 25px;
          margin-top: 0;
        }
      }
    }
  }
  
  .error-text {
    position: absolute;
    bottom: -22px;
    font-size: 0.9rem;
    left: 0;
    color: #ff416c;
    &.file-error {
      bottom: -40px;
    }
  }
  .asterisk {
    color: #db4c4c;
  }
  
  body {
    margin: 0;
    background: var(--background);
  }
  img {
    max-width: 100%;
    width: auto;
    display: block;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    &.comment {
      width: 160px;
    }
  }
  
  .underline-bar {
    color: var(--link-color);
  }
  .margin-b {
    margin-bottom: 80px;
    @media (min-width: 992px) {
      margin-bottom: 240px;
    }
  }
  .margin-b-100 {
    margin-bottom: 60px;
    @media (min-width: 768px) {
      margin-bottom: 100px;
    }
  }
  .external {
    color: var(--link-color);
  }

  .overflow {
    overflow: hidden;
  }
  .underline {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--text-primary);
      transform: scaleX(0);
      transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
      transform-origin: right center;
    }
    &:hover,
    &:focus {
      &::after {
        transform: scaleX(1);
        transform-origin: left center;
        transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
      }
    }
  }
  
  .split-title {
    position: relative;
    display: inline-block !important;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background: var(--text-primary);
      width: 100%;
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
    }
  }
  
  .current {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--text-primary);
    }
  }
  
  textarea {
    width: 100%;
    resize: none;
  }
  input {
    background: transparent;
  }
  
  /* Typography  */
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      font-size: 2.625rem;
      margin-bottom: 40px;
    }
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    @media (min-width: 992px) {
      font-size: 2.25rem;
    }
  }
  
  h4 {
    font-size: 1.25rem;
    margin-bottom: 40px;
    text-transform: uppercase;
  }
  h5 {
    font-size: 1rem;
    color:#595959;
    text-transform: uppercase;
  }
  h6 {
    font-size: 0.875rem;
    color:#595959;
  }
  
  p {
    font-size: 1rem;
    color:#595959;
    line-height: 1.8;
    font-weight: 400;
  }
  span {
    font-size: 0.875rem;
  }
  a {
    text-decoration: none;
    color:#181b31;
    font-size: 1rem;
  }
  li {
    font-family: "Open Sans", sans-serif;
    line-height: 1.8;
  }
  ul {
    list-style-type: none;
  }
  
 

  
`;

const HeadContainer = styled.div`
  display: flex;
  width:100%;
  max-width:1200px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2.75rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom:2.75rem;
`;
const FooterContainer = styled.div`
  display: flex;
  width:100%;
  background:white;
  // margin-top: auto;
`;

const Main = styled.div`
  /*display: flex;
  justify-content: center;*/
`;
