let usuario = {
    user: document.getElementById("user"),
    pass: document.getElementById("pass")
  }
  
  let validate = {
    USER: "admin",
    PASS: "admin"
}

function onLogin() {
    if (usuario.user.value === validate.USER && usuario.pass.value === validate.PASS) {
        localStorage.setItem("islog", JSON.stringify(true))
        window.location.href = "index.html"
    } else {
        alert("Usuario o Contraseña incorrectos.")
    }
}