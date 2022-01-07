ListarProductos()
function ListarProductos(busqueda) {
  // body...
  fetch("listar.php", {
    method: "POST",
    body: busqueda,
  })
    .then((response) => response.text())
    .then((response) => {
      resultado.innerHTML = response
    })
}

registrar.addEventListener("click", () => {
  fetch("registrar.php", {
    method: "POST",
    body: new FormData(frm),
  })
    .then((response) => response.text())
    .then((response) => {
      if (response == "ok") {
        swal.fire({
          icon: "success",
          title: "Registrado",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        swal.fire({
          icon: "success",
          title: "Modificado",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      registrar.value = "Registrar"
      idp.value = ""
      frm.reset()
      ListarProductos()
    })
})
function Eliminar(id) {
  swal
    .fire({
      title: "Seguro de Eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6c757d",
      cancelButtonColor: "#343a40",
      confirmButtonText: "si",
      cancelButtonText: "no",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch("eliminar.php", {
          method: "POST",
          body: id,
        })
          .then((response) => response.text())
          .then((response) => {
            if (response == "ok") {
              ListarProductos()
              swal.fire({
                icon: "success",
                title: "Eliminado",
                showConfirmButton: false,
                timer: 1500,
              })
            }
          })
      }
    })
}

function Editar(id) {
  fetch("editar.php", {
    method: "POST",
    body: id,
  })
    .then((response) => response.json())
    .then((response) => {
      idp.value = response.id
      codigo.value = response.codigo
      producto.value = response.producto
      precio.value = response.precio
      cantidad.value = response.cantidad
      registrar.value = "Actualizar"
    })
}

buscar.addEventListener("keyup", () => {
  const valor = buscar.value
  if (valor == "") {
    ListarProductos()
  } else {
    ListarProductos(valor)
  }
})
