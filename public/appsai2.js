let cart = [];
//this is the function to render all items in a database.
const renderItems = (items) => {

  // console.log(item);
  items.forEach(function(item) {
    let newProduct = $(` <tr>
          <td class="image"><img src="${item.prd_image}" width="40%" height="30%"></td>
          <td class="id">${item.id}</td>
          <td class="product_name">${item.product_name}</td>
          <td class="price">${item.price}</td>
          <td class="stock_quantity">${item.unit}</td>
          <td class="quantity"><input class="buy1" id="input" type="number"></td>
          <td><button type="button" class="btn btn-info">Add to Cart</button><td>
        </tr>`);
    $(".tbodypage").append(newProduct);
  });
};

const clearInput = () => {
  $("[id =input]").val("");
};

const saveToLocalData = item => {
  const productInfo = JSON.stringify(item);
//   if (item.incart.padStart(4,0) > item.instock.padStart(4,0)) {
  localStorage.setItem('cart', productInfo);
  return;
};


const validate = item => {
  const localData = JSON.parse(localStorage.getItem('cart'));
  if (!localData|| localData.length === 0) { 
    const productInfo = JSON.stringify([item]);
    localStorage.setItem('cart', productInfo);
  } else if (localData.length >= 1) {
    for (let i = 0; i < localData.length; i++) {
      if (localData[i].id === item.id) {
        localData[i] = item;
        return saveToLocalData(localData);
  }
    }
    localData.push(item);
    return saveToLocalData(localData);
  }
};




//this is the document ready function that says to render all the items in the database, to the table.
$(document).ready(() => {
  $.ajax({
    url: "/api/products",
    type: "GET"
  }).then(function(rows) {
    renderItems(rows);
  });
  //this says when the add to cart button is clicked, to then add the data to the array.
  $(".table-body").on("click", ".btn", function() {
    $(".alert").addClass("hide");
    const item = {
      prd_image: $(this)
        .parents("tr")
        .find(".prd_image")
        .text(),
      id: $(this)
        .parents("tr")
        .find(".id")
        .text(),
      name: $(this)
        .parents("tr")
        .find(".product_name")
        .text(),
    //   department: $(this)
        // .parents("tr")
        // .find(".department_name")
        // .text(),
      price: $(this)
        .parents("tr")
        .find(".price")
        .text(),
    //   instock: $(this)
    //     .parents("tr")
    //     .find(".stock_quantity")
    //     .text(),
        unit: $(this)
        .parents("tr")
        .find(".unit")
        .text(),
      incart: $(this)
        .parents("tr")
        .find(".buy1")
        .val()
    };

    validate(item);
   

    console.table(cart);
  });

  $(".btncart").on("click", function(event) {
    event.preventDefault();
    $(".modal-body").empty();
console.log("btncart");
    $('.modal-body').append (`  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Unit</th>
        <th scope="col">Quanity</th>
      </tr>
    </thead>
    <tbody class="tbodymodal table-body"></tbody>
  </table>
  <div class="totalCart"></div>`);
    let totalcost = 0;
    for (let i = 0; i < cart.length; i++) {
      totalcost += (parseFloat(cart[i].price)*parseFloat(cart[i].incart.padStart(3,0)))
      console.log(cart[i]);
      $(".tbodymodal").append(`<tr>
          <td class="cartid">${cart[i].id}</td>
          <td class="cart-product_name">${cart[i].name}</td>
          <td class="cart-product_name">${cart[i].department}</td>
          <td class="cart-price">$${cart[i].price}</td>
          <td class="cat-unit">${cart[i].incart}</td>
          </tr>`);
          
    }
    $(".totalCart").empty();
    $(".totalCart").append(`<h4>TOTAL PRICE:    $${totalcost}</h4>`)
    $(".modal").modal("show");
  });

  
});

$(".btnPurchase").on("click", function (){
  
  for(let i=0; i< cart.length; i++){
    const inCartnow = cart[i].incart ;
    const inStocknow = cart[i].instock ; 
    const newStock = function (a,b){
      return a - b;
    }
     stockUpdate= newStock(inStocknow, inCartnow)
    $.ajax({
      url: `/api/products/${cart[i].id}`,
      type: "PUT",
      data: `stock_quantity= ${stockUpdate}`
    }).then(function(data) {
      $('.tbodypage').empty();
      renderItems(data);
    }).catch(function(data){
      console.log(data);
    })
    $('.modal-body').empty();
    $('.modal-body').append("Purchase approved!")

  }
  cart= [];
});
