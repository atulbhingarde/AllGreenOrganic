
const renderMarkets = function(){
  $.get('/api/suppliers').then(function(listMarkets){
    console.log('List of markets');
  console.log(listMarkets);
})
}
renderMarkets();



const renderCustomers = function(){
  $.get('/api/customers').then(function(listCustomers){
    console.log('List of customers');
    console.log(listCustomers);
    
})
}
renderCustomers();




$('.reNameMe').html('this DIV sample append');

let onHand;

const renderProducts = function(listProducts) {
    
      // console.log('List of Products');
      // console.log(listProducts);
      $('#reNameMe2').html('this is some sample');
      onHand = listProducts; 
      // console.log(onHand);
      // console.log('do it again table');

      $(document).ready(function() {
        $('#inStock').DataTable( {
        
        data: onHand,    
          columns: [
              { data: "market_id" },
              { data: "product_name" },
              { data: "price" },
              { data: "unit" }
          ]
      });
      // console.log('after the fact');
      // console.log(onHand);
      // console.log(listProducts);
    });


   // console.log('do it again table2');
}

const retreiveProducts = function() {
  $.get('/api/products').then(renderProducts);
  }

retreiveProducts();

$('#reNameMe2').html('this is some sample');


//this is the document ready function that says to render all the items in the database, to the table.
// $(document).ready(() => {
//   $.ajax({
//     url: "/api/suppliers",
//     type: "GET"
//   }).then(function(rows) {
//     console.log(rows);
//   });

// })

// below is Dan homework samples

// // declare dummy array to hold on hand stock - duplicate 
// //for dbStock to avoid conflict between the two methods/functions (not good, but being cautious)
// let onHand;
// // retreive the inventory and render it to the screen in #inStock html class
// const renderInventory = function(dbStock){

// onHand = dbStock;

//     $(document).ready(function() {
//       $('#inStock').DataTable( {

//         data: dbStock,    
//           columns: [
//               { data: "item_id" },
//               { data: "product_name" },
//               { data: "price" }
//           ]
//       } );
//     });
//   };
  
//  const retreiveInventory = function() {
//   $.get('/api/stock').then(renderInventory);
// }
// retreiveInventory();

// const placeOrder = function(event){
//   event.preventDefault();

  
// //console.log('submit is pressed.');
//   // Save the shopper input in an object called 'order'

// item = document.getElementById("Product ID").value;
// qty = document.getElementById("Quantity").value;
// let orderProduct = item-1;
// let orderQuantity = qty;
// let qtyInStock = onHand[orderProduct].stock_quantity;
// alert('The order is for ' + qty + `   ${onHand[orderProduct].product_name}` + 's') ; 


// //console.log(qtyInStock+ " "+ onHand.length);

// if ( qtyInStock > orderQuantity) {
//   Cost = (orderQuantity * onHand[orderProduct].price);
//   alert('Yes we can service that order, your cost will be $'  + `${Cost}`);
//   // update db to deplete the order quantity
//   newQtyStock = parseInt(onHand[orderProduct].stock_quantity - orderQuantity);
//   //  console.log(newQtyStock);
//   // ajax call to api route to update available quantity on hand in database
//   $.ajax({  
//     url: `/api/quantity/${item}`,  
//     type: 'PUT',  
//     dataType: 'JSON',  
//     data: {stock_quantity: `${newQtyStock}`},  

// })

// }else {
//   alert('Sorry, we do not have sufficient stock to fulfil that order.');
// }
//     // Blank our inputs after POST
//       $('#Product ID').val('');
//       $('#Quantity').val('');
// }
// $('#article-btn').on('click', placeOrder);















//////  below is Sai homework sample



// let cart = [];
// //this is the function to render all items in a database.
// const renderItems = function(items) {

