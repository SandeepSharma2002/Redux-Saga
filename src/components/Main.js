import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import { productData } from "../redux/productAction";
import { useEffect } from "react";
import download from "./download.jpg";

export default function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(productData());
  }, []);
  console.log(data);
  return (
    <>
      <div className="container">
        <button className="btn" onClick={() => dispatch(emptyCart(data))}>
          Empty Cart
        </button>
        <div className="products">
          {data.map((item) => (
            <div key={item.id} className="product">
              <img src={download} alt="/" />
              <div>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Location: {item.address.city}</p>
                <div className="btn1">
                  <button
                    className="btn"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
