    const customercart = JSON.parse(localStorage.getItem(`product1`))
    $(`.shopping-cart`).append(`<div class="item">
    <div class="buttons">
        <span class="delete-btn"><img src="./pictures/x-mark.png" alt="" /></span>
      <!--<span class="like-btn"></span>-->
    </div>
 
    <div class="image">
      <img src="./pictures/cucumber.png" alt style="max-width: 45%;"> 
    </div>
 
    <div class="description">
      <span>${customercart[0]}</span>
      <!----<span>Bball High</span>
      <span>White</span>-->
    </div>
 
    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        <img src="./pictures/plus.png" alt="" />
      </button>
      <input type="text" name="name" value="${customercart[2]}">
      <button class="minus-btn" type="button" name="button">
        <img src="./pictures/minus.png" alt="" />
      </button>
    </div>
 
    <div class="total-price"><span>Total:</span> $50</div>
  </div>
  ${generatetotal(customercart[1],customercart[2])}
    `)
    $(`.quantity`).on(`click`, function(e) {
    e.preventDefault();
    var $this = $(this),
    $input = $this.closest(`div`).find(`input`),
    value = parseInt($input.val()),
    btn = $this.data(`btn`);
    
    if (btn === `minus`) {
    value = value > 1 ? value - 1 : 0;
    } else 
    {
    value = value < 100 ? value + 1 : 100;
     }
     console.log(value)
    customercart[2] = value
    localStorage.setItem(`product1`,JSON.stringify(customercart))
    location.reload()
    // $input.val(value);
     });

     $(`.delete-btn`).on(`click`, function(e) {
        $(this).parent().parent().hide();
       });
       function generatetotal(price, quantity){
           price = parseInt(price)
           quantity = parseInt(quantity)
           console.log(price, quantity)
        return `<br>
        <div class="grand-totaltopic">
            <span>Grand Total:</span>
        <div class="grand-total">$ ${price * quantity}</div>
        `

       }