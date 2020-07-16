import React from 'react';
import styles from './Quote.module.css';
import cx from 'classnames';

const Quote = ({ quote, author, title, hide}) => {
    return (
        <div className={cx(styles.quoteBlock, hide ? styles.hide : '')}>
            <p className={styles.quote}>{quote}</p>
            <p><span className={styles.quoteAuthor}>{author}</span> — {title}</p>
        </div>
    );
};

export default Quote;