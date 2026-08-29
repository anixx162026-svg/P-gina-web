// Arreglo para guardar los ítems seleccionados
let pedido = [];
let total = 0;

function agregarAlPedido(nombre, precio) {
  pedido.push({ nombre, precio });
  total += precio;
  actualizarVistaPedido();
}

function actualizarVistaPedido() {
  const lista = document.getElementById('lista-pedido');
  const totalElemento = document.getElementById('total-precio');

  // Limpiar lista actual
  lista.innerHTML = '';

  // Renderizar cada elemento del pedido
  pedido.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    lista.appendChild(li);
  });

  // Actualizar precio total
  totalElemento.textContent = total.toFixed(2);
}

function confirmarReserva() {
  if (pedido.length === 0) {
    alert('Por favor, selecciona al menos un platillo antes de confirmar.');
  } else {
    alert(`¡Reserva confirmada! Total a pagar: $${total.toFixed(2)}. Recuerda pagar en efectivo o QR al llegar al balneario.`);
    // Limpiar formulario tras confirmar
    pedido = [];
    total = 0;
    actualizarVistaPedido();
  }
}