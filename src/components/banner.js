import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import Bottom from "../images/assets/bottom.svg"

const Banner = (props) => (
  <BackgroundImage
    className='banner-background'
    fluid={props.data.image.imageFile.childImageSharp.fluid}
  >
    <div className="banner-container">
      <h1>{props.data.title}</h1>
      <h3>{props.data.subtitle}</h3>
      <Link className="btn button-primary" to="/jobs/">{props.button}</Link>
      <Bottom className='bottom-arrow' />
    </div>
  </BackgroundImage>
)

export default Banner
