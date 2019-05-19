function iniciarSesion() {
var usuario = document.getElementById("usuario").value;
var pass = document.getElementById("pass").value;


if (usuario == "tatiana" && pass == "3690") {
    window.location= "html/index.html";

}
else {
    alert("Clave incorrecta. Por razones de seguridad tu dinero fue retenido.");
}
}
