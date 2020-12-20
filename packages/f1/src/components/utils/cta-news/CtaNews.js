import React from "react";
import { connect, styled } from "frontity";


function CtaNews() {
  

  return (
    <CtaContainer>
         <form action="" className="d-flex align-items-center">
      <div className="news-email input-wrapper">
        <input
          type="email"
          id="email-news"
          name="email"
          placeholder=" "
        
        />
        
        <label htmlFor="email-news">Enter your email</label>
      </div>
      <button name="round" class="round" aria="subscribe to newsletter">  </button>
    </form>
    </CtaContainer>
   
  );
}

export default connect(CtaNews);



const CtaContainer = styled.div`

.blog-cta {
    width: 100%;
    .news-email {
      max-width: 100%;
      width: 85%;
  
      label {
        top: 20px;
        left: 20px;
        font-size: 1rem;
      }
      input[type="email"] {
        padding: 20px;
      }
    }
    .round {
      width: 60px;
      height: 60px;
    }
  }
.news-email {
    margin-right: 10px;
  }
  .round {
    flex-shrink: 0;
  }

  form .round {
      margin-right: 0;
}

form {
    .round {
      margin-right: 0;
      &::after,
      &::before {
        transform: rotate(-90deg);
      }
      &:hover {
        &::before {
          opacity: 1;
          transform: rotate(-90deg);
        }
        &::after {
          opacity: 0;
        }
      }
  
      &:hover {
        transform: scale(1);
      }
    }
  }

  @media (min-width: 768px) {
    form {
      justify-content: space-between;
    }
  }
  
  @media (min-width: 992px) {
    .blog-cta {
      width: 90%;
    }
  }
  
`;