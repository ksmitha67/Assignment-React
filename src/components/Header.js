import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";


export default function Header({setShow}){
    return (<>
        <div className="header">
            <div className="header-logo" >
                {/* <Link to="/" > */}
                <img src="/Logo.png" alt="logo" onClick={() => setShow(true)}/> 
                {/* </Link> */}
            </div>
            <div className="header-items">
                    <h5 className="courses">COURSES</h5>
                    <h5 className="wishlist">MY WISHLIST</h5>
                    <img className="cart" src="/cart.png" alt="cart" />
                    <img className="profile" src="/profile.png" alt="profile" />
            </div>
        </div>
        <div className="top">
            <h6 className="course">Discover Latest Courses on React</h6>
            <img className="react-logo" src="/react.png" alt="react" />
        </div>

        </>
    )
}