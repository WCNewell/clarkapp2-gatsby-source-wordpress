import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const Archive = () => (
  <StaticQuery
    render={data => (
        <aside>
            <h3>Archive</h3>
        </aside>
    )}
  />
)

export default Archive
