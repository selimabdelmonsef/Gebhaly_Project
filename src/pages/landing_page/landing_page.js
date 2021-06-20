import React from 'react';
import styles from './landing_page.module.css';
import gebhalyImg from '../../images/gebhalyImg.png';
import ProductList from '../../components/product_list_component/product_list_component';
import AddToCart from '../../components/addToCart_component/addToCart_component'

export default class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <img className={styles.gebhalyLogo} src={gebhalyImg} alt="" />
                <p className={styles.productsParag}>
                    Products
                </p>
                <AddToCart/>
                <div className={styles.productListings}>
                    <h6>Name</h6>
                    <h6 className={styles.listingsStyle}>Quantity</h6>
                    <h6 className={styles.listingsStyle}>Category</h6>
                    <h6 className={styles.listingsStyle}>Price</h6>
                </div>
                <hr/>
                <ProductList/>
            </div>
        )
    }
}