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
const Job = (props) => {
  const job = props.pageContext.job.page;
  const skills = job.presentation.skills.list.split(" // ");
  const formations = job.presentation.skills.text.split(" // ");

  const icons = document.querySelectorAll('svg');
  icons.forEach((icon) => {
    icon.addEventListener('mouseover', (e) => {
    const vector = e.currentTarget.querySelector('path');
    const circle = e.currentTarget.querySelector('circle');
    vector.style.fill = "#3eaaf4";
    circle.style.stroke = "#3eaaf4";
    });

    icon.addEventListener('mouseout', (e) => {
    const vector = e.currentTarget.querySelector('path');
    const circle = e.currentTarget.querySelector('circle');
    vector.style.fill = "#1D547B";
    circle.style.stroke = "#1D547B";
    });
  });

  const scroll = document.querySelector('#scroll-to-top');
  // scroll.addEventListener('click', () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // });

  return (
    <Layout>
      <div id="job-container">

        <div id="ariane">
          Accueil > Nos métiers > Ebénisterie
        </div>
        <div className="job-title">
          <h3>{job.header.title}</h3>
        </div>
        <Video
          videoSrcURL={job.header.video.url}
          videoTitle={job.header.video.title}
        />

        <div className="job-first-row job-row row">
          <div className="job-description col-xs-12 col-md-6">
            <h4>{job.presentation.description.title}</h4>
            {
              job.presentation.description.text.split(" // ").map((paragraph) => <p>{paragraph}</p>)
            }
          </div>
          <div className="job-access-and-skills col-xs-12 col-md-6">
            <h4>{job.presentation.skills.title}</h4>
            <div className="access-list">
              {
                formations.map((formation, index) => {
                  if(index % 2 === 0) {
                    return (
                      <p><strong>{formation}</strong></p>
                    )
                  } else {

                    return (
                      <p className="not-strong">{formation}</p>
                    )
                  }
                })
              }
            </div>
            <div className="skill-list">
              {
                skills.map((skill) => <Skill title={skill} key={skill} />
                )
              }
            </div>
          </div>
        </div>

        <div className="job-second-row job-row row">
          <div className="col-sm">
            <Link className="btn button-primary" to={`/jobs/${props.pageContext.slug}/duration`}>TESTER CE METIER</Link>
          </div>
          <h3>Partagez à vos contacts</h3>
          <Facebook id="facebook-icon" />
          <Mail id="mail-icon" />
        </div>

        <div className="job-third-row job-row row">
          <h4>{job.market.title}</h4>
          <div className="job-market">
            <div className="job-market-content">
              <Img className="job-image"
                fluid={job.market.image.imageFile.childImageSharp.fluid}
              />
            </div>
            <div className="job-market-content">
              {
                job.market.text.split(" // ").map((text) => <p>{text}</p>)
              }
            </div>
          </div>
        </div>

        <div className="job-fourth-row job-row row">
          <h3>{job.testimonials.title}</h3>
          <div className="recomendation-list">

            <Recomendation
              image={job.testimonials.testimonial1.image.imageFile.childImageSharp.fluid}
              name={job.testimonials.testimonial1.name}
              age={job.testimonials.testimonial1.age}
              text1={job.testimonials.testimonial1.text1}
              text2={job.testimonials.testimonial1.text2}
              text3={job.testimonials.testimonial1.text3}
            />
            <div className="yellow-bar"></div>
            <Recomendation
              image={job.testimonials.testimonial2.image.imageFile.childImageSharp.fluid}
              name={job.testimonials.testimonial2.name}
              age={job.testimonials.testimonial2.age}
              text1={job.testimonials.testimonial2.text1}
              text2={job.testimonials.testimonial2.text2}
              text3={job.testimonials.testimonial2.text3}
            />
            <div className="yellow-bar"></div>
            <Recomendation
              image={job.testimonials.testimonial3.image.imageFile.childImageSharp.fluid}
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
            <Top />
          </div>
          <div className="col-sm">
            <Link className="btn button-primary" to={`/jobs/${props.pageContext.slug}/duration`}>TESTER CE METIER</Link>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Job
