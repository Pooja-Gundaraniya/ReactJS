import React,{useContext} from "react";
import { CartContext } from "./cartcontext";

const Cart =()=>{
    const data = useContext(CartContext);
    console.log(data);
    return(
        <div className="container">
            <div className="cartcontainer" style={{marginTop:'100px'}}>
                <h2>Shoppig cart</h2>
            </div>
        </div>
    )
}
export default Cart;