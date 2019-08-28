import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby';

import Layout from "../components/layout"
import Card from "../components/card"

const Jobs = () => (
  <Layout>
    <StaticQuery
      query={QUERY}
      render={data => {
        const jobs = data.wpgraphql.posts.edges

        return (
          <div>
            <div className="follow-up-links">
              <div>
                <Link to='/'>Accueil</Link> > <span>Nos Métiers</span>
              </div>
            </div>
            <div className="jobs-container">
              <h2>Trouvez le métier qui vous intéresse</h2>
              <div className="row">
                {jobs.map((job) => <Card job={job} key={job.node.slug}/>)}
              </div>
            </div>
          </div>
        )
      }}
      />
  </Layout>
)

export default Jobs

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

