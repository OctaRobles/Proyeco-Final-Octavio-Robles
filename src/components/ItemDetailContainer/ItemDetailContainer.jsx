import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
  }

  return (
    <div style={{ marginBottom: "100px" }}>
      <Link to="/product/2">Ir al item 2</Link>
      <div>
        <img width={600} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>

      <ItemCount stock={4} onConfirm={handleAddToCart} />

      <Link to="/">
        <ButtonComponent>Volver al inicio</ButtonComponent>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;