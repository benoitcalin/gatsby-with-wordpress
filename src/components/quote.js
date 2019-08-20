import React from 'react';

import BackgroundImage from 'gatsby-background-image';
import { Button } from 'react-bootstrap'

const Quote = (props) => (
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
    <div className="quote-container">
      <h1>{props.data.title}</h1>
      <h3>{props.data.text}</h3>
      <Button className="btn button-primary" href='/'>{props.button}</Button>
    </div>
  </BackgroundImage>
)

export default Quote
