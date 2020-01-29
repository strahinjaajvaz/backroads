import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import ContactUs from "../components/Contact/Contact"

const Contact = props => {
  return (
    <Layout>
      <StyledHero img={props.data.defaultBcg.childImageSharp.fluid} />
      <ContactUs />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Contact
