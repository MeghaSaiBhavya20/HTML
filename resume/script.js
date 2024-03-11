document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product button');
    const cart = document.querySelector('#cart ul');
    const checkoutButton = document.querySelector('#checkout');
  
    products.forEach(product => {
      product.addEventListener('click', function() {
        const item = this.parentElement.cloneNode(true);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
          item.remove();
        });
        item.appendChild(removeButton);
        cart.appendChild(item);
      });
    });
  
    checkoutButton.addEventListener('click', function() {
      alert('Thank you for shopping with us!');
      cart.innerHTML = '';
    });
  });
  