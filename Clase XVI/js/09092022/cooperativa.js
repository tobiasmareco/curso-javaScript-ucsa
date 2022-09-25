const $ = selector => document.querySelector(selector);
if (localStorage.length <= 0) {
    let nodata = document.createElement('H3');
    nodata.textContent = `NO SE ENCUENTRAN SOCIOS EN LA COOPERATIVA`;
    nodata.classList.add('nodata');
    let btnAddSocio = document.createElement('A');
    btnAddSocio.textContent = 'Agregar socios';
    btnAddSocio.classList.add('btn')
    btnAddSocio.addEventListener('click', () => {
        console.log('click');
        btnAddSocio.href = '/html/page-1.html';
    })
    $('#cooperativa-data').append(nodata, btnAddSocio);
} else {
    let data = JSON.parse(localStorage.getItem('cuentas'));
    console.log(data);
    data.forEach(element => {
        let div = document.createElement('DIV');
        let nombre = document.createElement('h3');
        nombre.textContent = element.nombre;
        div.append(nombre);
        let numCuenta = document.createElement('P');
        numCuenta.textContent = "N° cuenta : " + element.numCuenta;
        div.append(numCuenta);
        let tipoCuenta = document.createElement('P');
        tipoCuenta.textContent = "Tipo de cuenta : " + element.tipCuenta;
        div.append(tipoCuenta);
        let numSocio = document.createElement('P');
        numSocio.textContent = "N° socio : " + element.numSocio;
        div.append(numSocio);
        let saldo = document.createElement('P');
        saldo.textContent = "Saldo : " + element.saldo;
        div.append(saldo);
        div.classList.add('card');
        $('#data-socios').append(div);
    });
}