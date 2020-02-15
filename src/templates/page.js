import React, { Component } from 'react'

export default class Page extends Component {
    render() {

        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export const query = graphql`
    query PageQuery {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    title
                }
            }
        }
    }
`