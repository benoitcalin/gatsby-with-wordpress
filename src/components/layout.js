import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import '../styles/styles.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className='site-container'>
        <main>
          <div style={{ paddingTop: '100px' }}></div>
          {children}
        </main>
        <footer className="footer">
          <div className='d-flex align-items-center' style={{marginLeft: '20px'}}>
            <p>© {new Date().getFullYear()}, Metroboulododo</p>
          </div>
          <div className='d-flex align-items-center' style={{ marginRight: '20px' }}>
            <p>Mentions Légales</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
