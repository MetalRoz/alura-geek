let body = document.getElementById("body")
let producto = JSON.parse(localStorage.getItem("producto"))

body.innerHTML = `
  <label>URL de la imagen</label>
  <input type="text" value="${producto.producto.imagen}" id="imagen${producto.index}">
  <label>Nombre</label>
  <input type="text" value="${producto.producto.nombre}" id="nombre${producto.index}">
  <label>Precio</label>
  <input type="text" value="${producto.producto.precio}" id="precio${producto.index}">
  <button type="button" class="btn btn-outline-success" onclick="guardarCambios(${producto.index})">Guardar cambios</button>
  <button type="button" class="btn btn-outline-secondary" id="volver">Volver</button>
`;

document.getElementById("volver").addEventListener("click", ()=>{
  window.location.href = "index.html"
})


function guardarCambios(i) {
    let productos = JSON.parse(localStorage.getItem("productos"));
    productos[i].imagen = document.getElementById(`imagen${i}`).value;
    productos[i].nombre = document.getElementById(`nombre${i}`).value;
    productos[i].precio = document.getElementById(`precio${i}`).value;
    localStorage.setItem("productos", JSON.stringify(productos));
    window.location.href = "index.html";
}
