import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/strahinja.ajvaz@gmail.com"
          method="POST"
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="John Smith"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <textarea
              rows={10}
              name="message"
              id="message"
              className={styles.formControl}
              placeholder="Hello There"
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
