import React from 'react';
import styles from './product_list_component.module.css';
import gebhalyImg from '../../images/gebhalyImg.png'

export default class ProductList extends React.Component {

    render() {
        return (
            <div>
            <div className={styles.product_lists_container}>
                <p>T-Shirt</p>
                <p className={styles.products_style}>20</p>
                <p className={styles.products_style}>3</p>
                <p className={styles.products_style}>18$</p>
                <img className={styles.productImage} src={gebhalyImg} alt="" /> 
            </div>
            <hr/>
            </div>
            
        )
    }
}