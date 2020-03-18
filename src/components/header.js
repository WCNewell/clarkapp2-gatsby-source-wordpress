import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './styles.css'

const Header = ({ children }) => (
    <StaticQuery
        query={graphql`
            query logoQuery {
                file(relativePath: { regex: "/OgLogoTrans-cropped.png/" }) {
                    childImageSharp {
                        fixed (width: 200) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => (
                <div class='logo'>
                    <Link to='/'>
                        <Img fixed={data.file.childImageSharp.fixed} alt='Clark Newell Logo' />
                    </Link>
                    
                </div>
        )}
    />    
)

Header.propTypes = {
    children: PropTypes.node.isRequired
}

export default Header 