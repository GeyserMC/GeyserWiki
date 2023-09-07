import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { isDarkTheme } = useColorMode();

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        document.documentElement.style.setProperty("--border-color", isDarkTheme ? "#606770" : "#e3e3e3");
        document.documentElement.style.setProperty("--text-color", isDarkTheme ? "#e3e3e3" : "#333");
    }, [isDarkTheme]);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className={styles.accordionItem}>
                    <button
                        className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ""}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.title}
                    </button>
                    {activeIndex === index && (
                        <div className={styles.accordionContent}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
