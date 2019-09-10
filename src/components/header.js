import { Link, StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'
import React from "react"

export default class Header extends React.Component {
  handleClick = () => (event) => {
    event.currentTarget.classList.toggle('open')
    console.log(document.querySelector('.navbar-collapse'))
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
      <div className='header'>
          <Link to='/'>
        <div className="header-logo">
            <img
              src="https://metroboulododo.fr/wp-content/uploads/2019/09/Logo.png"
              alt='logo metro boulo dodo'
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
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-collapse">
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
      </div>
    )
  }
}
