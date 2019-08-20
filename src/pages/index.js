import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/styles.scss'

const QUERY = graphql`
  query blablabla {
    wpgraphql {
      generalSettings {
        title
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={QUERY}
      render={data => {
        console.log(data.wpgraphql.generalSettings.title)
        return (
          <div className="row">
            <div className="col-3">
              <h1 className="">
                {data.wpgraphql.generalSettings.title}
              </h1>
            </div>
          </div>
        )
      }}
    />
    <h1>dddHi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Welcome to your new Gatsby site.</p>

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
