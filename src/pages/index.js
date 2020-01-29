import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { Link, graphql } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default props => {
  return (
    <Layout>
      <StyledHero home img={props.data.default.childImageSharp.fluid}>
        <Banner
          title={"Continue exploring"}
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eos."
        >
          <Link to="tours" className="btn-white">
            Explore Tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  query homeImage {
    default: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
