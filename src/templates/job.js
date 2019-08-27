import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import Skill from "../components/skill"
import Img from 'gatsby-image'

// import SEO from "../components/seo"
const Job = (props) => {
  const job = props.pageContext.job.page;
  const skills = job.presentation.skills.list.split(" // ");
  return (
    <Layout>
      <div id="job-container">

        <div id="ariane">
          Accueil > Nos métiers > Ebénisterie
        </div>

        <h3>{job.header.title}</h3>
        <Video
          videoSrcURL={job.header.video.url}
          videoTitle={job.header.video.title}
        />

        <div className="job-first-row row">
          <div className="job-description col-xs-12 col-md-6">
            <h4>{job.presentation.description.title}</h4>
            <p>{job.presentation.description.text}</p>
          </div>
          <div className="job-access-and-skills col-xs-12 col-md-6">
            <h4>{job.presentation.skills.title}</h4>
            <p>{job.presentation.skills.text}</p>
            <div className="skill-list">
              {
                skills.map((skill) => <Skill title={skill} key={skill} />
                )
              }
            </div>
          </div>
        </div>

        <div className="job-second-row row">
          <div className="col-sm">
            <Link className="btn button-primary" to={`/jobs/${props.pageContext.slug}/duration`}>TESTER CE METIER</Link>
          </div>
        </div>

        <div className="job-third-row row">
          <h4>{job.market.title}</h4>
          <div className="job-market">
            <div className="job-market-content">
              <Img className="job-image"
                fluid={job.market.image.imageFile.childImageSharp.fluid}
              />
            </div>
            <div className="job-market-content">
              <p>{job.market.text}</p>
            </div>
          </div>
        </div>

        <div className="job-fourth-row row">
          <h3>{job.testimonials.title}</h3>
          <div className="testimonial-list">


          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Job

// page {
//   header {
//     title
//     video {
//       title
//       url
//     }
//   }
//   presentation {
//     description {
//       title
//       text
//     }
//     skills {
//       title
//       text
//       list
//     }
//   }
//   market {
//     title
//     text
//     image {
//       altText
//       sourceUrl
//       imageFile {
//         childImageSharp {
//           fluid(maxWidth: 1000) {
//             src
//             srcSet
//             aspectRatio
//             sizes
//             base64
//           }
//         }
//       }
//     }
//   }
// >>>>>>>>>>>>>>>>>>>>
//   testimonials {
//     title
//     testimonial1 {
//       name
//       age
//       text1
//       text2
//       text3
//     }
//     testimonial2 {
//       name
//       age
//       text1
//       text2
//       text3
//     }
//     testimonial3 {
//       name
//       age
//       text1
//       text2
//       text3
//     }
//   }
// }
