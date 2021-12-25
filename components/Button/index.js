import React from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const Button = ({ variants='primary', children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variants?.toLowerCase() === 'primary',
            [styles.secondary]: variants?.toLowerCase() === 'secondary',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export const DownloadButton = ({ ...props }) => {
    return (
        <Button {...props}>
            Download <strong className={styles.highlightText}>v1.3</strong>
        </Button>
    );
};

export default Button;
