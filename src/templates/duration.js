import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout";
// import SEO from "../components/seo"

const Duration = (props) => {
  const duration = props.pageContext.job.duration
  return (
    <Layout>
      <div className="duration-container">
        <h2>{duration.title}</h2>
        <h5 className="duration-subtitle">{duration.subtitle}</h5>
        <div className="row">
          <div className="col"></div>
          <div className="col-md-4 col-sm-5 col-xs-12 duration-col">
            <div className="duration-card-container" style={{ border: '1px solid #3EAAF4'}}>
              <h5>{duration.card1.title}</h5>
              <h5 style={{ marginBottom: '15px', color: '#3EAAF4'}}>{duration.card1.subtitle}</h5>
              <Img
                style={{
                  borderRadius: '50%',
                  margin: '0',
                  width: '110px',
                  height: '110px',
                }}
                  fluid={duration.card1.image.imageFile.childImageSharp.fluid}
              />
              <p>{duration.card1.text}</p>
              <Link
                to={`/jobs/${props.pageContext.slug}/duration/form`}
                className="btn button-primary"
                style={{ width: '70%', margin: '10px' }}
                state={{
                  duration: `${duration.card1.subtitle}`,
                  job: `${props.pageContext.job.card.title}`,
                  pack: `${duration.card1.title}`
                }}
              >
                {duration.card1.button}
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-5 col-xs-12 duration-col">
            <div className="duration-card-container" style={{ border: '1px solid #F7BA45' }}>
              <h5>{duration.card2.title}</h5>
              <h5 style={{ marginBottom: '15px', color: '#F7BA45' }}>{duration.card2.subtitle}</h5>
              <Img
                style={{
                  borderRadius: '50%',
                  margin: '0',
                  width: '110px',
                  height: '110px',
                }}
                fluid={duration.card2.image.imageFile.childImageSharp.fluid}
              />
              <p>{duration.card2.text}</p>
              <Link
                to={`/jobs/${props.pageContext.slug}/duration/form`}
                className="btn button-primary"
                style={{ width: '70%', margin: '10px'}}
                state={{
                  duration: `${duration.card2.subtitle}`,
                  job: `${props.pageContext.job.card.title}`,
                  pack: `${duration.card2.title}`
                }}
              >
                {duration.card2.button}
              </Link>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Duration

/// SCHEMA
// duration {
//   title
//   subtitle
//   card1 {
//     title
//     subtitle
//     text
//     image {
//       altText
//       sourceUrl
//       imageFile {
//       }
//     }
//     button
//   }
//   card2 {
//     title
//     subtitle
//     text
//     image {
//       altText
//       sourceUrl
//       imageFile {
//         }
//       }
//     }
//     button
//   }
// }
