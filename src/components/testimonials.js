import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Top from "../images/assets/top.svg"

class Testimonials extends React.Component {
  hooverEffect = (event) => {
    event.currentTarget.querySelector('path').style.fill = "#3eaaf4";
    event.currentTarget.querySelector('circle').style.stroke = "#3eaaf4";
  }

  endHooverEffect = (event) => {
    event.currentTarget.querySelector('path').style.fill = "#1D547B";
    event.currentTarget.querySelector('circle').style.stroke = "#1D547B";
  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="testimonials-container">
        <h2>{this.props.title}</h2>
        <div className="row testimonials-elements">
            {this.props.testimonials.map((testimonial) => {
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
        <div id="scroll-to-top">
          <Top onMouseOver={this.hooverEffect} onMouseOut={this.endHooverEffect} onClick={this.scrollTop} />
        </div>
        <Link className="btn button-primary" to="/jobs/">{this.props.button}</Link>
      </div>
    )
  }
}

export default Testimonials
