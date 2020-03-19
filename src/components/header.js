import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './styles.css'

const Header = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleLogoQuery {
                site {
                    siteMetadata {
                            title
                            description
                            keywords
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
        `}
        render={data => (
                <div>
                <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
        <html lang="en" />
        </Helmet>
                <div class='logo'>
                    <Link to='/'>
                        <Img fixed={data.file.childImageSharp.fixed} alt='Clark Newell Logo' />
                    </Link>

                </div>
                </div>
        )}
    />    
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header