import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import App from '../components/App'

export default ({ data }) => (
  <Layout>
    <App data={data} />
  </Layout>
)

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
            presentationWidth
            presentationHeight
            aspectRatio
          }
        }
      }
    }
    file {
      publicURL
    }
  }
`
