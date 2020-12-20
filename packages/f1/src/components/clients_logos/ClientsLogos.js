import React from "react";
import { connect, styled } from "frontity";
import Image from "../image";


function ClientsLogos({ data}) {
    console.log(data);
    const allLogos=data.map(logo=>{
        return(
            <div class="col-md-2">
                <a href={logo.linklogo}>
                <Image imageId={logo.logo} />
                </a>
                
            </div>
           
        )
    })
    
  return (
    <MyContainer>
        <section id="shared-hero" className="margin-b">
      <div className="container">
        <div className="row">
            <h1>Trusted by clients</h1>
            {allLogos}
        </div>
      </div>
    </section>
    </MyContainer>
    
  );
}

export default ClientsLogos;


const MyContainer=styled.div`
margin-top:100px;
margin-bottom:100px;
.spacing{
    margin-bottom:100px;
}

h1{
    width:100%;
    text-align:center;
    margin-bottom:100px;
}


`;