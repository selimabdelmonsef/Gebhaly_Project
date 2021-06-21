import React from 'react';
import styles from './addToCart_component.module.css';
import classnames from 'classnames';
import { connect } from "react-redux";
import { _GetOrderQuantity } from "../../redux/redux-actions/order_quantity_actions";
import { Link } from 'react-router-dom';

class AddToCart extends React.Component {
    render() {
        return (
            <div>
                {this.props.quantity > 0 ?
                    <Link to="/cart">
                        <i className={classnames(styles.cartStyle, "fas fa-shopping-cart")} ></i>
                    </Link>
                    :
                    <i className={classnames(styles.cartStyle, "fas fa-shopping-cart")} ></i>}

                {/* // onClick= {()=>console.log(this)}></i> */}

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