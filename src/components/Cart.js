import React,{useState,useEffect } from "react";
import "./Cart.css"

export default function Cart({ cart, setCart, handleChange }){
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans +=  item.discount));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });
    
    return (
        <>
        {cart.map((item) => (
           <>
           <div className="cartCard">
                <div className="imageCart"></div>
                <div className="headingCart">
                    <h5 className="descriptionCart">{item.courseDescription}</h5>
                    <h6>Rs {item.discount}/-</h6>
                </div>
            </div>

           </>
        ))}
        <div className="gotoCheckout">
        <div className="total">
            <span>Total Cart Value</span>
            <h5>Rs {price}/-</h5>
        </div>
        <button>Go to Checkout</button>
        </div>
        </>
    )
}