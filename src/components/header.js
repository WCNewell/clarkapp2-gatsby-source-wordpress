import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './styles.css'

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
                <h2 className='site-description'>{data.site.siteMetadata.description}</h2>
            </div>
        </header>
    )
}