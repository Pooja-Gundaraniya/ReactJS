import { useContext } from "react";
import Banner from "./banner";
import { ProductsContext } from "./ProductsContext";
import { CartContext } from "./cartcontext";
// import { CartReducer } from "./cartreducer";

const Products = () => {
    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);
    return (
        <div className='container'>
            <Banner />
            <div className="products">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        {/* <div className="cover"> */}
                        <div className="productimage">
                            <img src={product.image} alt="not found" />
                        </div>
                        <div className="productdetail">
                            <div className="productname">
                                {product.names}
                            </div>
                            <div className="productprice">
                                INR{product.price}.00
                            </div>
                        </div>
                        {/* </div> */}
                        <div className="addtocart" onClick={() => dispatch({ type: 'ADD_TO_CART',id:product.id,products })} > add to cart</div>
                        {product.status === 'hot' ? <div className='hot'>Hot</div> : ''}
                        {product.status === 'new' ? <div className='new'>New</div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;