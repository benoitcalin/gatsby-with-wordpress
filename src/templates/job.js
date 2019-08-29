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
      console.log(image.imageFile.childImageSharp.fluid)
      return image.imageFile.childImageSharp.fluid
    } else { return { src: "https://metroboulododo.fr/wp-content/uploads/2019/08/Ellipse.png"} }
  }

  render() {
    const job = this.props.pageContext.job.page;

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

              <Recomendation
                image={this.getImage(job.testimonials.testimonial1.image)}
                name={job.testimonials.testimonial1.name}
                age={job.testimonials.testimonial1.age}
                text1={job.testimonials.testimonial1.text1}
                text2={job.testimonials.testimonial1.text2}
                text3={job.testimonials.testimonial1.text3}
              />
              <div className="yellow-bar"></div>
              <Recomendation
                image={this.getImage(job.testimonials.testimonial2.image)}
                name={job.testimonials.testimonial2.name}
                age={job.testimonials.testimonial2.age}
                text1={job.testimonials.testimonial2.text1}
                text2={job.testimonials.testimonial2.text2}
                text3={job.testimonials.testimonial2.text3}
              />
              <div className="yellow-bar"></div>
              <Recomendation
                image={this.getImage(job.testimonials.testimonial3.image)}
                name={job.testimonials.testimonial3.name}
                age={job.testimonials.testimonial3.age}
                text1={job.testimonials.testimonial3.text1}
                text2={job.testimonials.testimonial3.text2}
                text3={job.testimonials.testimonial3.text3}
              />

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
