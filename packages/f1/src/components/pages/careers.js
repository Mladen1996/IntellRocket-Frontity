import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import SharedSectionHero from "../utils/shared-section-hero/SharedSectionHero";
import CareerCulture from "../career_culture/CareerCulture";
import Button from "../utils/button/Button";

const Careers = ({ state, actions, libraries }) => {
  // Get information about the current URL.
 
  const data = state.source.get(state.router.link);
  console.log(data);
  // Get the data of the post.
  const careers = state.source[data.type][data.id];
  console.log(careers);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/careers/");
    actions.source.fetch("/jobs/");
    List.preload();
  }, []);

  const jobsData=state.source.get("/jobs/");
  // Load the post, but only if the data is ready.
  return data.isReady  ? (
    <ArticleContainer>
      <div className="post-title">
        <Title dangerouslySetInnerHTML={{ __html: careers.title.rendered }} />
      </div>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <div className="container">
        <Html2React html={careers.content.rendered} />
        <SharedSectionHero data={careers.first_section} customClass="rotate-title rotate-career"/>
        <CareerCulture data={careers.home_first_section} />
        {jobsData.isAwsmJobOpeningsArchive && (
          <PositionContainer>
          <section id="job-list" className="margin-b">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3>Positions Available</h3>
              {/* Iterate over the items of the list. */}
              {jobsData.items.map(({ type, id }) => {
                const item = state.source[type][id];
                console.log(item);
                // Render one Item component for each one.
                return (
                  <div className="job-wrap d-flex ">
                    <div className="info-wrap">
                <h4>Marketing Manager</h4>
                <p>Belgrade/ Full Time</p>
              </div>
                    <a href={item.link}>
                    <Button name="btn btn-static" label="More Details" />
                    </a>

                  </div>
                );
              })}
            </div>
            </div>
            </div>
          </section>
          </PositionContainer>
      )}
      </div>
    </ArticleContainer>
  ) : null;
};

export default connect(Careers);

const ArticleContainer = styled.div`
  width:100%;
  .post-title {
    text-align:center;    
  }

  .split-title{
    width:100%;
}

.split-text{
    margin-bottom:100px;
}
`;

const PositionContainer=styled.div`
#job-list {
    margin-bottom: 140px;
}
#job-list h3 {
      font-size: 1.5rem;
}
 #job-list .job-wrap {
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid #888;
      padding-bottom: 20px;
}
#job-list .job-wrap .info-wrap {
        margin-bottom: 30px;
      }
#job-list .job-wrap .info-wrap h4 {
          text-transform: unset;
          margin-bottom: 10px;
}
 
  
  @media (min-width: 768px) {
    #job-list {
      margin-bottom: 220px;
    }
     #job-list .job-wrap {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0;
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
  word-break: break-word;  
  
  * {
    max-width: 1035px;
    width: 100%;
    margin:0 auto;
  }

  p {
    margin-bottom:1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom:1.8rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    // width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  .wp-block-button, .wp-block-code, .wp-block-preformatted {
    width:auto;
    margin-bottom:2rem;
  }
  .wp-block-button__link {
    color:var(--white);
  }
  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
    }
    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }
  @media (max-width: 992px) {
    .wp-block-columns {
      padding-left: 15px;
      padding-right:15px;
    }    
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    width:100%;
    height: 3rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--white);
    background-color:var(--brand);
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
  /**Contact Block**/
  .contact-block {
    background:#F8F8FA;    
    padding-top: 34px;
    padding-bottom:34px;
    max-width: 100%;    
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom:75px;
    }
    .wp-block-group__inner-container {
      max-width:1035px;
      margin:0 auto;
      .wp-block-columns {
        .wp-block-column.contact-details {
          margin-bottom: 2rem;
          .contact-maps {
            position: relative;
            display: block;
            width: 100%;
            height: 257px;
            padding: 0;
            overflow: hidden;
            margin-bottom:2rem;
            iframe {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 257px;
              border: 0;
            }
          }  
          h4 {
            margin-bottom:1.2rem;
          }       
        }
        .wp-block-column.contact-form {
          @media (min-width: 992px) {
            padding-left: 2rem;
          }
          .wpcf7 {            
            .wpcf7-form {
              label {
                display:block;
              }
            }
          }
        }
      }
    }
  }
  /**Custom style for pages**/
  /**About Block**/ 
  .about-highlight {
    padding-bottom:2rem;
    .wp-block-group__inner-container {
      max-width:571px;
    }      
  }
  .about-services {
    background:#F8F8FA;
    padding-top: 34px;
    padding-bottom:34px;
    max-width: 100%;  
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom:75px;
    }
    .wp-block-group__inner-container {
      .about-services-grid {    
        .wp-block-image {
          width: 62px!important;
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
  .about-team {
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
  .about-vision {
    padding-top: 34px;
    padding-bottom:34px;
    background:#F8F8FA;
    max-width:100%;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom:75px;
    }
    .about-vision-heading {
      .wp-block-group__inner-container {
        max-width:539px;
        margin:0 auto;
        margin-bottom:3rem;
      }
    }
    .about-vision-grid {
      .wp-block-column {
        margin-bottom:1.5rem;
        h5 {
          margin-bottom:1.2rem;
        }
      }      
    }
  }
  .about-services-two {
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
  /**Services Page **/
  .services-highlight {
    padding-bottom:2rem;
    .wp-block-group__inner-container {
      max-width:571px;
    } 
  }
  .hero-services {
    max-width: 100%;
    padding-top: 34px;
    padding-bottom:34px;
    @media (min-width: 992px) {
      padding-top: 75px;
      padding-bottom:75px;
    }
    .wp-block-columns {
      max-width: 100%;
      .wp-block-column {
        margin-bottom:2rem;
        max-width: 100%;
      }
      align-items: center;
      .wp-block-button {
        width:auto;
        .wp-block-button__link {
          background: var(--brand);  
          border:1px solid transparent;   
          border-color:var(--brand);  
          box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
          transition: all 0.3s ease;  
          margin-right: 0.5rem;
          text-decoration:non;  
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
  .home-services-img-left {
    background:#F8F8FA; 
  }
`;
