import React from 'react';
import styles from './styles.module.scss'


/**
 * interface movil to use touch scroll in x and y
 * the x scroll must be only main elements and the orisontal scroll sections elements
 * @param {HTMLAllCollection} children > sections 
 * @returns 
 */
export default function MovilScroll({children}) {

    return <div className={styles.navigator}>
        <>
        {children}
        </>
    
    </div>
}
