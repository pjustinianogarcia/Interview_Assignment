# Fetch and Display Data from an API

This code fetches data from [Fake Store API](https://fakestoreapi.com/).
It displays the first 9 products on a grid with their name and price. 

## Overview

This application fetches products from [Fake Store API](https://fakestoreapi.com/) and displays them on a grid in the webpage. Users can search for products by name and filter them based on price.

### Features

- **Fetches and displays the first 9 products from the FakeStore API.**
- **Allows users to search for products by name using a search bar.**
- **Provides a price range filter to display products within a selected price range.**

### Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## How It Works

### Fetching Products

- The application fetches 9 products from the API using the `fetch` method.

- The fetched products are stored in an array `[allProducts]`.

- The displayProducts function is called to render the products.

### Displaying Products

- The displayProducts function creates a product card for each product containing:
   - **Product image**
   - **Product title**
   - **Product price**

- The cards are appended to the imageGrid div in the HTML.

### Search Functionality

- Users can search for products by entering text in the search bar.

- The search function filters the allProducts array based on the search input.

- The filtered products are displayed in real-time.

### Price Filtering

- A price range input allows users to set a maximum price.

- The filterByPrice function filters products based on the selected price.

- The displayed products are updated dynamically as the price range changes.




