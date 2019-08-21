import React from "react"
import { graphql, StaticQuery } from 'gatsby';
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

const Jobs = () => (
  <Layout>
    <StaticQuery
      query={QUERY}
      render={data => {
        const jobs = data.wpgraphql.posts.edges

        return (
          <div className="jobs-container">
            <h1 className="text-center">Trouvez le métier qui vous intéresse</h1>
            <div className="row">
              {jobs.map((job) => <Card job={job} key={job.node.slug}/>)}
            </div>
          </div>
        )
      }}
    />
  </Layout>
)

const QUERY = graphql`
  query METIERS {
    wpgraphql {
      posts {
        edges {
          node {
            slug
            jobs {
              card {
                title
                image {
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Jobs
