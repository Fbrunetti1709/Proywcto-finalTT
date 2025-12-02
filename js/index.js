// muestra todos los productos
// permite agregar productos al carrito
// actualiza el contador del carrito en la interfaz

//import {productos } from "./productos.js"; ahora lo importo desde productos.json
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

// Función para mostrar los productos en la página
// y agregar funcionalidad para agregar al carrito
// al hacer clic en el botón correspondiente
// al cargar el DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  // Obtener el carrito desde el almacenamiento
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  //PEDIR LOS PRODUCTOS AL ARCHIVO JSON CON FETCH

  fetch("./data/productos.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error al cargar los productos:" ${res.status}`);
      }

      return res.json();
    })

    .then((data) => {
      data.forEach((producto) => {
        // Crear el elemento del producto
        const tarjeta = document.createElement("article");
        // Agregar clase a la tarjeta del producto
        tarjeta.classList.add("tarjeta-producto");

        //crea la imagen del producto
        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;

        //crea el titulo del producto
        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        //crea el precio del producto
        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        //crea el boton de agregar al carrito
        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";

        // Agregar evento al botón para agregar el producto al carrito
        boton.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });

        // Agregar los elementos a la tarjeta del producto. Arma la estructura
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
      });
    })

    .catch((err) => {
      console.log(err);
    });
});
