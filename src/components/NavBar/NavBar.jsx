import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">Tiendita Yu-Gi-Oh!</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/comun">
            Comun
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/rara" className="nav-link">
            Rara
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/muy rara">
            Muy rara
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">
            Detalle
          </Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}
