import React from 'react';
import styles from './product_list_component.module.css';
import { connect } from "react-redux";
import { _GetProductListData } from "../../redux/redux-actions/product_list_actions";
import { _GetOrderQuantity } from "../../redux/redux-actions/order_quantity_actions";
class ProductList extends React.Component {
    componentDidMount() {
        this.props.GetProductListData();
    }
    render() {
        return (
            <div>
                {this.props.loading === true ?
                    <span>Loading...</span> 
                    :
                    <div>
                        {this.props?.data[0]?.productList.map((element) => {
                            return <div>
                                <div className={styles.product_lists_container}>
                                    <p className={styles.productNameStyle}>{element.productName}</p>
                                    <p className={styles.products_style}>{element.category}</p>
                                    <p className={styles.products_style}>{element.available_Quantity}</p>
                                    <p className={styles.products_style}>{element.price}</p>
                                    <div>
                                        <img className={styles.productImage} src={element.img} alt="" />
                                        <button onClick={() => this.props.GetOrderQuantity()} className={styles.addToCartBtn}>Add To Cart</button>
                                    </div>


                                </div>

                                <hr />
                            </div>
                        })}
                    </div>
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.ProductListReducer.data,
        loading: state.ProductListReducer.loading
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetProductListData: (payload) => {
            dispatch(_GetProductListData(payload));
        },
        GetOrderQuantity: (payload) => {
            dispatch(_GetOrderQuantity(payload));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(ProductList);