import React from 'react';
import Img from 'gatsby-image';

const About = (props) => (
  <div className="about-container">
    <h1 className="text-center">{props.data.title}</h1>
    <div className="about-elements">
      <div className="row w-100">
        <div className="col-md-4 about-col">
          <Img
            fluid={props.data.image1.imageFile.childImageSharp.fluid}
            className='about-image'
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
          />
        </div>
      </div>
    </div>
  </div>
)

export default About
