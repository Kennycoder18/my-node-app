const API_URL = 'http://localhost:3000';

function register() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

fetch(API_URL + '/register', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
})
.then(res => res.text())
.then(data => {
    document.getElementById('message').innerText = data;
});
}

function login() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

fetch(API_URL + '/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
})
.then(res => res.text())
.then(data => {
    document.getElementById('message').innerText = data;
});
}