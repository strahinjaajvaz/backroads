import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAboutImage = graphql`
  query AboutImage {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getAboutImage)
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imageContainer}>
            <Img fluid={data.file.childImageSharp.fluid} alt="about us" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            dolores quo pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            dolores quo pariatur.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
