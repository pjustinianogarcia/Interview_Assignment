fetch('https://fakestoreapi.com/products?limit=9')
            .then(response=>response.json())
            .then(json=> { 

const imageContainer = document.getElementById("imageContainer");
const imageGrid = document.getElementById("imageGrid");

json.forEach(product => {
   const productCard = document.createElement("div");
   

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.tittle;

    

    const title = document.createElement("div");
    title.textContent = product.title

    const price = document.createElement("div")
    price.textContent = `$${product.price.toFixed(2)}`

    productCard.appendChild(image);
    productCard.appendChild(title);
    productCard.appendChild(price);

    imageGrid.appendChild(productCard)
});
});

