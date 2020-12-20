import React from "react";
import { connect, styled } from "frontity";
import FeaturedMedia from "../featured-media";
import Image from "../image";
import SectionSlider from "../section_slider/SectionSlider";



class RecentPosts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        };
      }
    componentDidMount() {
        fetch("https://intellrocket.com/wp-json/wp/v2/posts/?per_page=5")
          .then(res => res.json())
          .then(
            (result) => {
               
                const data=result;
                console.log(data);
                this.setState({
                    posts:data
                });

              
            },
            
          )
      }
    render(){
        const postsData=this.state.posts;
       /* const allPosts=postsData.map((post)=>{
            return(
                <div class="col-md-4">
            
                <Image imageId={post.featured_media}/>
                <a href={post.link}>
                <h3>{post.title.rendered}</h3>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                </a>
                </div>
            )     
        });*/
        return(
            <SectionSlider title={this.props.title} data={postsData} path="blog/single" />
        );
    }
}

export default RecentPosts;