import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Burger from './burger'
import Menu from './menu'

const Header = styled.div`
    display: flex;
`

const Logo = styled.div`
    padding: 1rem;
`

const Slogan = styled.div`
    padding: 5rem;
`

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
        <Header>
            <Logo>
                <Link to='/'>
                    <Img fixed={data.file.childImageSharp.fixed} alt='Clark Newell Logo' />
                </Link>
            </Logo>
            <Slogan>{data.site.siteMetadata.description}</Slogan>
            <Burger />
        </Header>
    )
}