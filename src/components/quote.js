import React from 'react';
// import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const Quote = (props) => (
  // <div>
  //   {props.data.image.altText}
  // </div>
  <BackgroundImage
    style={{ height: '100vh', width: '100vw', background: 'fit' }}
    fluid={props.data.image.imageFile.childImageSharp.fluid}
  >
    <h1>This is Quote</h1>
  </BackgroundImage>
)

export default Quote
