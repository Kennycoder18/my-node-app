const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.json());

// Fake database (temporary)
const users = [];

// REGISTER
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).send('User already exists');
  }

  users.push({ username, password });
  res.send('User registered successfully');
});

// LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  res.send('Login successful 🎉');
});

const bcrypt = require('bcrypt');


// SERVER
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});