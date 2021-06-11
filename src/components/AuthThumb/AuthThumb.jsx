import React from 'react'
import { useDevice } from '../../hooks/useDevice';
import styles from './AuthThumb.module.css';
// import bananaTablet from "../../images/auth/banana-tablet.png"
// import strawberryTablet from "../../images/auth/strawberry-tablet.png"
// import leafsTablet from "../../images/auth/leaves-tablet.png"
// import vectorTablet from "../../images/auth/vector-tablet.png"
// import fruitsDesctop from "../../images/auth/fruits-desktop.png"
// import vectorDesctop from "../../images/auth/vector-desktop.png"



const AuthThumb = ({ children }) => {
    const { isDesctopDevice, isTabletDevice } = useDevice();
    
    return (
        <div className={styles.thumb} >
            {/* {(isTabletDevice && (
                <div>
                    <img className={styles.vector} src={vectorTablet} alt='' />
                    <img className={styles.banana} src={bananaTablet} alt='' />
                    <img className={styles.strawberry} src={strawberryTablet} alt='' />
                    <img className={styles.leafs} src={leafsTablet} alt='' />
                </div>
            )) ||
                (isDesctopDevice && (
                    <div>
                        <img className={styles.fruits} src={fruitsDesctop} alt='' />
                        <img className={styles.vectorDesctop} src={vectorDesctop} alt='' />
                    
                    </div>
                ))} */}
            {children}
        </div>
    );
};

export default AuthThumb
