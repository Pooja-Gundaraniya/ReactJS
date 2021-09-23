// import react from "react";
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./navbar";
import ProductContextProvider from "./ProductsContext";
import Products from "./product"; 
import Cart from "./cart";
// import Notfound  from "../notfound";
import CartContextProvider from "./cartcontext";
const Home = () => {
    return(
        <>

        <ProductContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
        {/* <Banner/> */}
            <switch>
                <Route path="/" exact component={Products}/>
                <Route path="/cart" exact component={Cart}/>
                {/* <Route component={Notfound}/> */}
            </switch>
        </Router>
        </CartContextProvider>
        </ProductContextProvider>
        </>
    )
}
export default Home;