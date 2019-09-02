import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import Skill from "../components/skill"
import Img from 'gatsby-image'
import Recomendation from "../components/recomendation"
import Facebook from "../images/assets/facebook.svg"
import Mail from "../images/assets/mail.svg"
import Top from "../images/assets/top.svg"

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
    } else { return { src: "https://metroboulododo.fr/wp-content/uploads/2019/08/Ellipse.png"} }
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
          <Video
            videoSrcURL={job.header.video.url}
            videoTitle={job.header.video.title}
            frameborder="0"
            allowfullscreen
          />

          <div className="job-first-row job-row row">
            <div className="job-description col-xs-12 col-md-6">
              <h5>{job.presentation.description.title}</h5>
              {
                this.splitText(job.presentation.description.text).map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              }
            </div>
            <div className="job-access-and-skills col-xs-12 col-md-6">
              <h5>{job.presentation.skills.title}</h5>
              <div className="access-list">
                {
                  this.splitText(job.presentation.skills.text).map((formation, index) => {
                    if(index % 2 === 0) {
                      return (
                        <p key={formation}><strong>{formation}</strong></p>
                      )
                    } else {
                      return (
                        <p className="not-strong" key={formation}>{formation}</p>
                      )
                    }
                  })
                }
              </div>
              <div className="skill-list">
                {
                  this.splitText(job.presentation.skills.list).map((skill) => <Skill title={skill} key={skill} />
                  )
                }
              </div>
            </div>
          </div>

          <div className="job-second-row job-row row">
            <div className="col-sm">
              <Link className="btn button-primary" to={`/jobs/${this.props.pageContext.slug}/duration`}>TESTER CE METIER</Link>
            </div>
            <h3>Partagez à vos contacts</h3>
            <Facebook id="facebook-icon" onMouseOver={this.hooverEffect} onMouseOut={this.endHooverEffect} />
            <Mail id="mail-icon" onMouseOver={this.hooverEffect} onMouseOut={this.endHooverEffect} />
          </div>

          <div className="job-third-row job-row row">
            <h5>{job.market.title}</h5>
            <div className="job-market">
              <div className="job-market-content">
                <Img className="job-image"
                  fluid={job.market.image.imageFile.childImageSharp.fluid}
                />
              </div>
              <div className="job-market-content">
                {
                  job.market.text.split(" // ").map((text) => <p key={text}>{text}</p>)
                }
              </div>
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
              <div className="yellow-bar"></div>
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
