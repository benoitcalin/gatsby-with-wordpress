import React from 'react';

import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

const Banner = (props) => (
  <BackgroundImage
    style={{
      height: '100vh',
      width: '100vw',
      background: 'fit',
      backgroundPosition: 'top',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
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
