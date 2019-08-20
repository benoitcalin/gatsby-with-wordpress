import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout'
import Banner from '../components/banner'
import About from '../components/about'
import Quote from '../components/quote'
import Testimonials from '../components/testimonials'
import Features from '../components/features'

const HomePage = () => (
  <Layout>
    <StaticQuery
      query={QUERY}
      render={data => {
        const banner = data.wpgraphql.page.page_home.banner
        const about = data.wpgraphql.page.page_home.about
        const quote = data.wpgraphql.page.page_home.quote
        const testimonials = data.wpgraphql.page.page_home.testimonials
        const features = data.wpgraphql.page.page_home.features
        const button = data.wpgraphql.page.page_home.buttonText

        return (
          <div>
            <Banner data={banner} button={button} />
            <About data={about} />
            <Quote data={quote} button={button} />
            <Features data={features} />
            <Testimonials data={testimonials} button={button} />
          </div>
        )
      }}
    />
  </Layout>
)

export default HomePage;

const QUERY = graphql`
  query GET_PAGE {
    wpgraphql {
      page(id: "cGFnZToxNjc=") {
        title
        page_home {
          buttonText
          banner {
            title
            subtitle
            image {
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
          about {
            title
            text2
            text1
            image1 {
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
            image2 {
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
          features {
            feature1 {
              title
              text
              image {
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
            feature2 {
              image {
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
              text
              title
            }
            feature3 {
              image {
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
              text
              title
            }
          }
          quote {
            image {
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
            text
            title
          }
          testimonials {
            testimonial1 {
              image {
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
              text
              title
            }
            testimonial2 {
              title
              text
              image {
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
            testimonial3 {
              title
              text
              image {
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
            title
          }
        }
      }
    }
  }
`


