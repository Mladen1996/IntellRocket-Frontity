import React from "react";
import Button from "../utils/button/Button";
import { connect, styled } from "frontity";

function JobPosition() {
  return (
    <PositionContainer>
        <section id="job-list" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h3>Positions Available</h3>
            <div className="job-wrap d-flex ">
              <div className="info-wrap">
                <h4>Marketing Manager</h4>
                <p>Belgrade/ Full Time</p>
              </div>
              <a href="садс">
                <Button name="btn btn-static" label="More Details" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </PositionContainer>
    
  );
}

export default connect(JobPosition);

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
      border-bottom: 1px solid var(--input-text);
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

