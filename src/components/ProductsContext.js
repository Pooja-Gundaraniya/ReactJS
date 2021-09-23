import {createContext , useState} from "react";
import cleanser from "../assets/cleanser.jpg";
import brushes from "../assets/brushes.jpg";
import eyeliner from "../assets/eye liner.jpg";
import foundation from "../assets/foundation.jpg";
import lipbalm from "../assets/lip balm.jpg";
import lipstick from "../assets/lipstick.jpg";
import makeup from "../assets/makeup.jpg";
import mask from "../assets/mask.jpg";
import nailpolish from "../assets/nail_polish.jpg";
import oil from "../assets/oil.jpg";
import primer from "../assets/primer.jpg";
import spunch from "../assets/spunch.jpg";

export const ProductsContext = createContext();

const ProductContextProvider=(props)=>
{
    const [products] =useState([
        {id:1, names:'cleanser', price:300, image:cleanser, status:'hot'},
        {id:2, names:'brushes', price:1000, image:brushes, status:'hot'},
        {id:3, names:'eyeliner', price:250, image:eyeliner, status:'hot'},
        {id:4, names:'foundation', price:700, image:foundation, status:'hot'},
        {id:5, names:'lipbalm', price:180, image:lipbalm, status:'new'},
        {id:6, names:'lipstick', price:500, image:lipstick, status:'hot'},
        {id:7, names:'makeup', price:1000, image:makeup, status:'new'},
        {id:8, names:'mask', price:30, image:mask, status:'hot'},
        {id:9, names:'nailpolish', price:150, image:nailpolish, status:'hot'},
        {id:10, names:'oil', price:6500, image:oil, status:'new'},
        {id:11, names:'primer', price:1200, image:primer, status:'hot'},
        {id:12, names:'spunch', price:400, image:spunch, status:'hot'},
    ]);
    return(
        <>
            <ProductsContext.Provider value={{products:[...products]}}> 
            {props.children}
            </ProductsContext.Provider>
        </>
    )
}
export default ProductContextProvider;