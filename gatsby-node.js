/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


/* exports.createPages = async function ({ actions, graphql }) {
 *   const { data } = await graphql(`
 *     query {
 *       allFile(filter: {relativeDirectory: {eq: "states_data"}}){
 *         edges{
 *           node {
 *             relativePath
 *             name
 *           }
 *         }
 *       }
 *     }
 *   `)
 * 
 *   data.allFile.edges.forEach(edge => {
 *     const slug = edge.node.name
 *     const state = require("./src/data/" + edge.node.relativePath)
 *     actions.createPage({
 *       path: slug,
 *       component: require.resolve("./src/templates/state-info.js"),
 *       context: { state }
 *     })
 *   })
 * } */
