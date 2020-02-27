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
                                <p>{edge.node.excerpt}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }} 
    />
)

export default RecentPosts
