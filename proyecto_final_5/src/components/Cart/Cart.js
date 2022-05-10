import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

  const [show, setShow] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="card">
        <h2 className="text-center">CARRITO DE COMPRAS</h2>
        <div className="container my-1 flex">
          <hr />

          {cart.map((product) => (
            <div className="container">
              <div className="display-md-6">
                <div className="product-card">
                  <div key={product.item.id}>
                    <h4>{product.item.title}</h4>

                    <p>Compra: {product.quantity}</p>
                    <p>Precio unitario $: {product.item.price}</p>
                    <h2>Total: $ {product.quantity * product.item.price}</h2>

                    
                    <button
                      className="btn btn-danger btn-lg d-grid gap-2"
                      onClick={() => eliminarItem(product.item.id)}
                    >
                      
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="product-card text-center">
          <div className="my-2">
            <h1>Total del carrito: $ {totalCart()}</h1>
            <hr />
            <button className="btn btn-success" onClick={() => setShow(!show)}>
              Finalizar compra
            </button>
            <button className="btn btn-danger" onClick={vaciarCart}>
              Vaciar carrito
            </button>

            <Checkout show={show} setShow={setShow} />
          </div>
        </div>
      </div>
    </>
  );
};
