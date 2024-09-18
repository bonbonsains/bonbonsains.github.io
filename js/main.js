let carrito = [];
let total = 0;
let cantidades = {
    "Triang-late": 1,
    "Baloncito": 1,
    "Lengua loca": 1,
    "Fruti mix": 1,
};

// Función para cambiar la cantidad del producto
function cambiarCantidad(producto, precio, operacion) {
    if (operacion === 'mas') {
        cantidades[producto]++;
    } else if (operacion === 'menos' && cantidades[producto] > 1) {
        cantidades[producto]--;
    }
    document.getElementById(`cantidad-${producto}`).textContent = cantidades[producto];
}

// Función para agregar el producto al carrito
function addToCart(producto, precio) {
    let cantidad = cantidades[producto];
    carrito.push({ producto, precio, cantidad });
    total += precio * cantidad;
    actualizarCarrito();
}

// Función para actualizar el carrito y mostrar los productos seleccionados
// Función para actualizar el carrito y mostrar los productos seleccionados
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio.toFixed(3)} x ${item.cantidad}`;
        listaCarrito.appendChild(li);
    });
    
    // Actualizar el total a dos decimales
    totalElement.textContent = total.toFixed(3);  // Ahora muestra dos decimales siempre
}


// Función para mostrar u ocultar los detalles de un producto
function verDetalles(producto) {
    const detallesElement = document.getElementById(`detalles-${producto}`);
    if (detallesElement.style.display === "none") {
        detallesElement.style.display = "block";  // Mostrar los detalles
    } else {
        detallesElement.style.display = "none";   // Ocultar los detalles
    }
}

// Función para procesar la compra (formulario)
function comprar() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    if (carrito.length > 0 && nombre && telefono && direccion) {
        alert(`Compra realizada con éxito por ${nombre}.\nTotal: $${total.toFixed(3)}\nDulces: ${carrito.length} productos.`);
    } else {
        alert('Por favor, completa el carrito y los datos antes de comprar.');
    }
}
