import path from "path"
import slugify from "@sindresorhus/slugify"
// const wrapPageElement

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets")
        // ui: path.resolve(__dirname, "src/ui"),
      }
    }
  })
}

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: `/post/${slugify(node.frontmatter.title)}`
    })
  }
}

export const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/ui/templates/post.js`)
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  result.data.allMdx.nodes.forEach(({ id, fields: { slug } }) => {
    createPage({
      path: slug,
      component: postTemplate,
      context: {
        id
      }
    })
  })
}
