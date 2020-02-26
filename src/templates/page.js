import React, { Component } from 'react'

export default class Page extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                <h1>{data.wordpressPage.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.wordpressPage.content
                    }}
                />
            </div>
        )
    }
}

export const pageQuery = graphql`
    query ($slug: String!) {
        wordpressPage(slug: { eq: $slug }) {
            title
            slug
            content
        }
    }
`

// class Post extends Component {
//     render() {
//         const post = this.props.data.wordpressPost

//         return (
//             <>
//                 <h1>{post.title}</h1>
//                 <div>{post.content}</div>
//             </>
//         )
//     }
// }

// Post.propTypes = {
//     data: PropTypes.object.isRequired,
//     edges: PropTypes.array,
// }

// export default Post

// export const postQuery = graphql`
//     query($id: String!) {
//         wordpressPost(id: { eq: $id }) {
//             title
//             content
//         }
//     }
// `