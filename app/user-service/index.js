const express = require('express');
const app = express();

const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const port = process.env.PORT|| 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World from User Service');
});

const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Jane',
        age: 21
    },
    {
        id: 3,
        name: 'Jake',
        age: 22
    },
    {
        id: 4,
        name: 'Jill',
        age: 23
    },
    {
        id: 5,
        name: 'Jen',
        age: 24
    }
];

app.get('/api/v1/users', (req, res) => {
    return res.status(200).send(users);
});

app.get('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    return res.status(200).send(user);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});