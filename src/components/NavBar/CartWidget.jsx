import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons" 
import "./CartWidget.css";

function CartWidget() {
  const context = useContext(cartContext);
  console.log(context);

  return (
    <Link to="/cart">
      <div className="iconc">
        <FontAwesomeIcon icon={faBasketShopping} />
        {}
        <span> {context.getTotalItemsInCart()} </span>
      </div>
    </Link>
  );
}

export default CartWidget;
<FontAwesomeIcon icon={faBasketShopping} />