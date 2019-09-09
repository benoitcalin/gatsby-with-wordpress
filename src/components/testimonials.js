import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Testimonials = (props) => (
  <div className="testimonials-container">
    <h2>{props.title}</h2>
    <div className="row testimonials-elements">
        {props.testimonials.map((testimonial) => {
          return (
            <div className="col-md-4 h-100 testimonial-col" key={testimonial.title}>
              <div className="testimonial-container">
                <img
                  src="https://metroboulododo.fr/wp-content/uploads/2019/09/quotes.png"
                  alt='quotes'
                  className="quotes"
                />
                <p className="text-center d-flex align-items-center" style={{minHeight: '90px'}}>
                  {testimonial.text}
                </p>
                <Img
                  fluid={testimonial.image.imageFile.childImageSharp.fluid}
                  className='testimonial-image'
                />
                <h5 className="text-center" style={{ width: '95%' }}>{testimonial.title}</h5>
              </div>
            </div>
          );
        })}
    </div>
    <Link className="btn button-primary" to="/jobs/">{props.button}</Link>
  </div>
)

export default Testimonials
