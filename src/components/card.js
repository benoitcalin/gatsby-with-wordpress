import React from 'react';
import { Link } from "gatsby"
import Img from 'gatsby-image'

class Card extends React.Component {
  handleImage(image) {
    if (image.imageFile) {
      return image.imageFile.childImageSharp.fluid
    } else { return { src: 'https://metroboulododo.fr/wp-content/uploads/2019/09/bored-man-linear.jpg' } }
  }

  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 card-col">
        <Link to={`/jobs/${this.props.job.node.jobs.slug}`} className="job-card">
          <Img
            style={{
              height: '200px',
              width: '300px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '-100'
            }}
            fluid={this.handleImage(this.props.job.node.jobs.card.image)}
          />
          <div className="card-text">
            <h6>{this.props.job.node.jobs.card.title}</h6>
          </div>
        </Link>
      </div>
    )
  }
}

export default Card
