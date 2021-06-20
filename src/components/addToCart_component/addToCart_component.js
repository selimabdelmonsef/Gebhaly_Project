import React from 'react';
import styles from './addToCart_component.module.css';
import classnames from 'classnames';
import { connect } from "react-redux";
import {_GetOrderQuantity} from "../../redux/redux-actions/order_quantity_actions"

class AddToCart extends React.Component {
    render() {
        return (
            <div>     
                <i className={classnames(styles.cartStyle, "fas fa-shopping-cart")}></i>
                <p className={styles.orderQuantity}>{this.props?.quantity}</p>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        quantity: state.OrderQuantityReducer,
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetOrderQuantity: (payload) => {
            dispatch(_GetOrderQuantity(payload));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(AddToCart);