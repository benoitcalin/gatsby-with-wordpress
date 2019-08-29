import { Link, StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'
import React from "react"

export default class Header extends React.Component {
  handleClick = () => (event) => {
    event.currentTarget.classList.toggle('open')
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
        query={QUERY}
        render={data => {
          // const logo = data.wpgraphql.page.page_home.logo

          return (
            <div className='header'>
                <Link to='/'>
              <div className="header-logo">
                  {/* <Img
                    fluid={logo.imageFile.childImageSharp.fluid}
                    alt={logo.alt}
                    loading='auto'
                  /> */}
                    <img
                      src="https://metroboulododo.fr/wp-content/uploads/2019/08/Logo.png"
                      alt='logo'
                    />

              </div>
                </Link>
              <div className='header-links'>
                <Link className='linky' to='/'>CONCEPT</Link>
                <Link className='linky' to='/jobs'>METIERS</Link>
                <Link className='linky' to='/contact'>CONTACT</Link>
                <Link
                  className='linky'
                  to='/pro/contact'
                  state={{ prof: true }}
                >
                  DEVENIR PARTENAIRE
                </Link>
              </div>
              <div
                id="nav-icon1"
                onClick={this.handleClick()}
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
}

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
