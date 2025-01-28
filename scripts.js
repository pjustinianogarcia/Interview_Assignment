fetch('https://fakestoreapi.com/products?limit=9')
.then(res => res.json())
.then(json => {
    const imageContainer = document.querySelector('.image-container');
    json.forEach(product => {
        const img = document.createElement('img');
        img.src = product.image; 
        img.alt = product.title; 
        imageContainer.appendChild(img); 
    });
})
.catch(err => console.error('Error fetching the images:', err));