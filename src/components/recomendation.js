import React from 'react';
import Img from 'gatsby-image';

const Recomendation = (props) => {
  return (
    <div className="recomendation-container">
      <div className="recomendation-title">
        <Img
          fluid={props.image}
          className='recomendation-image'
        />
        <div className="recomendation-person">
          <h5>{props.name}</h5>
        </div>
      </div>
      <div className='recomendation-quote-cont'>
        <img
          src="https://metroboulododo.fr/wp-content/uploads/2019/09/quotes.png"
          alt='quotes'
          className="quotes recomendation-quotes"
        />
      </div>
      <div className='recomendation-text'>
        <p className='text-center'>{props.text1}</p>
        <br />
        <p className='text-center'><strong>{props.text2}</strong></p>
        <p className='text-center'>{props.text3}</p>
      </div>
    </div>
  )
}

export default Recomendation



