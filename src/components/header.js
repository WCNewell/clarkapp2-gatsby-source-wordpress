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
                    fixed (width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <header>
            <div className='logo'>
                <Link to='/'>
                    <Img fixed={data.file.childImageSharp.fixed} alt='Clark Newell Logo' />
                </Link>
            </div>
            <h2 className='site-description'>{data.site.siteMetadata.description}</h2>
            <nav>
                <Link className='menu-link' to='/about'>About</Link>
                <Link className='menu-link' to='/'>Portfolio</Link>
                <Link className='menu-link' to='/'>Blog</Link>
            </nav>
        </header>
    )
}