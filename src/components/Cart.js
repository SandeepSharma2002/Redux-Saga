import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import download from "./download.jpg";
import "./Cart.css";

export default function Cart() {
    const data = useSelector((state)=> state.cartData)
  return (
    <>
    <div className="container"></div>
    <Link to = '/'><h3>Back to Home Page</h3></Link>
    <h1>Cart</h1>
    <div className="products">
          {data.map((item) => (
            <div key={item.id} className="product">
              <img src={download} alt="/" />
              <div>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Location: {item.address.city}</p>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}
