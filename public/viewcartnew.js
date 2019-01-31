$(document).ready(function() {
  function renderItems() {
    $('.shopping-cart').empty();
    $('.shopping-cart').append(`<div class="title">Shopping Cart</div>`);
    const customerCart = JSON.parse(localStorage.getItem(`cart`));
    let total = 0;
    customerCart.forEach((item, itemIndex) => {
      let itemTotal = item.price * item.incart;
      total += parseFloat(item.price) * parseFloat(item.incart);
      console.log(total.toFixed(2));
      // total += parseFloat(item.price) * parseFloat(item.incart);
      $(`.shopping-cart`).append(`<div class="item">
    <div class="buttons">
    <img id="delete-btn" src="./pictures/x-mark.png" alt="delete" data-index=${itemIndex}>
    </div>
 
    <div class="image">
      <img src="./pictures/cucumber.png" alt style="max-width: 45%;"> 
    </div>
 
    <div class="description">
      <span>${item.name}</span>
      <!----<span>Bball High</span>
      <span>White</span>-->
    </div>
 
    <div class="quantity" data-index=${itemIndex}>
      <button class="plus-btn" type="button" name="button">
        <img src="./pictures/plus.png" alt="" />
      </button>
      <input type="text" name="name" value="${item.incart}">
      <button class="minus-btn" type="button" name="button">
        <img src="./pictures/minus.png" alt="" />
      </button>
    </div>
 
    <div class="total-price"><span>Total:</span> $${itemTotal.toFixed(2)}</div>
  </div>`);
    });

    $(`.shopping-cart`).append(`<br>
  <div class="grand-totaltopic">
      <span>Grand Total:</span>
  <div class="grand-total">$ ${total.toFixed(2)}</div>
  `);
  }

  renderItems();

  $(document).on('click', '#delete-btn', function(e) {
    const itemIndex = $(this).data('index');
    const customerCart = JSON.parse(localStorage.getItem(`cart`));
    customerCart.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(customerCart));
    renderItems();
  });

  $(document).on('click', '.quantity', function(e) {
    var $this = $(this),
      itemIndex = $this.data('index'),
      $input = $this.closest(`div`).find(`input`),
      value = parseInt($input.val()),
      btn = $(e.target)
        .parent()
        .attr('class');

    if (btn === `minus-btn`) {
      value = value > 1 ? value - 1 : 0;
    } else if (btn === 'plus-btn') {
      value = value < 100 ? value + 1 : 100;
    }
    const customerCart = JSON.parse(localStorage.getItem(`cart`));
    customerCart[itemIndex].incart = value;
    localStorage.setItem('cart', JSON.stringify(customerCart));
    renderItems();
  });
})