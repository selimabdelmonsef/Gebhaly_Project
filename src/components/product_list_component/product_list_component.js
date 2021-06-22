import React from 'react';
import styles from './product_list_component.module.css';
import { connect } from "react-redux";
import { _GetProductListData } from "../../redux/redux-actions/product_list_actions";
import { _IncrementOrderQuantity } from "../../redux/redux-actions/order_quantity_actions";
import { _GetCartData } from "../../redux/redux-actions/cartData_actions";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addToCardData: [],
            totalOrder: 0,
        }
    }
    componentDidMount() {
        this.props.GetProductListData();
        console.log(this.props)
    }
    addToCartFn() {
        this.props.IncrementOrderQuantity();
        this.props.GetCartData({
            data: this.state.addToCardData,
            totalOrder: this.state.totalOrder
        });
    }
    render() {
        return (
            <div>
                    <div>
                        {this.props?.data[0]?.productList.map((element, index) => {
                            return <div>
                                <div className={styles.product_lists_container}>
                                    <p className={styles.productNameStyle}>{element.productName}</p>
                                    <p className={styles.products_style}>{element.category}</p>
                                    <p className={styles.products_style}>{element.available_Quantity}</p>
                                    <p className={styles.products_style}>{element.price}$</p>
                                    <div>
                                        <img className={styles.productImage} src={element.img} alt="" />

                                        <button onClick={() => this.setState({ addToCardData: [...this.state.addToCardData, ...[element]], totalOrder: this.state.totalOrder + element.price }, () => this.addToCartFn())}

                                            className={styles.addToCartBtn}>Add To Cart</button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        })}
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.ProductListReducer.data,
        loading: state.ProductListReducer.loading,
        cartData: state.CartDataReducer.data
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetProductListData: (payload) => {
            dispatch(_GetProductListData(payload));
        },
        IncrementOrderQuantity: (payload) => {
            dispatch(_IncrementOrderQuantity(payload));
        },
        GetCartData: (payload) => {
            dispatch(_GetCartData(payload));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(ProductList);