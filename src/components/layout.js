import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import Header from './header'
import RecentPosts from './recent-posts'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
    
    return (
        <div>
            <SEO />
            <Header />
            <RecentPosts />
            <Footer />
        </div>
    )
}

export default Layout


