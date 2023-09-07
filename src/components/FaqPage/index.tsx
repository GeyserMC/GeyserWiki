import React from "react";
import faqData from "@site/data/faq.json";
import Accordion from "../Accordion";
import styles from "./styles.module.css";

const FaqPage = () => {
    return (
        <>
            {faqData.map(section => (
                <section className={styles.faqSection}>
                    <h1>{section.title}</h1>
                    {section.desc && <p>{section.desc}</p>}

                    <Accordion items={section.items} />
                </section>
            ))}
        </>
    )
}

export default FaqPage;