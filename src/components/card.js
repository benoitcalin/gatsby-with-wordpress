import React from 'react';
import { Link } from "gatsby"
import Img from 'gatsby-image'

const Card = (props) => (
  <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 card-col">
    <Link to={`/jobs/${props.job.node.jobs.slug}`} className="job-card">
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
        fluid={props.job.node.jobs.card.image.imageFile.childImageSharp.fluid}
      />
      <div className="card-text">
        <h6>{props.job.node.jobs.card.title}</h6>
      </div>
    </Link>
  </div>
)

export default Card
