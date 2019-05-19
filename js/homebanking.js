//Declaración de variables
var nombreUsuario = 'Tatiana';
var saldoCuenta = 6000;
var limiteExtraccion = 5000;
var montoADepositar;
var nuevoLimite;
var importe;
var servicio;
var impuesto;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";






//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(monto){
    saldoCuenta+=monto;
}

function restarDinero(monto){
    saldoCuenta-=monto;
}



function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese nuevo límite de extracción"));
    if (isNaN(nuevoLimite)) {
        alert("Operación cancelada");    
    }
    else  {
        limiteExtraccion = nuevoLimite
        actualizarLimiteEnPantalla()
        window.alert(`Tu nuevo límite de extracción es de $${limiteExtraccion}`);  
    }
    
}

function extraerDinero(){
     var montoAExtraer = parseInt(prompt("Ingrese monto a retirar"));
        if (isNaN(montoAExtraer)) {
            alert("Operación cancelada");
        }
        else if (montoAExtraer > saldoCuenta) {
            alert("Saldo insuficiente");
        }
        else if (montoAExtraer > limiteExtraccion) {
            alert("El monto que intentas extraer supera el límite diario");
        }
        else if (montoAExtraer % 100 !== 0) {
            alert("Solo disponemos de billetes de $100. Intentá con otro monto.");
        }
        else if (montoAExtraer <= saldoCuenta) {
            var saldoAnterior = saldoCuenta;
            restarDinero(montoAExtraer)          
            actualizarSaldoEnPantalla();
            alert(`Retiraste $${montoAExtraer} de tu cuenta.\nTu saldo actual es de $${saldoCuenta}.\nSaldo anterior: $${saldoAnterior}`)
        }
}

function depositarDinero(montoADepositar) {
   var montoADepositar =parseInt(prompt("Ingrese monto a depositar"));
   if (isNaN(montoADepositar)) {
       alert("Operación cancelada");
   }
   else {
   var saldoAnterior = saldoCuenta;
   sumarDinero(montoADepositar);
   actualizarSaldoEnPantalla();
   alert(`El deposito de $${montoADepositar} se ha realizado correctamente.\nTu saldo actual es de $${saldoCuenta}.\nSaldo anterior: $${saldoAnterior}`);
   }
}


function pagarServicio() {
    
    //Funcion local para ejecutar en el case

    function impuesto (importe){
        if (importe > saldoCuenta){
            alert("No tenes saldo suficiente para realizar la operación");
         }
         else {
            var saldoAnterior = saldoCuenta;
            restarDinero(importe);
            actualizarSaldoEnPantalla();
            alert(`Se realizo el pago del servicio de ${servicio} .\nImporte: $${importe}.\nSaldo anterior: $${saldoAnterior}.\nSaldo actual: $${saldoCuenta}`)
        }   
    }
    
    var servicio = prompt("Elegí el servicio que vas a abonar:\n1- Agua\n2- Teléfono\n3- Luz\n4- Internet");      
           
    switch (servicio) {
       case "1":
       var servicio = "Agua"
       impuesto(350);    
       break;
       case "2":
       var servicio = "Teléfono"
       impuesto(425);
       break;
       case "3":
       var servicio = "Luz"
       impuesto(210);
       break;
       case "4":
       var servicio = "Internet"
       impuesto(570);
       break;
       default:
       alert("Operación cancelada");
   }
}


function transferirDinero() {
    var montoATransferir = parseInt(prompt("Ingresa el monto a transferir"));
        if (montoATransferir > saldoCuenta){
        alert("No tenes saldo suficiente para realizar la operación");
        }
        else if(montoATransferir <= saldoCuenta) {
        var numeroDeCuenta = (prompt("Ingresa el número de cuenta que recibirá la transferencia"));
    }

        if (numeroDeCuenta === cuentaAmiga1 || numeroDeCuenta === cuentaAmiga2){
        restarDinero(montoATransferir)           
        actualizarSaldoEnPantalla()
        alert(`Se transfirieron $${montoATransferir}.\nCuenta destino:${numeroDeCuenta}`);
        
    }
        else {
        alert("Solo podes realizar transferencia a cuentas amigas");
  }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = (`Tu límite de extracción es: $${limiteExtraccion}`);
}