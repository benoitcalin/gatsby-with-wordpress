import React from 'react';
// import Img from 'gatsby-image';

const Recomendation = (props) => {
  const job = props.pageContext.job.page;
  render (
    <div className="recomendation-container">
      <Img
        fluid={testimonial.image.imageFile.childImageSharp.fluid}
        className='recomendation-image'
      />
      <h4>{props.name}</h4>
      <h5>{props.age}</h5>
      <p>{props.text1}</p>
      <p><strong>{props.text2}</strong></p>
      <p>{props.text3}</p>
    </div>
  )
}

export default Recomendation



