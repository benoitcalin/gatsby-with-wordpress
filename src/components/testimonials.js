import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Testimonials = (props) => (
  <div className="testimonials-container">
    <h1 className="text-center">{props.title}</h1>
    <div className="row testimonials-elements">
        {props.testimonials.map((testimonial) => {
          return (
            <div className="col-md-4 h-100 testimonial-col" key={testimonial.title}>
              <div className="testimonial-container">
                <h2>''</h2>
                <p className="text-center">{testimonial.text}</p>
                <Img
                  fluid={testimonial.image.imageFile.childImageSharp.fluid}
                  className='testimonial-image'
                />
                <h5 className="text-center">{testimonial.title}</h5>
              </div>
            </div>
          );
        })}
    </div>
    <Link className="btn button-primary" to="/jobs/">{props.button}</Link>
  </div>
)

export default Testimonials
