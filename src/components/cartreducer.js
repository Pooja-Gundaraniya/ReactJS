export const CartReducer = (state, action) => {

    const { shopiingCart, totalprice, qty } = state;

    let product, updatedprice, updatedqty;

    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shopiingCart.find(product => product.id === action.id)
            if (check) {
                return state;
            }
            else {
                product = action.products || {};
                product["qty"] = 1;
                updatedqty = qty + 1;
                updatedprice = totalprice + product.price;
                // console.log(updatedqty);
                return { shopiingCart: [product, ...shopiingCart], totalprice: totalprice+updatedprice, qty: updatedqty }
            }
            break;
        default:
            return state;
    }
}