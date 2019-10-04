import React from 'react';
import Img from 'gatsby-image';

const About = (props) => (
  <div className="about-container">
    <h2>{props.data.title}</h2>
    <div className="about-elements">
      <div className="row w-100">
        <div className="col-md-4 about-col">
          <Img
            fluid={props.data.image1.imageFile.childImageSharp.fluid}
            className='about-image'
            alt={props.data.image1.altText}
          />
        </div>
        <div className="col-md-4 about-col">
          <div className="about-texts">
            <p>{props.data.text1}</p>
            <br/>
            <p>{props.data.text2}</p>
          </div>
        </div>
        <div className="col-md-4 about-col">
          <Img
            fluid={props.data.image2.imageFile.childImageSharp.fluid}
            className='about-image'
            alt={props.data.image2.altText}
          />
        </div>
      </div>
    </div>
  </div>
)

export default About
