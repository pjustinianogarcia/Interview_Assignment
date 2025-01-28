fetch('https://fakestoreapi.com/products?limit=9')
.then(res => res.json())
.then(json => {
    const imageContainer = document.querySelector('.image-container');
    json.forEach(product => {
        const img = document.createElement('img');
        img.src = product.image; // Set image source
        img.alt = product.title; // Add alt text for accessibility
        imageContainer.appendChild(img); // Append to the container
    });
})
.catch(err => console.error('Error fetching the images:', err));