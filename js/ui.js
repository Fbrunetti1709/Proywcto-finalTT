//funcion para utilizar el contador del carrito

//carrito es creado para guardar los productos agregados
export const actualizarContador = (carrito) => {
  //accedo al cantador-carrito que esta en el html
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    //con esta linea actualizo el contador con la cantidad de productos en el carrito
    contador.textContent = carrito.length;
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};
