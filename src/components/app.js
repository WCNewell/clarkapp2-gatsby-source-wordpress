import React from 'react'
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

export default App

