import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import HeroBackground from '@site/static/img/site/split-background.png';
import HeroBackgroundLight from '@site/static/img/site/split-background-light.png';
import HeroImage from '@site/static/img/site/geyser.png';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { colorMode } = useColorMode();

    const backgroundImageUrl = colorMode === 'dark' ? HeroBackground : HeroBackgroundLight;

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className={styles.heroContent}>
                <img src={HeroImage} alt="Geyser Logo" className={styles.heroImage}/>
                <img src={HeroImage} alt="Geyser Logo" className={styles.heroImageBackgroundBlur}/>
                <div className={styles.textSection}>
                    <Heading as="h1" className="hero__title">
                        {siteConfig.tagline}
                    </Heading>
                    <p className="hero__subtitle">
                        Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server.
                    </p>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
