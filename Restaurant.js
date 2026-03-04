function alerta() {


console.log(document.getElementById("nombre").value)
console.log(document.getElementById("email").value)
console.log(document.getElementById("phone").value)
console.log(document.getElementById("fecha").value)


alert("Registro exitoso!!!")

document.getElementById("nombre").value = ""
document.getElementById("email").value = ""
document.getElementById("phone").value = ""
document.getElementById("fecha").value = ""


document.getElementById("mensaje").textContent ="Lo llamaremos para confirmar su reserva."
document.getElementById("mensaje").innerHTML ="<h3>Registro realizado correctamente.</h3>" 

}