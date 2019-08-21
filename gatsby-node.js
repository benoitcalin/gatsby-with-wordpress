// Create Home Page
exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/bonjour/`,
    component: require.resolve("./src/templates/home-page.js"),
  })
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  /// 1. Create page job #index
  createPage({
    path: `/jobs/`,
    component: require.resolve("./src/templates/jobs.js"),
  })

  /// 2. Create each job #show
  const results = await graphql(`
    {
      wpgraphql {
        posts {
          edges {
            node {
              jobs {
                slug
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
