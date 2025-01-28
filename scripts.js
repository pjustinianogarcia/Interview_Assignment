fetch('https://fakestoreapi.com/products?limit=9')
            .then(res=>res.json())
            .then(json=>console.log(json))