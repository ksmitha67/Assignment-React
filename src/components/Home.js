import React , { useEffect, useState }from "react";
import "./Home.css";
import Header from "./Header"
import Card from "./Card";
import Pagination from "./Pagination";
import Cart from './Cart';


export default function Home(){
    const [show, setShow] = useState(false);
    const [apidata, setApiData] = useState([]) ;
    const [cart, setCart] = useState([]);

    function addToCart(item){
        if(cart.indexOf(item) !== -1){
            alert("item is already added to cart");
        }
        setCart([...cart, item]);
    }
    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;
    
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
      };


    useEffect(() => {
       fetch("https://62b432bb530b26da4cb8ba58.mockapi.io/courses")
        .then(res => res.json())
        .then(data => setApiData(data))
    },[])


    return (
        <>
        <Header setShow={setShow}/>
        <div className="wrapper">
            <section className="left">
                <div className="topList">
                    <h5 className="text">All Courses</h5>
                    <select name="course" id="course">
                        <option value="price">Course Price</option>
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>
                    </select>
                </div>
                {apidata.length > 0 ? (
                 <>
                 <Pagination
                    data={apidata}
                    RenderComponent={Card}
                    addToCart={addToCart}
                    pageLimit={3}
                    dataLimit={3}
                    />
                    </>
                ) : (
                <h1>No Posts to display</h1>
                )}

                
            </section>
            <section className="right">
                <div id='search-box'>
                    <form action='/search' id='search-form' method='get' target='_top'>
                        <input id='search-text' name='q' placeholder='Search Box' type='text'/>
                        <img id='search-button' src="/search.png" alt="search" />
                    </form>
                </div>
                <div className="cartDetails">
                    <span>YOUR CART DETAILS</span>
                </div>
                {show ? <>
                <div className="emptycart">Your cart is empty right now. Please add courses in the cart from the list</div>
                <div className="cartvalue">
                    <h6>Total Cart Value</h6>
                    <h5>Rs 0/-</h5>
                </div></>
                :
                    <Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>
                }
                
                
            </section>
        </div>
        
        <footer className="footer">
        </footer>
        </>
    )
}