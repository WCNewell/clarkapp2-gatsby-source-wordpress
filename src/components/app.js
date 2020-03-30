import React from 'react'
import PropTypes from "prop-types"
import './layout.css'
import Header from './header'
import RecentPosts from './recent-posts'
import Footer from './footer'

const App = ({ children }) => {
    
    return (
        <>
            <div>
                <Header />
                <RecentPosts />
                <Footer />
            </div>
        </>
    )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App

