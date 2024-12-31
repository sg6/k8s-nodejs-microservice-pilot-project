interface Product {
    id: number;
    name: string;
    price: number;
}

interface User {
    id: string;
    name: string;
    age: number;
}

// @ts-ignore
const productApiUrl: string | undefined = window.productApiUrl || import.meta.env.VITE_PRODUCT_API_URL;
// @ts-ignore
const userApiUrl: string | undefined = window.userApiUrl || import.meta.env.VITE_USER_API_URL;

console.log(
    productApiUrl,
    userApiUrl,
)

async function getProducts() {
    if (!productApiUrl) {
        console.log('productApiUrl is undefined');
        return;
    }

    const products: Product[] = await fetch(productApiUrl +  "/api/v1/products").then(res => res.json());
    document.querySelector<HTMLDivElement>('#app')!.innerHTML +=
        `<ul>
            ${products.map(product => `
                
                    <li>
                    <h2>${product.name}</h2>
                    <span>${product.price}</span>
                    </li>
                
                `)
            .join('')}
        </ul>`;

}

async function getUsers() {
    if (!userApiUrl) {
        console.log('userApiUrl is undefined');
        return;
    }

    const users: User[] = await fetch(userApiUrl + "/api/v1/users/").then(res => res.json());
    document.querySelector<HTMLDivElement>('#app')!.innerHTML +=
        `<hr>
        <ul>
            ${users.map(user => `
                
                    <li>
                    <h2>${user.name}</h2>
                    <span>${user.age}</span>
                    </li>
                `)
            .join('')}
        </ul>`;
}

getProducts().then(() => {
    getUsers().then(() => {
        console.log('finished API calls');
    })
});