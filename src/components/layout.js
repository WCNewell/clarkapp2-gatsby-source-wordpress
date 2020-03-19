import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import RecentPosts from './recent-posts'
import './layout.css'

const Layout = ({ children }) => (
        <div>
        <Header />
        <RecentPosts />
        </div>
)

export default Layout
