import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const Archive = () => (
    <StaticQuery
        query={graphql`
            query {
                allWordpressPost {
                    edges {
                        node {
                            date
                            title
                            excerpt
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
                <aside>
                    <h1>Archive</h1>
                </aside>

            </>
        )} 
    />
)

export default Archive
