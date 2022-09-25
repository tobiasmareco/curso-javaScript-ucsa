'use strict'
const $ = selector => document.querySelector(selector);

if (typeof (localStorage) != undefined) {
    console.log('support');
    localStorage.setItem('user_name', 'Tobias Mareco');
    $('#username').textContent = localStorage.getItem('user_name');
} else {
    console.log('dont support');
}

let user = {
    name: localStorage.getItem('user_name'),
    email: 'tobiasmareco@gmail.com',
    phone: 595989489948,
    profile: {
        admin: true,
        id: 12,
        area: 'Web Developer'
    }
};

localStorage.setItem('user_connected', JSON.stringify(user));
let userDataJson = new Array(JSON.parse(localStorage.getItem('user_connected')));
userDataJson.forEach(element => {
    let email = document.createElement('P');
    email.textContent = `Email : ${element.email}`;
    $('#userdata').append(email);
    let phone = document.createElement('P')
    phone.textContent = `Phone : ${element.phone}`;
    $('#userdata').append(phone);
    let ProfileAdmin = document.createElement('P');
    ProfileAdmin.textContent = `Admin = ${element.profile.admin}`;
    $('#userdata').append(ProfileAdmin);
    let ProfileArea = document.createElement('P')
    ProfileArea.textContent = `Area = ${element.profile.area}`;
    $('#userdata').append(ProfileArea);
});

// localStorage.clear();