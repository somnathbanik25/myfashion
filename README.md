
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fashion Hub</title>
  <style>
    /* Reset default browser styles */
    body, h1, p, ul, li {
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    /* Header styles */
    header {
      background-color: #1909ac;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }
    header h1 {
      font-size: 2.5rem;
    }
    /* Navigation styles */
    nav {
      background-color: #cdc30f;
      display: flex;
      justify-content: center;
      padding: 0.5rem;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 1rem;
    }
    /* Hero section styles */
    .hero {
      background-image: url('path-to-hero-image.jpg');
      background-size: cover;
      background-position: center;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #05156d;
      text-align: center;
    }
    .hero h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    /* Products section styles */
    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
    .product {
      border: 1px solid #ddd;
      padding: 1rem;
      text-align: center;
    }
    .product img {
      max-width: 100%;
      height: auto;
    }
    .product h3 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
    /* Footer styles */
    footer {
      background-color: #333;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <h1>Fashion Website</h1>
  </header>

  <!-- Navigation -->
  <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div>
      <h2>Welcome to our Fashion Store</h2>
      <p>Coming soon</p>
    </div>
  </section>

  <!-- Products Section -->
  <section class="products">
    <div class="product">
      <img src="path-to-product-image-1.jpg" alt="Kurti">
      <h3>Kurti</h3>
      <p>Price: ₹599</p>
    </div>
    <div class="product">
      <img src="path-to-product-image-2.jpg" alt="Women's T-shirt">
      <h3>Women's T-shirt</h3>
      <p>Price: ₹399</p>
    </div>
    <div class="product">
      <img src="path-to-product-image-2.jpg" alt="Women's T-shirt">
      <h3>Women's T-shirt</h3>
      <p>Price: ₹399</p>
    </div>
    <div class="product">
      <img src="path-to-product-image-2.jpg" alt="Women's T-shirt">
      <h3>Women's T-shirt</h3>
      <p>Price: ₹399</p>
    </div>
    <!-- Add more product divs as needed -->
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; Somnath Banik. All rights reserved.</p>
  </footer>
</body>
</html>