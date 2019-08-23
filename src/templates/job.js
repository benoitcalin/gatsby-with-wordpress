import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import Skill from "../components/skill"

// import SEO from "../components/seo"
const Job = (props) => {
  const job = props.pageContext.job.page;
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
              <Skill title={job.presentation.skills.list.skill1} />
              <Skill title={job.presentation.skills.list.skill2} />
              <Skill title={job.presentation.skills.list.skill3} />
              <Skill title={job.presentation.skills.list.skill4} />
            </div>
          </div>
        </div>
        <div className="job-second-row row">
          <div className="col-sm">
            <Link className="btn button-primary" to="/jobs/">TESTER CE METIER</Link>
          </div>
          <div>

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
//       list {
//         skill1
//         skill2
//         skill3
//         skill4
//       }
//     }
//   }
  // >>>>>
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
