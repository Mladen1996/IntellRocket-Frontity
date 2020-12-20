import React from "react";
import { connect, styled } from "frontity";

class Image extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:""
        };
      }
    componentDidMount() {
        fetch("https://intellrocket.com/wp-json/wp/v2/media/"+this.props.imageId)
          .then(res => res.json())
          .then(
            (result) => {
               
                const url=result.guid.rendered;
               
                this.setState({
                    imageUrl:url
                });

              
            },
            
          )
      }
    render(){
       
        return(
        <img src={this.state.imageUrl} />
        );
    }
}

export default Image;