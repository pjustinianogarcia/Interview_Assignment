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
    function displayProducts(products){

    //get the imageGrid div form the HTML
    const imageGrid = document.getElementById("imageGrid");

    imageGrid.innerHTML = "";

   

    //created a card for each product
      products.forEach((product) => {
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


// function for search functionality
function search() {
    const input = document.getElementById("searchImg").value.toLowerCase();
    
  
    // function to filter products
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(input)
    );
  
  
    // callback to filter products
    displayProducts(filteredProducts);
  }

//function to filter by price
 function filterByPrice() {
    const maxPrice = document.getElementById("priceRange").value;
    //update the max price to be the input of the range
    document.getElementById("priceValue").textContent = maxPrice;

    // filter products if they meet the condition
    const filteredProducts = allProducts.filter((product) =>
        product.price <= maxPrice);

    //display the filtered prodcuts
    displayProducts(filteredProducts);

 }

 // function to clear all filters
function clearFilters() {
    //get all of the inputs by id and reset them
    document.getElementById("searchImg").value = ""; 
    document.getElementById("priceRange").value = 700; 
    document.getElementById("priceValue").textContent = "700"; 
    
    //display all products again
    displayProducts(allProducts); 
}

