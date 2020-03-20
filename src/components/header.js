import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/customStyles.css'

export default () => {
    const data = useStaticQuery(graphql`
        query SiteHeaderQuery {
            site {
                siteMetadata {
                        description
                    }
            }
            file(relativePath: { regex: "/OgLogoTrans-cropped.png/" }) {
                childImageSharp {
                    fixed (width: 175) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    <Img fixed={data.file.childImageSharp.fixed} alt='Clark Newell Logo' />
                </Link>
            </div>
            <h4 className='site-description'>{data.site.siteMetadata.description}</h4>
            <nav>
                <Link className='menu-link' to='/about'>About</Link>
                <Link className='menu-link' to='/'>Portfolio</Link>
                <Link className='menu-link' to='/'>Blog</Link>
                <Link className='menu-link' to='/'>Contact</Link>

            </nav>
        </header>
    )
}