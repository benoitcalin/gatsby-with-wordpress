import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import React from "react"

const Header = () => {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle('open')
  }

  const coloredUrl = (relativeUrl) => {
    if (window.location.pathname === relativeUrl) {
      return 'colored-link'
    }
  }

  return (
    <StaticQuery
      query={QUERY}
      render={data => {
        const logo = data.wpgraphql.page.page_home.logo

        return (
          <div className='header'>
            <div className="header-logo">
              <Img
                fluid={logo.imageFile.childImageSharp.fluid}
                alt={logo.alt}
                loading='auto'
              />
            </div>
            <div className='header-links'>
              <Link className={coloredUrl('/')} to='/'>CONCEPT</Link>
              <Link className={coloredUrl('/jobs')} to='/jobs'>METIERS</Link>
              <Link className={coloredUrl('/contact')} to='/jobs'>CONTACT</Link>
              <Link className={coloredUrl('/partnership')} to='/jobs'>DEVENIR PARTENAIRE</Link>
            </div>
            <div
              id="nav-icon1"
              onClick={handleClick}
              // type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-main-collapse"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbar-main-collapse"
            >
              {/* <Link>CONCEPT</Link>
              <Link>METIERS</Link>
              <Link>CONTACT</Link>
              <Link>DEVENIR PARTENAIRE</Link> */}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Header

const QUERY = graphql`
  query GET_LOGO {
    wpgraphql {
      page(id: "cGFnZToxNjc=") {
        page_home {
          logo {
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
`
