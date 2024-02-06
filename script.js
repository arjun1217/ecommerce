document.addEventListener("DOMContentLoaded", function () {
  var selectedColor = null;
  var selectedSize = null;

  function addToCart() {
    if (selectedColor && selectedSize) {
      var addToCartMessage = document.querySelector('.add-to-cart-message');
      addToCartMessage.textContent = 'Product added to cart: Embrace Sideboard with Color ' + selectedColor +
        ' and Size ' + selectedSize;
      addToCartMessage.style.display = 'block';
    } else {
      alert('Please select color and size before adding to cart.');
    }
  }

  function selectColor(button) {
    var colorButtons = document.querySelectorAll('.color-box');
    colorButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
    selectedColor = button.getAttribute('data-color');
  }

  function selectSize(button) {
    var sizeButtons = document.querySelectorAll('.size-label');
    sizeButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
    selectedSize = button.innerText;
  }

  function decrementQuantity() {
    var quantitySpan = document.getElementById('quantity');
    var quantity = parseInt(quantitySpan.innerText, 10);

    if (quantity > 1) {
      quantity--;
      quantitySpan.innerText = quantity;
    }
  }

  function incrementQuantity() {
    var quantitySpan = document.getElementById('quantity');
    var quantity = parseInt(quantitySpan.innerText, 10);

    quantity++;
    quantitySpan.innerText = quantity;
  }

  // Attach event listeners
  document.querySelector('.add-to-cart').addEventListener('click', addToCart);

  var colorButtons = document.querySelectorAll('.color-box');
  colorButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectColor(btn);
    });
  });

  var sizeButtons = document.querySelectorAll('.size-label');
  sizeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectSize(btn);
    });
  });

  document.querySelector('.quantity-selector button:first-child').addEventListener('click', decrementQuantity);
  document.querySelector('.quantity-selector button:last-child').addEventListener('click', incrementQuantity);
});
