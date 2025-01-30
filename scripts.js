//scripts.js

//store products in an array
let allProducts = [];

//fetch 9 products from api
fetch("https://fakestoreapi.com/products?limit=9")
  .then((response) => response.json())
  .then((json) => {

    //store all fetch products in an array
    allProducts = json
    displayProducts(allProducts);
});

    //function to display each products
    function displayProducts(product){

    //get the imageGrid div form the HTML
    const imageGrid = document.getElementById("imageGrid");

    //created a card for each product
      allProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("productCard");

      // create an img element with src and alt attributes
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.tittle;

      //created title div
      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = product.title;

      //created price div
      const price = document.createElement("div");
      price.classList.add("price");
      price.textContent = `$${product.price.toFixed(2)}`;

      //append image, title, and price to the product card
      productCard.appendChild(image);
      productCard.appendChild(title);
      productCard.appendChild(price);

      //append the product  card to the HTML image grid
      imageGrid.appendChild(productCard);
    
    });
  };




 
