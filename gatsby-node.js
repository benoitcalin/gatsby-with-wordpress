exports.createPages = async ({ actions: { createPage }, graphql }) => {
  /// 1. Create page Home
  createPage({
    path: `/bonjour/`,
    component: require.resolve("./src/templates/home-page.js"),
  })

  /// 2. Create page job #index
  createPage({
    path: `/jobs/`,
    component: require.resolve("./src/templates/jobs.js"),
  })

  /// 3. Create each job pages
  const results = await graphql(QUERY)
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
    /// 3.3. Create each job form
    createPage({
      path: `/jobs/${job.slug}/duration/form`,
      component: require.resolve("./src/templates/form.js"),
      context: {
        slug: job.slug,
        title: job.title,
      },
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
                  }
                  presentation {
                    description {
                      title
                      text
                    }
                    skills {
                      title
                      text
                      list {
                        skill1
                        skill2
                        skill3
                        skill4
                      }
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
                      name
                      age
                      text1
                      text2
                      text3
                    }
                    testimonial2 {
                      name
                      age
                      text1
                      text2
                      text3
                    }
                    testimonial3 {
                      name
                      age
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
