import React, { useState } from "react";

function Productos() {
  const [cantidad, setCantidad] = useState(0);

  const sumarProducto = () => {
    setCantidad(cantidad + 1);
  };

  const restarProducto = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <p>Productos en el carrito: {cantidad}</p>
      <button onClick={sumarProducto}>Agregar Producto</button>
      <button onClick={restarProducto}>Quitar Producto</button>
    </div>
  );
}

export default Productos;