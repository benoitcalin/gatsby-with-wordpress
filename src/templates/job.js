import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"

// import SEO from "../components/seo"
const Job = (props) => {
  const job = props.pageContext.job.page;
  return (
    <Layout>
      <div id="job-container">
        <h3>{job.header.title}</h3>
        <Video
          videoSrcURL={job.header.video.url}
          videoTitle={job.header.video.title}
        />
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
