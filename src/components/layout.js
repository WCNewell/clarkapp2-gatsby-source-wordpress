import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import RecentPosts from './recent-posts'
import './layout.css'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteMetaQuery {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                }
            }
        }
    `)

    return (
        <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
        >
        <html lang="en" />
        </Helmet>
        <Header />
        <RecentPosts />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
