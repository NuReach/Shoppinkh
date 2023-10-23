import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import { Store } from "./Store";
import { useContext } from "react";
import Profile from "./Pages/Profile";
import SearchResult from "./Pages/SearchResult";
import OrderDetail from "./Pages/OrderDetail";
import Order from "./Pages/Order";
import Paypal from "./Pages/Paypal";
function App() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/search/:search" element={<SearchResult />} />
        <Route path="/orderDetail" element={<OrderDetail />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/order/paypal" element={<Paypal />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
