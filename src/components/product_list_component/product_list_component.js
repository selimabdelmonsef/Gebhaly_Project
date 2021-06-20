import React from 'react';
import styles from './product_list_component.module.css';
import gebhalyImg from '../../images/gebhalyImg.png'
import { connect } from "react-redux";
import { _GetProductListData } from "../../redux/redux-actions/product_list_actions";
class ProductList extends React.Component {
    componentDidMount() {
        this.props.GetProductListData();
        // console.log(this.props?.data[0]?.productList)
    }
    render() {
        return (
            <div>
                {/* <div className={styles.product_lists_container}> */}
                    {this.props?.data[0]?.productList.map((element) => {
                        return <div className={styles.product_lists_container}>
                            <p className={styles.productNameStyle}>{element.productName}</p>
                            <p className={styles.products_style}>{element.category}</p>
                            <p className={styles.products_style}>{element.price}</p>
                            <p className={styles.products_style}>{element.available_Quantity}</p>
                            <img className={styles.productImage} src={gebhalyImg} alt="" />
                            
                        </div>
                    })}
<hr />
                {/* </div> */}
                
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.ProductListReducer.data,
    };
};

const mapDisaptchToProps = (dispatch) => {
    return {
        GetProductListData: (payload) => {
            dispatch(_GetProductListData(payload));
        },
    };
};

export default connect(mapStateToProps, mapDisaptchToProps)(ProductList);