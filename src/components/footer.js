import React from 'react'
import './styles.css'

import LinkedInIcon from '../images/iconfinder_linkedin_circle_black_107159.png'
import GitHubIcon from '../images/iconfinder_github_circle_black_107161.png'
import TwitterIcon from '../images/iconfinder_twitter_circle_black_107155.png'
import InstagramIcon from '../images/iconfinder_38-instagram_1161954.png'

const Footer = () => {

    return (
        <div>
            <a href="https://linkedin.com/in/william-clark-newell/">
                <img className="social-icon" src={LinkedInIcon} alt="linkedin icon" />
            </a>
            <a href="https://github.com/WCNewell">
                <img className="social-icon" src={GitHubIcon} alt="github icon" />
            </a>
            <a href="https://twitter.com/WCNewell">
                <img className="social-icon" src={TwitterIcon} alt="twitter icon" />
            </a>
            <a href="https://instagram.com/willcnewell/">
                <img className="social-icon" src={InstagramIcon} alt="instagram icon" />
            </a>
            © {new Date().getFullYear()} Clark Newell, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
          
    )
}

export default Footer