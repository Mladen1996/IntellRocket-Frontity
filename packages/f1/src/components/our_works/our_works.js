import React from "react";
import { connect, styled } from "frontity";

import SectionSlider from "../section_slider/SectionSlider";
import WorkList from "../work_list/WorkList";

class OurWorks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projects:[],
            tags:[]
        };
      }
    componentDidMount() {
        fetch("https://intellrocket.com/wp-json/wp/v2/work/")
          .then(res => res.json())
          .then(
            (result) => {
               
                const data=result;
                console.log(data);
                this.setState({
                    projects:data
                });

              
            },
            
          )
         
      }
    render(){
        const projectsData=this.state.projects;
        const page=this.props.page;
     
        return(
          <>
          {
              page=="work" ?
              (
                <WorkList data={projectsData} />
              ) 
              :
              (
                <SectionSlider title="Our Works" data={projectsData} path="work/retyre" />
              )
          }  
            
          </> 
             
            
        );
    }
}

export default OurWorks;