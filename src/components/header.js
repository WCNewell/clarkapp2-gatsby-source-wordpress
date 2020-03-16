import { Link } from 'gatsby'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import './styles.css'

const Header = () => (
    
    <div class='logo'>
        <Link to='/'>
            <Img fixed={data.file.childImageSharp.fixed} alt='Clark Newell Logo' />
        </Link>
    </div>
)

export const query = graphql`
    query {
        file(relativePath: { eq: "images/OgLogoTrans-copped.png" }) {
            childImageSharp {
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
export default Header 