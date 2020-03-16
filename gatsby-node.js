exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            parent {
              ... on File {
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.parent.relativeDirectory
    createPage({
      path: `/works/${slug}`,
      component: require(`path`).resolve(`./src/templates/post.js`),
      context: { id: node.id }
    })
  })
}
