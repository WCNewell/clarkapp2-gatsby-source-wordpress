import React, { Component } from 'react'
// import { graphql } from 'gatsby'
// import PropTypes from 'prop-types'

export default class Post extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                <h1>{data.wordpressPost.title}</h1>
                <img className="post-featured-photo"
                    src={data.wordpressPost.fimg_url}
                    alt="" />
                <small className="featured-photo-description">Photo description</small>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.wordpressPost.content
                    }}
                />
            </div>
        )
    }
}

export const postQuery = graphql`
    query($slug: String!) {
        wordpressPost(slug: { eq: $slug }) {
            title
            slug
            fimg_url
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