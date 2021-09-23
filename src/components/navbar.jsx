import React from 'react' 
import { Link } from 'react-router-dom'
import Cart from '../assets/shopping-cart.png'
const Navbar = () => {
    return (
        <nav>
            <ul className="left">
                <li><Link to = "/">India express</Link></li><br/>
            </ul>
            <ul className='right'>
                <li><Link to = "cart">
                <span className="shoppingCart"><img className ="i"style={{height: 30}} src={Cart} alt=""/>
                <span className="cartcount">0</span>                
                </span></Link>
                </li>
            </ul> 
        </nav>
    )
}
export default Navbar;
