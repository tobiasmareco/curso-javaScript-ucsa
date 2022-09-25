const $ = (selector) => document.querySelector(selector);
// localStorage.clear();
var sociosDatos;
if (localStorage.getItem("cuentas") == null) {
    var sociosDatos = [];
} else {
    sociosDatos = JSON.parse(localStorage.getItem("cuentas"));
    console.log(sociosDatos);
}

$("#formData").addEventListener("submit", (e) => {
    // e.preventDefault();
    let nombre = $("#nombre_apellido").value;
    let numCuenta = $("#numero_cuenta").value;
    let tipCuenta = $("#tipo_cuenta").value;
    let numSocio = $("#numero_socio").value;
    let saldo = $("#saldo_cuenta").value;
    insertLocalStorage(nombre, numCuenta, tipCuenta, numSocio, saldo);
});

function insertLocalStorage(nombre, numCuenta, tCuenta, numSocio, saldo) {
    let tipCuenta = getTipCuenta(tCuenta);
    let cuentas = { nombre, numCuenta, tipCuenta, numSocio, saldo };
    sociosDatos.push(cuentas);
    localStorageItems(sociosDatos);
}

function getTipCuenta(props) {
    switch (props) {
        case "1":
            return "Ahorro programado";
        case "2":
            return "Ahorro a la vista";
        case "3":
            return "Prestamo";
        case "4":
            return "Tarjeta de credito";
        default:
            return "No seleccionado";
    }
}

function localStorageItems(props) {
    localStorage.setItem("cuentas", JSON.stringify(props));
}
