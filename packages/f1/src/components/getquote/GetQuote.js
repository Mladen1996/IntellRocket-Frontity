import React from "react";

import { connect, styled } from "frontity";

function GetQuote({data}) {
   
  return (
    <QuoteContainer>
    <main id="quote-page" className="margin-b-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-wrap">
            <h1>{data[0].contact_title}</h1>
              <p>
                {data[0].contact_subtitle} 
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </main>
    </QuoteContainer>
    
  );
}

export default connect(GetQuote);

const QuoteContainer=styled.div`
#quote-page {
    padding-top: 70px;
}
 #quote-page .text-wrap {
      margin-bottom: 40px;
      text-align: center;
 }
 #quote-page .text-wrap p {
        color: #888;
}
    
  
  @media (min-width: 768px) {
    #quote-page {
      padding-top: 120px;
    }
    #quote-page  .text-wrap {
        margin-bottom: 90px;
    }
    
  }
  
  @media (min-width: 992px) {
    #quote-page {
      padding-top: 180px;
    }
    #quote-page  .text-wrap {
        margin-bottom: 120px;
    }
    
  }
`;

