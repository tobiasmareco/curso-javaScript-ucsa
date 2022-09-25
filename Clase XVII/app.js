// console.log('hello');

// let users;
// const $ = (selector) => document.querySelector(selector);
// let userDiv = $('#users');
// let cargandoSpan = $('#cargando');

// fetch('https://reqres.in/api/users')
//     .then((user) => user.json())
//     .then(userJSN => {
//         users = userJSN.data;
//         // users.forEach(usr => {
//         //     console.log(usr.email);
//         users.map((usr, index) => {
//             let h1 = document.createElement('H1');
//             h1.textContent = `${index} - ${usr.email}`;
//             userDiv.appendChild(h1);
//         });
//         cargandoSpan.style.display = 'none';
//     });

// --<--------------------------------------------------------------------------------f
const $ = (selector) => document.querySelector(selector);

let cars = {
    marca: 'Toyota',
    modelo: 'Ractis',
    anho: 2005,
    color: 'Gris',
    imagen: 'https://clasicdn.paraguay.com/pictures/2018/12/03/1275076/4577969L.jpg'
};

function Users() {
    return fetch('https://reqres.in/api/users')
};

function getAllUsers() {
    Users()
        .then(get_user => get_user.json())
        .then(userData => getListUsers(userData.data))
        .then(get_user_id => getUserId(2))
        .then(userId => {
            let userIdDiv = document.createElement('DIV');
            userIdDiv.classList = 'userItemId'
            let title = document.createElement('H2');
            title.textContent = `${userId.first_name} ${userId.last_name}`;
            let email = document.createElement('P');
            email.textContent = `${userId.email}`;
            let image = document.createElement('IMG');
            image.src = `${userId.avatar}`;
            userIdDiv.append(title);
            userIdDiv.append(email);
            userIdDiv.append(image);
            $('#userId').appendChild(userIdDiv);
            $('#cargandoUserId').style.display = 'none';
        })
        .then(getCar => getCarData())
        .then(car => showCar(JSON.parse(car)))
};

function UserId(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
};

function getUserId(id) {
    let dataId = UserId(id);
    return dataId.then((data) => data.json())
        .then(userId => userId.data)
};

function getListUsers(users) {
    if (!users) {
        console.log('No se han Encontrado datos de usuarios');
        return;
    }
    // console.log(users)
    users.forEach(user => {
        let userItemsDiv = document.createElement('DIV');
        userItemsDiv.classList = `${user.id}`;
        let title = document.createElement('H2');
        title.textContent = `${user.first_name} ${user.last_name}`;
        let email = document.createElement('P');
        email.textContent = `${user.email}`;
        let image = document.createElement('IMG');
        image.src = `${user.avatar}`;
        userItemsDiv.appendChild(title);
        userItemsDiv.appendChild(email);
        userItemsDiv.appendChild(image);
        $('#users').appendChild(userItemsDiv);
    });
    $('#cargandoUsers').style.display = 'none';
};

function getCarData() {
    return new Promise((resolve, reject) => {
        let value = JSON.stringify(cars);
        setTimeout(() => {
            console.log(value);
            if (typeof (value) != 'string') {
                return reject('No se pudo convertir a String')
            }
            return resolve(JSON.stringify(cars));
        }, 3000);
    })
};

function showCar(carData) {
    let div = document.createElement('DIV');
    let marca = document.createElement('h2');
    marca.textContent = carData.marca;
    let modelo = document.createElement('P');
    modelo.textContent = carData.modelo;
    let anho = document.createElement('P');
    let image = document.createElement('IMG');
    image.src = `${carData.imagen}`;
    image.style.borderRadius = '50px'
    anho.textContent = carData.anho;
    div.appendChild(marca);
    div.appendChild(modelo);
    div.appendChild(anho);
    div.appendChild(image);
    $('#cars').appendChild(div);
}
getAllUsers();