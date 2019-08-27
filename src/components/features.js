import React from 'react';
import Img from 'gatsby-image';

const Features = (props) => (
  <div className="features-container">
    <h2>{props.title}</h2>
    <div className='row features-row'>
    {props.data.map((feature) => {
      return (
        <div className="col-md-4 d-flex align-items-center justify-content-center" key={feature.title}>
          <div className="feature-container">
            <Img
              fluid={feature.image.imageFile.childImageSharp.fluid}
              className='feature-image'
            />
            <div className="feature-text">
              <h5 className="text-center">{feature.title}</h5>
              <p className="text-center">{feature.text}</p>
            </div>
          </div>
        </div>
      );
    })}
    </div>
  </div>
)

export default Features
