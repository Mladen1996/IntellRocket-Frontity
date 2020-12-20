import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import SharedSectionHero from "../utils/shared-section-hero/SharedSectionHero";
import SectionSecondOverlap from "../utils/section-second-overlap/SectionSecondOverlap";
import AboutClients from "../about_clients/about_clients";
import SectionQuote from "../section-quote/SectionQuote";
import TeamSection from "../team_section/TeamSection";

const AboutUs = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const aboutUs = state.source[data.type][data.id];
  console.log(aboutUs);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/about-us/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    
      <Content>
        <Html2React html={aboutUs.content.rendered} />
        <SharedSectionHero data={aboutUs.first_section} customClass="rotate-title"/>
        <SectionSecondOverlap data={aboutUs.our_vision}/>
        <AboutClients data={aboutUs.our_clients}/>
        <TeamSection data={aboutUs.our_team}/>
        <SectionQuote />
      </Content>
   
  ) : null;
};

export default connect(AboutUs);

const ArticleContainer = styled.div`
  width:100%;
  .post-title {
    text-align:center;    
  }
`;

const Title = styled.h1`
  margin-bottom: 3.2rem;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
width: 100%;
position:relative;
.wp-block-group__inner-container {
  width: 100%;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px auto;
}
.hero-homepage {
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-bottom:50px;
  }
  .wp-block-columns {
    .wp-block-column {
      margin-bottom:2rem
    }
    align-items: center;
    .wp-block-button {
      .wp-block-button__link {
        background: var(--brand);  
        border:1px solid transparent;   
        border-color:var(--brand);  
        box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
        transition: all 0.3s ease;  
        margin-right: 0.5rem;  
        &:hover {
          color:var(--black);
          background:transparent;
        }
      }
    }
    .wp-block-button.is-style-outline {       
      .wp-block-button__link {
        background: transparent;
        border-color:var(--brand);     
        color:var(--brand);  
        &:hover {
          color:var(--black);
        }
      }
    }
  }
}

.home-services {
  background:#F8F8FA;
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  .wp-block-group__inner-container {
    .home-services-heading {
      max-width:539px;
      margin:0 auto;
      margin-bottom:3rem;
    }
    .home-services-grid {

      .wp-block-image {
        width: 62px;
        height: 62px;
        margin: 0 auto;
      }
      h5 {
        margin-bottom:1rem;
        margin-top:1rem;
      }
      p {
        position:relative;
      }
    }
  }
}
.home-services-two {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  .wp-block-group__inner-container {
    .wp-block-columns {
      .wp-block-column {
        ol {
          counter-reset: myOrderedCounter;
          padding-left:0;
          margin-top:2rem;
          li {
            list-style-type: none;
            position: relative;
            padding-left: 3rem;
            margin-bottom: 1rem;
            &:before {
              counter-increment: myOrderedCounter;
              content: counter(myOrderedCounter);
              position: absolute;
              background-color: var(--brand);
              border-radius: 50%;
              left: 0;
              top: 5px;
              width: 30px;
              height: 30px;
              text-align: center;
              color: var(--white);
              padding-top: 2.5px;
            }
          }
        }
      }
    }
  }
}
.home-cta {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  background:var(--brand);
  color:var(--white);
  .wp-block-group__inner-container {
    h2 {
      color:var(--white);
    }
    .wp-block-buttons {
      .wp-block-button {
        .wp-block-button__link {
          background: var(--white);  
          border:1px solid transparent;   
          border-color:var(--white);  
          box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
          transition: all 0.3s ease;  
          margin-right: 0.5rem;  
          color:var(--brand);
          &:hover {
            color:var(--white);
            background:transparent;
          }
        }
      }
      .wp-block-button.is-style-outline {       
        .wp-block-button__link {
          background: transparent;
          border-color:var(--white);     
          color:var(--white);  
          &:hover {
            background:var(--white);
            color:var(--brand);
          }
        }
      }
    }
  }
}
.home-team {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  .home-team-heading {
    .wp-block-group__inner-container {
      max-width:539px;
      margin:0 auto;
      margin-bottom:3rem;
    }
  }
  .wp-block-group__inner-container {
    .wp-block-columns {
      .wp-block-column {
        margin-bottom:1.5rem;
        p {
          margin-bottom: 0rem;
        }
      }
    }    
  }
}
.home-recent-blog {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  background:#F8F8FA;
  .home-recent-blog-heading {
    margin-bottom:3rem;
  }
  .wp-block-latest-posts {
    li {
      margin-bottom:2rem;
      .wp-block-latest-posts__featured-image {
        margin-bottom:1rem;
        width: 100%;
      }
      a {
        color:var(--black);
        transition: all 0.3s ease;  
        font-weight:500;
        margin-bottom: 0.5rem;
        display: block;
        &:hover {
          color:var(--brand);
        }
      }
      .wp-block-latest-posts__post-date {
        color: rgb(69 78 86);
      }
    }
  }
}
`;
