import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Crossplatform0Img from '@site/static/img/site/crossplatform_0.png';
import Crossplatform1Img from '@site/static/img/site/crossplatform_1.png';
import Crossplatform2Img from '@site/static/img/site/crossplatform_2.png';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
    title: string;
    image?: string;
    description: JSX.Element;
    index?: number;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'What is Geyser?',
        image: Crossplatform2Img,
        description: (
            <>
                <Translate id="components.homepage_features.1">Geyser is a program that allows Minecraft: Bedrock Edition clients to join Minecraft: Java Edition servers, allowing for true crossplay between both editions of the game. The ultimate goal of this project is to allow Minecraft: Bedrock Edition users to join Minecraft: Java Edition servers as seamlessly as possible.</Translate>
            </>
        ),
    },
    {
        title: 'How does it work?',
        image: Crossplatform1Img,
        description: (
            <>
                <Translate id='components.homepage_features.features.2'>Geyser acts as a translator which sits between the Bedrock client and the Java server. It takes data from the Bedrock client and translates it into a format the Java server understands and vice versa. Geyser works with any modern Minecraft version and can be installed either as a plugin or ran as a standalone program.</Translate>
            </>
        ),
    },
    {
        title: 'Join from anywhere',
        image: Crossplatform0Img,
        description: (
            <>
                <Translate id='components.homepage_features.features.3'>Geyser can be joined from Bedrock clients on Windows 10/11, iOS, Android, and even consoles (more info here). Geyser works with a wide array of hosting providers, but can also be used as its own standalone proxy to join any Minecraft server!</Translate>

                <Translate id='components.homepage_features.features.4'>If you are a server owner, you can install our Floodgate plugin which allows Xbox Live authenticated Bedrock users to join without a Java Edition account!</Translate>
            </>
        ),
    },
];

function Feature({ title, image, description, index }: FeatureItem) {
    const Content = () => (
        <div className="text--left padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
        </div>
    );
    const Image = () => (
        image &&
        <div className="column text--left">
            <img src={image} alt={title} />
        </div>
    );
    return (
        <div className={clsx('column')}>
            {index % 2 === 0 ? <><Image /><Content /></> : <><Content /><Image /></>}
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}