// Get the reference to the h2 element in the hero section
const heroHeading = document.querySelector('.hero h2');

// Add a click event listener to the heroHeading
heroHeading.addEventListener('click', function() {
  alert('Welcome to our Fashion Store!');
});
// Get references to all product cards
const productCards = document.querySelectorAll('.product');

// Add a click event listener to each product card
productCards.forEach(card => {
  card.addEventListener('click', function() {
    // Toggle the 'show-details' class on the clicked product card
    this.classList.toggle('show-details');
  });
});
// Initialize an empty array to store the products in the cart
let cartItems = [];

// Get references to all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.product button');

// Add a click event listener to each 'Add to Cart' button
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the product name from the sibling h3 element
    const productName = this.previousElementSibling.textContent;
    
    // Add the product to the cartItems array
    cartItems.push(productName);

    // Update the cart count display
    updateCartCount();
  });
});

// Function to update the cart count display
function updateCartCount() {
  const cartCountDisplay = document.querySelector('#cart-count');
  cartCountDisplay.textContent = cartItems.length;
}


// Get references to all product cards
const productCards = document.querySelectorAll('.product');

// Add a click event listener to each product card
productCards.forEach(card => {
  card.addEventListener('click', function(event) {
    // Check if the click was on the button inside the card
    if (event.target.tagName !== 'BUTTON') {
      // Toggle the 'show-details' class on the clicked product card
      this.classList.toggle('show-details');
    }
  });
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fashion Website</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
  <script src="{{ url_for('static', filename='script.js') }}" defer></script>
</head>
<!-- ... Rest of the HTML code remains unchanged ... -->
