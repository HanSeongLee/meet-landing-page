import React from "react";
import styles from './style.module.scss';
import {DownloadButton} from "../Button";

const FooterSection = () => {
    return (
        <section className={styles.experienceSection}>
            <div className={styles.background}>
                <img src={'/img/image-footer.jpg'}
                     alt={''}
                />
            </div>
            <div className={styles.overlay}>
                <h2 className={styles.title}>
                    Experience more together
                </h2>
                <p className={styles.description}>
                    Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
                </p>

                <DownloadButton variants={"secondary"}>
                    Download v1.3
                </DownloadButton>
            </div>
        </section>
    );
};

export default FooterSection;
