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

    


    productCard.appendChild(image);


    imageGrid.appendChild(productCard)
});
});

