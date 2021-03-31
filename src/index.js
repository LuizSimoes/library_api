const express = require('express');
const app = express();
const PORT = 3000;

const controller = require('./controllers/userController');

app.use(express.json());

app.post('/users', controller.createUser);
app.post('/login', controller.loginUser);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
