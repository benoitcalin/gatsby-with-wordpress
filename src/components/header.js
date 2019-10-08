import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
export default class Header extends React.Component {
  handleClick = () => (event) => {
    event.currentTarget.classList.toggle('open')
    document.querySelector('.navbar-collapse').classList.toggle('active')
  }

  componentDidMount() {
    const links = document.querySelectorAll('.linky')

    links.forEach(link => {
      if (link.pathname === window.location.pathname) {
        link.classList.add('colored-link')
      }
    })
    if (window.location.pathname.substring(0, 5) === '/jobs') {
      links[1].classList.add('colored-link')
    }
  }
  render() {
    return (
      <StaticQuery
        query={QUERY_HEADER}
        render={data => {
          return(
            <div className='header'>
              <Link to='/'>
                <div className="header-logo">
                  <Img
                    fluid={data.wpgraphql.page.layout.logo.imageFile.childImageSharp.fluid}
                    height='80px'
                    width='170px'
                    alt={data.wpgraphql.page.layout.logo.altText}
                  />
                </div>
              </Link>
              <div className='header-links'>
                <Link className='linky' to='/'>{data.wpgraphql.page.layout.links.link1}</Link>
                <Link className='linky' to='/jobs'>{data.wpgraphql.page.layout.links.link2}</Link>
                <Link className='linky' to='/contact'>{data.wpgraphql.page.layout.links.link3}</Link>
                <Link
                  className='linky'
                  to='/pro/contact'
                  state={{ prof: true }}
                >
                  {data.wpgraphql.page.layout.links.link4}
                </Link>
              </div>
              <div
                id="nav-icon1"
                onClick={this.handleClick()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="navbar-collapse">
                <Link className='linky' to='/'>{data.wpgraphql.page.layout.links.link1}</Link>
                <Link className='linky' to='/jobs'>{data.wpgraphql.page.layout.links.link2}</Link>
                <Link className='linky' to='/contact'>{data.wpgraphql.page.layout.links.link3}</Link>
                <Link
                  className='linky'
                  to='/pro/contact'
                  state={{ prof: true }}
                >
                  {data.wpgraphql.page.layout.links.link4}
                </Link>
              </div>
            </div>
          )
        }}
      />
    )
  }
}

const QUERY_HEADER = graphql`
  query GET_HEADER {
    wpgraphql {
      page(id: "cGFnZTo3MTI=") {
        layout {
          logo {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
          links {
            link1
            link2
            link3
            link4
          }
        }
      }
    }
  }
`
