import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">miTienda</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/indumentaria">
            Indumentaria
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/calzado">
            Zapatillas
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">
            Detalle
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/prueba">
            Accesorios
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/facebook.com/mipage">
            Seguinos...
          </Link>
        </li>
        {/* CartWidget*/}
        <div>🛒</div>
      </ul>
    </nav>
  );
}
