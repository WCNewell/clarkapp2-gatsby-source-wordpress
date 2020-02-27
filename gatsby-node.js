const path = require('path')

// const queryAll = require('./src/queries/queryAll')

// const slash = require(`slash`)
//^^ Review what slash is for, do I need it?

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {

        graphql(`
        {
            allWordpressPage {
                edges {
                    node {
                        id
                        slug
                        title
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        slug
                    }
                }
            }


        }`).then(result => {

            if(result.errors) {
                console.log(result.errors)
                reject(result.errors)
            }

            result.data.allWordpressPage.edges.forEach(({ node }) => {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/page.js'),
                    context: {
                        slug: node.slug
                    },
                })
            })

            result.data.allWordpressPost.edges.forEach(({ node }) => {
                createPage({
                    path: `posts/${node.slug}`,
                    component: path.resolve('./src/templates/post.js'),
                    context: {
                        slug: node.slug
                    },
                })
            })

            resolve()
        
        })
    })
}


// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     const result = await graphql(`
//         {
//             allWordpressPage {
//                 edges {
//                     node {
//                         id
//                         slug
//                         status
//                         template
//                     }
//                 }
//             }

//             allWordpressPost {
//                 edges {
//                     node {
//                         id
//                         slug
//                         status
//                         template
//                         format
//                     }
//                 }
//             }
//         }
//     `)

//     if (result.errors) {
//         console.error(result.errors)
//     }

//     const { allWordpressPage, allWordpressPost } = result.data

//     const pageTemplate = path.resolve(`./src/templates/page.js`)

//     allWordpressPage.edges.forEach(edge => {

//         createPage({

//             path: `/${edge.node.slug}/`,
//             component: slash(pageTemplate),
//             context: {
//                 id: edge.node.id,
//             },
//         })
//     })

//     const postTemplate = path.resolve(`./src/templates/post.js`)
    
//     allWordpressPost.edges.forEach(edge => {
//         createPage({
//             path: `/${edge.node.slug}/`,
//             component: slash(postTemplate),
//             context: {
//                 id: edge.node.id,
//             },
//         })
//     })
// }