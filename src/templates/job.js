import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Skill from "../components/skill"
import Img from 'gatsby-image'
import Recomendation from "../components/recomendation"
import Facebook from "../images/assets/facebook.svg"
import Mail from "../images/assets/mail.svg"
import Top from "../images/assets/top.svg"
import BackgroundImage from 'gatsby-background-image';

// import SEO from "../components/seo"
export default class Jobs extends React.Component {
  hooverEffect = (event) => {
    event.currentTarget.querySelector('path').style.fill = "#3eaaf4";
    event.currentTarget.querySelector('circle').style.stroke = "#3eaaf4";
  }

  endHooverEffect = (event) => {
    event.currentTarget.querySelector('path').style.fill = "#1D547B";
    event.currentTarget.querySelector('circle').style.stroke = "#1D547B";
  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  splitText = (text) => {
    if (text) {
      if (Array.isArray(text.split(" // "))) {
        return text.split(" // ")
      } else { return [text] }
    } else { return [""] }
  }

  getImage = (image) => {
    if (image) {
      return image.imageFile.childImageSharp.fluid
    } else { return { src: "https://metroboulododo.fr/wp-content/uploads/2019/09/ellipse-orange.png"} }
  }

  handleVideoPhoto = (video, image) => {
    if (video) {
      return (
        <div className="job-head-video">
          <iframe
            src={video.url}
            title={video.title}
            width="560"
            height="315"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      )
    } else {
      return (
        <BackgroundImage
          className='job-head-image'
          fluid={image.imageFile.childImageSharp.fluid}
        />
      )
    }
  }
  setHtmlInMail = () => {
    if (window) {
      const first = "mailto:mon.ami@gmail.com?subject=Check%20cette%20id%C3%A9e%20de%20reconversion%20!&body=Je%20suis%20tomb%C3%A9%20sur%20cette%20fiche%20m%C3%A9tier%20en%20cherchant%20une%20id%C3%A9e%20de%20reconversion%20sur%20metroboulododo.com%2C%20%C3%A7a%20pourrait%20t'int%C3%A9resser%20%3A%0A"
      const last = window.location.href
      return [first, last].join('')
    }
  }
  openFB = () => {
    if (window) {
      const base = 'https://www.facebook.com/sharer/sharer.php?u='
      const url = window.location.href
      const conc = [base, url].join('')
      window.open(conc, 'sharer', 'toolbar=0,status=0,width=580,height=325')
    }
  }

  render() {
    const job = this.props.pageContext.job.page;
    const testimonials = [job.testimonials.testimonial1, job.testimonials.testimonial2, job.testimonials.testimonial3]

    return (
      <Layout>
        <div className="follow-up-links">
          <div>
            <Link to='/'>Accueil</Link> >
            <Link to='/jobs'> Nos Métiers</Link> >
            <span> {this.props.pageContext.title}</span>
          </div>
        </div>
        <div id="job-container">
          <div className="job-title">
            <h2>{job.header.title}</h2>
          </div>

          {this.handleVideoPhoto(job.header.video, job.header.image)}

          <div className="job-first-row job-row row">
            <div className="job-description col-xs-12 col-md-6">
              <h5>{job.presentation.description.title}</h5>
              <div dangerouslySetInnerHTML={{ __html: ['<p>', job.presentation.description.text, '</p>'].join('') }} />
            </div>
            <div className="job-access-and-skills col-xs-12 col-md-6">
              <h5>{job.presentation.skills.title}</h5>
              <div className="access-list" dangerouslySetInnerHTML={{ __html: ['<p>', job.presentation.skills.text, '</p>'].join('') }}/>
              <div className="skill-list">
                {
                  this.splitText(job.presentation.skills.list).map((skill) => <Skill title={skill} key={skill} />)
                }
              </div>
            </div>
          </div>

          <div className="job-second-row job-row row">
            <div className="col-sm">
              <Link className="btn button-primary" to={`/jobs/${this.props.pageContext.slug}/duration`}>TESTER CE METIER</Link>
            </div>
            <h3>Partagez à vos contacts</h3>
            <a className="fb-share" onClick={this.openFB}>
              <Facebook id="facebook-icon" onMouseOver={this.hooverEffect} onMouseOut={this.endHooverEffect} />
            </a>

            <a href={this.setHtmlInMail()}>
              <Mail id="mail-icon" onMouseOver={this.hooverEffect} onMouseOut={this.endHooverEffect} />
            </a>
          </div>

          <div className="job-third-row job-row row">
            <h5>{job.market.title}</h5>
            <div className="job-market">
              <div className="job-market-content">
                <Img className="job-image"
                  height='250px'
                  width='250px'
                  fluid={job.market.image.imageFile.childImageSharp.fluid}
                />
              </div>
              <div
                className="job-market-content"
                dangerouslySetInnerHTML={{ __html: ['<p>', job.market.text, '</p>'].join('') }}
              />
            </div>
          </div>

          <div className="job-fourth-row job-row row">
            <h3>{job.testimonials.title}</h3>
            <div className="recomendation-list">
              { testimonials.map(testimonial => {
                if (testimonial.name) {
                  return (
                    <Recomendation
                      image={this.getImage(testimonial.image)}
                      name={testimonial.name}
                      age={testimonial.age}
                      text1={testimonial.text1}
                      text2={testimonial.text2}
                      text3={testimonial.text3}
                      key={testimonial.text1}
                    />
                  )
                }
              })}
            </div>
          </div>

          <div className="job-fifth-row job-row row">
            <div id="scroll-to-top">
              <Top onMouseOver={this.hooverEffect} onMouseOut={this.endHooverEffect} onClick={this.scrollTop} />
            </div>
            <div className="col-sm">
              <Link className="btn button-primary" to={`/jobs/${this.props.pageContext.slug}/duration`}>TESTER CE METIER</Link>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}
