import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../useCart/useCart';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    console.log(products);


    const handleToRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key)
    }



    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleToRemove={handleToRemove}

                    ></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default OrderReview;