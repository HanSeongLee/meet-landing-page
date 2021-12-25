import React from "react";
import styles from './style.module.scss';
import Button, {DownloadButton} from "../Button";

const HeroSection = () => {
    return (
        <section className={styles.heroSectionContainer}>
            <div className={styles.heroImageMobileContainer}>
                <img className={styles.heroSectionImage}
                     src={'/img/image-hero-left.png'}
                     alt={''}
                />
                <img className={styles.heroSectionImage}
                     src={'/img/image-hero-right.png'}
                     alt={''}
                />
            </div>
            <img className={styles.heroSectionImageDesktop}
                 src={'/img/image-hero-left.png'}
                 alt={''}
            />

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Group Chat for Everyone
                </h1>
                <p className={styles.description}>
                    Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
                </p>

                <div className={styles.buttonContainer}>
                    <DownloadButton>
                        Download v1.3
                    </DownloadButton>
                    <Button variants={'secondary'}>
                        What is it?
                    </Button>
                </div>
            </div>
            <img className={styles.heroSectionImageDesktop}
                 src={'/img/image-hero-right.png'}
                 alt={''}
            />
        </section>
    );
};

export default HeroSection;
