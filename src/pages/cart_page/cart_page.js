import React from 'react';
import styles from './cart_page.module.css';
import { connect } from "react-redux";
import { _GetCartData } from "../../redux/redux-actions/cartData_actions";

class CartPage extends React.Component {
    componentDidMount() {
        console.log(this.props.cartData);

    }
    render() {
        return (
            <div>
                <h1 className={styles.yourOrder}>Your Order</h1>
                <hr />
                {this.props.cartData?.data?.map((element, index) => {
                    return <div>
                        <div className={styles.product_lists_container}>
                            <p className={styles.productNameStyle}>{element.productName}</p>
                            <p className={styles.products_style}>{element.price}$</p>
                            <div>
                                <img className={styles.productImage} src={element.img} alt="" />
                                <button className={styles.addToCartBtn}>Remove</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                })}
                <div className={styles.totalCost}>Total Cost: {this.props.cartData.totalOrder}$</div>
                <button onClick={() => this.props.history.push("/")} className={styles.continueShopping}>CONTINUE SHOPPING</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.CartDataReducer.data
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetCartData: (payload) => {
            dispatch(_GetCartData(payload));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(CartPage);