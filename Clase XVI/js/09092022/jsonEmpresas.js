let testEmpresa = {
    ruc: '80002932-3',
    razonSocial : 'Sisteco SRL',
    actividad : 'Servicios Informaticos',
    capital : 9000000
};
console.log(testEmpresa);
testEmpresa.capital = 500000;
console.log(testEmpresa)
let Empresas = [
{
    ruc : '8000000-4',
    razonSocial : 'Scavone Hnos S.A',
    avividad : 'Farmaceutica',
    capital : 500000
    },
{
    ruc : '8000000-5',
    razonSocial : 'Laboratorios Eticos',
    actividad : 'Farmaceutica',
    capital : 500000
    },
{
    ruc : '8000000-6',
    razonSocial : 'Laboratorios Promepar',
    actividad : 'Farmaceutica',
    capital : 200000
    }
];
const $ = (selector) =>{
    return document.querySelector(selector);
}

let $empresa = $('#empresas');
// console.log($empresa)
Empresas.forEach(item => {
    let title = document.createElement('H3');
    title.textContent = item.razonSocial;
    title.style.font = 'Bold';
    $empresa.appendChild(title);
    let ruc = document.createElement('P');
    ruc.textContent = item.ruc;
    $empresa.appendChild(ruc);
    let actividad = document.createElement('P');
    actividad.textContent = item.actividad;
    $empresa.appendChild(actividad);
    let capital = document.createElement('P');
    capital.textContent = `${item.capital} $`;
    capital.style.color = 'Green';
    $empresa.appendChild(capital);
});