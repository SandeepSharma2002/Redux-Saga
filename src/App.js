import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element= {<Main/>}/>
        <Route path="/cart" element= {<Cart/>}/>
      </Routes>
      
    </>
  );
}

export default App;
