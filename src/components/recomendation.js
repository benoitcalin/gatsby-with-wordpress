import React from 'react';
import Img from 'gatsby-image';

const Recomendation = (props) => {
  return (
    <>
      <div className="yellow-bar"></div>
      <div className="recomendation-container">
        <div className="recomendation-title">
          <Img
            fluid={props.image}
            className='recomendation-image'
          />
          <div className="recomendation-person">
            <h5>{props.name}</h5>
            {/* <h5>{props.age}</h5> */}
          </div>
        </div>
        <img
          src="https://metroboulododo.fr/wp-content/uploads/2019/08/quotes.png"
          alt='quotes'
          className="quotes recomendation-quotes"
        />
        <p>{props.text1}</p>
        <p><strong>{props.text2}</strong></p>
        <p>{props.text3}</p>
      </div>
    </>
  )
}

export default Recomendation



