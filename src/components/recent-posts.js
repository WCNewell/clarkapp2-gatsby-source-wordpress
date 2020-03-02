import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

const RECENT_POSTS_QUERY = graphql`
    query RecentPostsQuery {
        allWordpressPost(filter: {status: {eq: "publish"}}, limit: 5) {
            edges {
                node {
                    id
                    slug
                    date
                    title
                    jetpack_featured_media_url
                    excerpt
                }
            }
        }
    }
`

const RecentPosts = () => (
    <StaticQuery
        query={RECENT_POSTS_QUERY}
        render={data => {
            return (
                <div className="recent-posts-widget">
                    <h3>Recent Posts</h3>
                    {
                        data.allWordpressPost.edges.map(edge => (

                            <div className="recent-posts-card" key={edge.node.id}>
                                <small className="post-date">{ new Date(edge.node.date).toDateString() }</small>
                                <Link to={`/posts/${edge.node.slug}`} className="post-title">{edge.node.title}</Link>
                                <img className="post-thumbnail" src={edge.node.jetpack_featured_media_url} />
                                <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                            </div>

                        ))
                    }
                </div>
            )
        }} 
    />
)

export default RecentPosts
