import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const SecondPage = (props) => (
  <Layout>
    <h1>{props.pageContext.slug}</h1>
  </Layout>
)

export default SecondPage
