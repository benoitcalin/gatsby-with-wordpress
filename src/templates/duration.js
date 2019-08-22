import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const Duration = (props) => (
  <Layout>
    <h1 style={{ paddingTop: '100px' }}>{props.pageContext.slug}</h1>
    <h5>{props.pageContext.title}</h5>
    gnangn
  </Layout>
)

export default Duration