//   items.forEach(function(item) {
//     let newProduct = $(` <tr>
//           <td class="id">${item.item_id}</td>
//           <td class="product_name">${item.product_name}</td>
//           <td class="department_name">${item.department_name}</td>
//           <td class="price">${item.price}</td>
//           <td class="stock_quantity">${item.stock_quantity}</td>
//           <td class="quantity"><input class="buy1" id="input"></td>
//           <td><button type="button" class="btn btn-info">Add to Cart</button><td>
//         </tr>`);
//     $(".tbodypage").append(newProduct);
//   });
// };

// const clearInput = function() {
//   $("[id =input]").val("");
// };

// const validate = function(item) {
//   if (item.incart.padStart(4,0) > item.instock.padStart(4,0)) {
//     $(".alert").removeClass("hide");
//     clearInput();
//   } else if (isNaN(item.incart)){
//     $(".alert").removeClass("hide");
//     clearInput();
//   }
//   else {
//     cart.push(item);
//     clearInput();
//   }
// };



// //this is the document ready function that says to render all the items in the database, to the table.
// $(document).ready(() => {
//   $.ajax({
//     url: "/api/products",
//     type: "GET"
//   }).then(function(rows) {
//     renderItems(rows);
//   });
//   //this says when the add to cart button is clicked, to then add the data to the array.
//   $(".table-body").on("click", ".btn", function() {
//     $(".alert").addClass("hide");
//     const item = {
//       id: $(this)
//         .parents("tr")
//         .find(".id")
//         .text(),
//       name: $(this)
//         .parents("tr")
//         .find(".product_name")
//         .text(),
//       department: $(this)
//         .parents("tr")
//         .find(".department_name")
//         .text(),
//       price: $(this)
//         .parents("tr")
//         .find(".price")
//         .text(),
//       instock: $(this)
//         .parents("tr")
//         .find(".stock_quantity")
//         .text(),
//       incart: $(this)
//         .parents("tr")
//         .find(".buy1")
//         .val()
//     };

//     validate(item);
   

//     console.table(cart);
//   });

//   $(".btncart").on("click", function(event) {
//     event.preventDefault();
//     $(".modal-body").empty();
// console.log("btncart");
//     $('.modal-body').append (`  <table class="table">
//     <thead class="thead-dark">
//       <tr>
//         <th scope="col">Product Id</th>
//         <th scope="col">Product Name</th>
//         <th scope="col">Department</th>
//         <th scope="col">Cost (USD)</th>
//         <th scope="col">Quanity</th>
//       </tr>
//     </thead>
//     <tbody class="tbodymodal table-body"></tbody>
//   </table>
//   <div class="totalCart"></div>`);
//     let totalcost = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalcost += (parseFloat(cart[i].price)*parseFloat(cart[i].incart.padStart(3,0)))
//       console.log(cart[i]);
//       $(".tbodymodal").append(`<tr>
//     <td class="cartid">${cart[i].id}</td>
//           <td class="cart-product_name">${cart[i].name}</td>
//           <td class="cart-department_name">${cart[i].department}</td>
//           <td class="cart-price">$${cart[i].price}</td>
//           <td class="cat-quantity">${cart[i].incart}</td>
//           </tr>`);
          
//     }
//     $(".totalCart").empty();
//     $(".totalCart").append(`<h4>TOTAL PRICE:    $${totalcost}</h4>`)
//     $(".modal").modal("show");
//   });

  
// });

// $(".btnPurchase").on("click", function (){
  
//   for(let i=0; i< cart.length; i++){
//     const inCartnow = cart[i].incart ;
//     const inStocknow = cart[i].instock ; 
//     const newStock = function (a,b){
//       return a - b;
//     }
//      stockUpdate= newStock(inStocknow, inCartnow)
//     $.ajax({
//       url: `/api/products/${cart[i].id}`,
//       type: "PUT",
//       data: `stock_quantity= ${stockUpdate}`
//     }).then(function(data) {
//       $('.tbodypage').empty();
//       renderItems(data);
//     }).catch(function(data){
//       console.log(data);
//     })
//     $('.modal-body').empty();
//     $('.modal-body').append("Purchase approved!")

//   }
//   cart= [];
// });
