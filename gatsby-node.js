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

  /// 3. Create each job #show
  const results = await graphql(`
    {
      wpgraphql {
        posts {
          edges {
            node {
              jobs {
                slug
                title
              }
            }
          }
        }
      }
    }
  `)
  results.data.wpgraphql.posts.edges.forEach(edge => {
    const job = edge.node.jobs
    createPage({
      path: `/jobs/${job.slug}/`,
      component: require.resolve("./src/templates/job.js"),
      context: {
        slug: job.slug,
        title: job.title,
      },
    })
    createPage({
      path: `/jobs/${job.slug}/duration`,
      component: require.resolve("./src/templates/duration.js"),
      context: {
        slug: job.slug,
        title: job.title,
      },
    })
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
