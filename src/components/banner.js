import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import Bottom from "../images/assets/bottom.svg"

class Banner extends React.Component {
  scrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy({
        top: pageHeight,
        left: 100,
        behavior: 'smooth'
      }
    );
  }

  render() {
    return (
      <BackgroundImage
        className='banner-background'
        fluid={this.props.data.image.imageFile.childImageSharp.fluid}
      >
        <div className="banner-container">
          <h1>{this.props.data.title}</h1>
          <h3>{this.props.data.subtitle}</h3>
          <Link className="btn button-primary" to="/jobs/">{this.props.button}</Link>
          <Bottom className='bottom-arrow' onClick={this.scrollDown} />
        </div>
      </BackgroundImage>
    )
  }
}

export default Banner
