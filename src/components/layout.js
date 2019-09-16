import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Facebook from "../images/assets/facebook-2.svg"
import Linkedin from "../images/assets/linkedin.svg"
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

          <div className="logos-links">
            <Link to='https://www.facebook.com/Metroboulododo-2182079021879622/'>
              <Facebook/>
            </Link>
            <Link to='https://www.linkedin.com/company/20288997'>
              <Linkedin/>
            </Link>
          </div>

          <div className='d-flex align-items-center footer-right' style={{ marginRight: '20px' }}>
            <Link to='/'>Mentions Légales</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/cgu'>CGU</Link>
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
