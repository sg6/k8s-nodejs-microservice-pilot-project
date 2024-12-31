interface Product {
    id: number;
    name: string;
    price: number;
}

console.log('hello world');

const products: Product[] = await fetch('http://localhost:3001/api/v1/products').then(res => res.json());
console.log(products);

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
`
${products.map(product => `
<ul>
    <li>
    <h2>${product.name}</h2>
    <span>${product.price}</span>
    </li>
</ul>
`).join('')}
`;`
`;
