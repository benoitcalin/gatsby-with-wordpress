exports.createPages = async ({ actions: { createPage }, graphql }) => {
  /// 1. Create page Home
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/home-page.js"),
  })

  createPage({
    path: `/cgu`,
    component: require.resolve("./src/templates/cgu.js"),
  })

  // GET JOBS INFOS
  const results = await graphql(QUERY)

  /// 2. Create page job #index
  createPage({
    path: `/jobs/`,
    component: require.resolve("./src/templates/jobs.js"),
    context: {
      jobs: results.data.wpgraphql.posts.edges
    }
  })

  /// 3. Create each job pages
  results.data.wpgraphql.posts.edges.forEach(edge => {
    const job = edge.node.jobs
    /// 3.1. Create each job Show
    createPage({
      path: `/jobs/${job.slug}/`,
      component: require.resolve("./src/templates/job.js"),
      context: {
        slug: job.slug,
        title: job.title,
        id: edge.node.id,
        job: job,
      },
    })
    /// 3.2. Create each job duration
    createPage({
      path: `/jobs/${job.slug}/duration`,
      component: require.resolve("./src/templates/duration.js"),
      context: {
        slug: job.slug,
        title: job.title,
        job: job,
      },
    })
  //   /// 3.3. Create each form
    createPage({
      path: `/contact/`,
      component: require.resolve("./src/templates/form.js"),
      context: {
        slug: job.slug,
        title: job.title,
      },
    })

    createPage({
      path: `/pro/contact/`,
      component: require.resolve("./src/templates/form.js"),
    })
  })
}

// Config in order to access images, mandatory
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

const QUERY = `
    {
      wpgraphql {
        posts {
          edges {
            node {
              id
              jobs {
                slug
                title
                card {
                  title
                  image {
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
                }
                duration {
                  title
                  subtitle
                  card1 {
                    title
                    subtitle
                    text
                    image {
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
                    button
                  }
                  card2 {
                    title
                    subtitle
                    text
                    image {
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
                    button
                  }
                }
                page {
                  header {
                    title
                    video {
                      title
                      url
                    }
                    image {
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
                  }
                  presentation {
                    description {
                      title
                      text
                    }
                    skills {
                      title
                      text
                      list
                    }
                  }
                  market {
                    title
                    text
                    image {
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
                  }
                  testimonials {
                    title
                    testimonial1 {
                      image {
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
                      name
                      text1
                      text2
                      text3
                    }
                    testimonial2 {
                      image {
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
                      name
                      text1
                      text2
                      text3
                    }
                    testimonial3 {
                      image {
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
                      name
                      text1
                      text2
                      text3
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
