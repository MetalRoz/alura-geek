let header = document.getElementById("header")
let container = document.getElementById("container")

if (JSON.parse(localStorage.getItem("islog"))) {
  
  function editarProducto(i) {
    let productos = producto[i]
    localStorage.setItem("producto", JSON.stringify({ index: i, producto: productos }))
    window.location.href = "editar.html"
  }

  function eliminarProducto(i) {
    if (confirm("¿Estás seguro que deseas eliminar este producto?")) {
      producto.splice(i, 1);
      localStorage.setItem("productos", JSON.stringify(producto));
      location.reload();
    }
  }

  header.innerHTML = `
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" alt="Logo" width="160" height="50" class="d-inline-block align-text-top">
      </a>
      <ul class="nav justify-content-end" style="margin-right: 60px">
      <button type="button" class="btn btn-outline-danger" onclick="logout()">Cerrar Sesión</button>
      </ul>
    </div>
  </nav>
  <div class="fondo">
    <div class="textos">
    <h1 class="titulo">Febrero promocional</h1>
    <p class="subtitulo">Productos seleccionados con 33% de descuento</p>
    <button type="button" class="btn btn-primary">Ver Consolas</button>
    </div>
  </div>
  <div class="todoyadd">
  <h3>Todos los productos</h3>
  <button type="button" class="btn btn-outline-primary" id="agregar">Agregar un producto</button>
  </div>
    `
    document.getElementById("agregar").addEventListener("click", function(){
      window.location.href = "agregar.html"
    })

  let producto = JSON.parse(localStorage.getItem("productos"))
  if (producto) {
    for (let i = 0; i < producto.length; i++) {
      const productos = producto[i];
      container.innerHTML += `
      <div class ="main">
      <div class="botones">
      <i class="fa-solid fa-pen" onclick="editarProducto(${i})"></i>
      <i class="fa-solid fa-trash" onclick="eliminarProducto(${i})"></i>
      </div>
      <div class ="producto">
      <img src="${productos.imagen}">
      <em>${productos.nombre}</em>
      <strong>$ ${productos.precio}</strong>
      </div>
      </div>
        `

    }
  }
} else {
  header.innerHTML = `
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" alt="Logo" width="160" height="50" class="d-inline-block align-text-top">
      </a>
      <ul class="nav justify-content-end" style="margin-right: 60px">
      <a href="login.html">
      <button type="button" class="btn btn-outline-primary">Iniciar Sesión</button>
      </a>
      </ul>
    </div>
  </nav>
  <div class="fondo">
    <div class="textos">
    <h1 class="titulo">Febrero promocional</h1>
    <p class="subtitulo">Productos seleccionados con 33% de descuento</p>
    <button type="button" class="btn btn-primary">Ver Consolas</button>
    </div>
  </div>
  <div class="todoyadd">
  <h3>Todos los productos</h3>
  </div>
  `

  let producto = JSON.parse(localStorage.getItem("productos"))
  if (producto) {
    for (let i = 0; i < producto.length; i++) {
      const productos = producto[i];
      container.innerHTML += `
      <div class ="main">
      <div class ="producto">
      <img src="${productos.imagen}">
      <em>${productos.nombre}</em>
      <strong>$ ${productos.precio}</strong>
      <span style="color: #2a7ae4; cursor: pointer;">Ver producto</span>
      </div>
      </div>
      `

    }
  }
}

function logout() {
  if(confirm("¿Desea cerrar sesión?")){
    localStorage.removeItem("islog")
    window.location.reload()
  }
}
