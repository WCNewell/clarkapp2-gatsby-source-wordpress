import React from 'react'
import styled from 'styled-components'

import MailIcon from '../images/iconfinder_mail_287692.png'
import LinkedInIcon from '../images/iconfinder_linkedin_circle_black_107159.png'
import GitHubIcon from '../images/iconfinder_github_circle_black_107161.png'
import TwitterIcon from '../images/iconfinder_twitter_circle_black_107155.png'
import InstagramIcon from '../images/iconfinder_38-instagram_1161954.png'

const Socials = styled.div`
    display: flex;
    flex-flow: row norwap;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    padding-bottom: 10px;

    img {
        width: 50px;
        height: 50px;

        &:first-of-type {
            margin-right: 10px;
        }
    }
`

const Footer = () => {

    return (
        <Socials>
            <a href='mailto: clark@clarknewell.tech'>
                <img className="mail-social-icon" src={MailIcon} alt="email icon" />
            </a>
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
            © {new Date().getFullYear()} Clark Newell, built with {` `}
            <a href="https://www.gatsbyjs.org"> Gatsby </a>
        </Socials>
          
    )
}

export default Footer