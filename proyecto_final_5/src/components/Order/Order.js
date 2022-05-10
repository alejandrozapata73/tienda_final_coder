const Order = ({ orderId }) => {
  return (
    <div className="container my-5">
      <h3>Gracias por tu Compra!!!</h3>
      <h5 className="mt-2">Enviaremos el codigo de tu compra via mail:</h5>

      <h3 className="my-3">{orderId}</h3>
    </div>
  );
};

export default Order;
