import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {  //it replace with props
    // const { product, handleAddToCart } = props;
    const { img, name, seller, price, ratings } = product;

    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart -
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;