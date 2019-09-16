import React from 'react';

import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

const Quote = (props) => (
  <BackgroundImage
    className='quote-background'
    fluid={props.data.image.imageFile.childImageSharp.fluid}
  >
    <div className="quote-container">
      <h1>{props.data.title}</h1>

      <Link className="btn button-primary" to="/jobs/">{props.button}</Link>
    </div>
    <p>{props.data.text}</p>
  </BackgroundImage>
)

export default Quote
