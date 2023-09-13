import React from 'react'
import faqData from '@site/data/faq.json'
import Accordion from '../Accordion'
import styles from './styles.module.css'

const FaqPage = (): JSX.Element[] => {
  return faqData.map((entry, id) => (
    <section className={styles.faqSection} key={id}>
      <h1>{entry.title}</h1>
      {entry.desc != null && <p>{entry.desc}</p>}

      <Accordion items={entry.items} />
    </section>
  ))
}

export default FaqPage
