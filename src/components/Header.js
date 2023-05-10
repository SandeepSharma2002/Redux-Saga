// import React from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchData } from "../redux/productAction";
// import Cart from "./Cart";
import { useEffect } from "react";

export default function Header() {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  
  console.log(result);
  return (
    <>
      <div className="header">
        <div className="container1">
        <input
          type="text"
          name=""
          className="search"
          placeholder="search name"
          onChange={(event)=>dispatch(searchData(event.target.value))}
        />
        <Link to="/cart">
          <div className="cart">
            <span className="data">{result.length}</span>
          </div>
        </Link>
        </div>
       
      </div>
    </>
  );
}
