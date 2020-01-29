import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const Tours = props => {
  return (
    <Layout>
      <StyledHero img={props.data.deafultBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    deafultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Tours
