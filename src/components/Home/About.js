import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imageContainer}>
            <img src={img} alt="about company" />
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
