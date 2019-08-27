import React from 'react';

import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

const Banner = (props) => (
  <BackgroundImage
    className='banner-background'
    fluid={props.data.image.imageFile.childImageSharp.fluid}
  >
    <div className="banner-container">
      <h1>{props.data.title}</h1>
      <h3>{props.data.subtitle}</h3>
      <Link className="btn button-primary" to="/jobs/">{props.button}</Link>
    </div>
  </BackgroundImage>
)

export default Banner
