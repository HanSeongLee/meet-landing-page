import React from "react";
import styles from './style.module.scss';

const IntroSection = () => {
    return (
        <section className={styles.introSectionContainer}>
            <div className={styles.featureImageContainer}>
                <img className={styles.featureImage}
                     src={'/img/image-woman-in-videocall.jpg'}
                     alt={'A Woman in video call'}
                />
                <img className={styles.featureImage}
                     src={'/img/image-women-videochatting.jpg'}
                     alt={'Women video chatting'}
                />
                <img className={styles.featureImage}
                     src={'/img/image-men-in-meeting.jpg'}
                     alt={'Men in meeting'}
                />
                <img className={styles.featureImage}
                     src={'/img/image-man-texting.jpg'}
                     alt={'A Man '}
                />
            </div>

            <div className={styles.overline}>
                Built for modern use
            </div>

            <h2 className={styles.title}>
                Smarter meetings, all in one place
            </h2>

            <p className={styles.description}>
                Send messages, share files, show your screen, and record your meetings — all in one
                workspace. Control who can join with invite-only team access, data encryption, and data export.
            </p>
        </section>
    );
};

export default IntroSection;
