import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./CartContainer.css";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <div className="lto">
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar {item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button className="bto" onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: $x</div>
      <Link to="/checkout">
        <button className="bto">Comprar</button></Link>
    </div>
  );
}

export default CartContainer;
