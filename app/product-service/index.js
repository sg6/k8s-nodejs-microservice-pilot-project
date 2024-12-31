const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
const bodyParser = require("body-parser");
dotenv.config();

const port = process.env.PORT|| 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World from Product Service');
});

const products = [
    {
        id: 1,
        name: 'Adidas Original Sneakers',
        price: 89.99,
    },
    {
        id: 2,
        name: 'Nike Air Force 1 Shoes',
        price: 129.99,
    },
    {
        id: 3,
        name: 'New Balance 9000 Shoes',
        price: 159.99,
    }
];

app.get('/api/v1/products', (req, res) => {
    return res.status(200).send(products);
});

app.get('/api/v1/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = products.find(user => user.id === id);
    return res.status(200).send(user);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});