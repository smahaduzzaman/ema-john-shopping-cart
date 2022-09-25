import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;