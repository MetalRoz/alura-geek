function agregar() {
    let imagen = document.getElementById("imagen").value
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
  
    const producto = {
      imagen: imagen,
      nombre: nombre,
      precio: precio
    }
  
    let productos = JSON.parse(localStorage.getItem("productos"))
    if (productos) {
      productos.push(producto)
    } else {
      productos = []
      productos.push(producto)
    }
    localStorage.setItem("productos", JSON.stringify(productos))
    window.location.href = "index.html"
}

document.getElementById("volver").addEventListener("click", () => {
    window.location.href = "index.html"
})