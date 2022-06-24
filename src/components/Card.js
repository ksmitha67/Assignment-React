import React from "react";
import "./Card.css";
// import {Link} from "react-router-dom"

export default function Card (props){
    // console.log(props)
    const { courseDescription, tags, courseCreator, discount, price} = props.data;
    const addToCart = props.addToCart;
    // const [cart, setCart] = useState([]);

    // function addToCart(item){
    //     if(cart.indexOf(item) !== -1){
    //         alert("item is already added to cart");
    //     }
    //     setCart([...cart, item]);
    // }



    return (
        <>
            <div className="card">
                <div className="image"></div>
                <div className="heading">
                    <h5 className="description">{courseDescription}</h5>
                    <div className="react-image">
                        {tags.map((d) =>
                        <>
                        
                            <div className="tag"><span>{d}</span></div>
                        
                        </>
                        )}
                    </div>
                </div>
            <h6 className="author">{courseCreator}</h6>
            <img className="star" src="/empty-star.png" alt="star" />
            <h6 className="discount">Rs {discount}/-</h6>
            <h6 className="price">Rs {price}/-</h6>
            <div className="addToCart">
                {/* <Link to="/cart"> */}
                <button onClick={()=>addToCart(props.data)}>ADD TO CART</button>
                {/* </Link> */}
                
            </div>
            <img className="arrow" src="/right-arrow.png" alt="arrow" />
        </div>
            <br />


            

        
        </>
    )
}