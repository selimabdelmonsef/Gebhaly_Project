import React from 'react';
import styles from './landing_page.module.css';
import gebhalyImg from '../../images/gebhalyImg.png'

export default class LandingPage extends React.Component {

    render(){
        return(
            <div>
                <img className={styles.gebhalyLogo} src={gebhalyImg} alt="" />
                <p className={styles.productsParag}>
                    Products
                </p>
        </div>
        )
    }
} 