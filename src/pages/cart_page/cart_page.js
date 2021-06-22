import React from 'react';
import styles from './cart_page.module.css';
import { connect } from "react-redux";
import { _GetCartData } from "../../redux/redux-actions/cartData_actions";
import { _GetProductListData } from "../../redux/redux-actions/product_list_actions";


class CartPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartDataState: [],
            removeIndex: 0
        }
    }
    componentDidMount() {
        console.log(this.props.cartData.data);
        this.setState({
            cartDataState: this.props.cartData
        });
    }
    cartDataSatet() {
        let getTotalCost = 0;
        this.props.cartData.data.splice(this.state.removeIndex,1);
        for(var i =0; i<this.props.cartData.data.length; i++){
            getTotalCost = getTotalCost+this.props.cartData.data[i].price;
        }
            this.setState({
                cartDataState: {data:this.props.cartData.data, totalOrder: getTotalCost}
            })
    }
    goToHomePage() {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <h1 className={styles.yourOrder}>Your Order</h1>
                <hr />
                {this.state.cartDataState.data?.map((element, index) => {
                    return <div>
                        <div className={styles.product_lists_container}>
                            <p className={styles.productNameStyle}>{element.productName}</p>
                            <p className={styles.products_style}>{element.price}$</p>
                            <div>
                                <img className={styles.productImage} src={element.img} alt="" />
                                <button onClick={() => this.setState({ removeIndex: index }, () => this.cartDataSatet())} className={styles.addToCartBtn}>Remove</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                })}
                <div className={styles.totalCost}>Total Cost: {this.state.cartDataState.totalOrder}$</div>
                {/* <button onClick={() => this.props.history.push("/")} className={styles.continueShopping}>CONTINUE SHOPPING</button> */}
                <button onClick={() => this.goToHomePage()} className={styles.continueShopping}>CONTINUE SHOPPING</button>

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
        GetProductListData: (payload) => {
            dispatch(_GetProductListData(payload));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(CartPage);