import React from 'react'

import styles from './AuthThumb.module.css';


const AuthThumb = ({ children }) => {

    return (
        <main className={styles.thumb} >
            {children}
        </main>
    );
};

export default AuthThumb
