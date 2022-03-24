import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({handleAddToCart, product}) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price: $ {price}</p>
                <p><small>Seller: {seller}</small> </p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button className='btn-cart' 
                onClick={() => handleAddToCart(product)}>
                <p>Add to Cart {<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} </p> 
            </button>
            
        </div>
    );
};

export default Product;