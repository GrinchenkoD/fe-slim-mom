import React from 'react'
// import { useDevice } from '../../hooks/useDevice';
import styles from './AuthThumb.module.css';
// import bananaTablet from "../../images/auth/banana-tablet.png"
// import strawberryTablet from "../../images/auth/strawberry-tablet.png"
// import leafsTablet from "../../images/auth/leaves-tablet.png"
// import vectorTablet from "../../images/auth/vector-tablet.png"
// import fruitsDesctop from "../../images/auth/fruits-desktop.png"
// import vectorDesctop from "../../images/auth/vector-desktop.png"



const AuthThumb = ({ children }) => {
    // const { isDesctopDevice, isTabletDevice } = useDevice();
    
    return (
        <main className={styles.thumb} >
            {children}
        </main>
    );
};

export default AuthThumb
