
const MyDebug = false;
const renderMarkets = function()
 {
  $.get('/api/suppliers').then(function(listMarkets)
  {
    MyDebug && console.log('List of markets');
    MyDebug && console.log(listMarkets);
  });
 };
renderMarkets();




const renderCustomers = function()
 {
  $.get('/api/customers').then(function(listCustomers)
   {
    MyDebug && console.log('List of customers');
    MyDebug && console.log(listCustomers);
   });
 };

renderCustomers();




const renderProducts = function(){
  $.get('/api/products').then(function(listProducts){
      MyDebug && console.log('List of Products');
      MyDebug && console.log(listProducts);


    $(document).ready(function() {
      $('#reNameMe2').DataTable( {

        data: listProducts,    
          columns: [
              { data: "market_id" },
              { data: "product_name" },
              { data: "price" },
              { unit: "unit"}
          ]
      } );
    });

})
}

renderProducts();




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
const address = [];
const apiKey = "AIzaSyBtDXqrmP1A6NzPFxzjveh5ICYCFywHeKU";
const placeIDs = [];
let map;
// let userAddress;
let restuarantIDs = [];
// let queryUrl;

//check to see if check boxes are disabled
let btnDisabled = false;

//term to search for
let toSearchFor = "";

//checks to see if user completed form
let isFormComplete = false;

let placesToDump = [];



// $(document).ready(function () {
//     $('#mainTitle').textillate({ in: { effect: 'rollIn' } });
//     $(".form-check-input").on("click", function () {
//         $(this).attr("isSelected", "true");
//         $('#rest-info').empty();
//         toSearchFor = "";
//         toSearchFor = $(this).attr("data-text");

//         isFormComplete = true;
//         restuarantIDs = [];

//         if (!btnDisabled) {
//             disableBoxes(this);

//         } else if (btnDisabled) {
//             releaseBoxes(this);

//         }


//     });
// });
//gets the address the user inputs
const getAddress = () => {
  let street = $("#address").val().trim();
  let city = $("#city").val().trim();
  let state = $("#state").val().trim();
  let zipcode = $("#zipcode").val().trim();

  //pushes it to the address array
  address.push(street, city, state, zipcode);
}
console.log("javascript is hooked up")

$('#submit-geo').on('click', function (event) {
  //if the user has given an address and chosen what they want to search for
  event.preventDefault();
  // alert("working")

//  console.log("in submit go")
      getAddress();

      //sets the address
      let userAddress = address.join();
      let coords;

      let queryUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}&key=${apiKey}`;
      $.ajax({
          url: queryUrl,
          method: 'GET'
      }).then(function (response) {

        console.log(response)
          let source = response.results;
          for (let i = 0; i < source.length; i++) {
              //creates a variable that will hold the users lat and lng coordinates
              coords = { lat: source[i].geometry.location.lat, lng: source[i].geometry.location.lng };

          }
          //initialize map with user's coordinates
          initMap(coords);
      });
  


});


//creates a map to said id
const initMap = (coords) => {
  map = new google.maps.Map(document.getElementById('geo-map'), {
      center: coords,
      //controls how 'zoomed' the map will start
      zoom: 8
  });
  //recieve locations at a 10 mile radius from the user's coordinates
  getRestPlaces(coords);
}

// returns places around the user at 10-mile radius
const getRestPlaces = (coords) => {

  let coordsArr = [];

  for (num in coords) {
      coordsArr.push(coords[num]);
  }

  let originalUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordsArr[0]},${coordsArr[1]}&radius=10000&keyword=${toSearchFor}&key=${apiKey}`;
  let queryUrl = "https://cors-anywhere.herokuapp.com/" + originalUrl;

  $.ajax({
      url: queryUrl,
      method: 'GET',
      dataType: "json",
      headers: {
          "x-requested-with": "xhr"
      }
  }).then(function (response) {

      const dynamicSort=function(property) {
         var sortOrder = -1;
         if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
          }
          return function (a,b) {
              var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
              return result * sortOrder;
         }
      }

      let source = response.results;
      for (let i = 0; i < source.length; i++) {
          //create obj that holds an id of the place received by the api
          let place = {
              id: source[i].place_id,
              rating: source[i].rating,
          };
          //pushes place id into restuarantIDs
          restuarantIDs.push(place);
          restuarantIDs.sort(dynamicSort("rating"));

      }
      //renders place markers to the map
      renderMarks(map, restuarantIDs);
  });
}

const renderMarks = (map, idArr) => {
  //initialize info window
  let infowindow = new google.maps.InfoWindow();
  // initialize google place details service
  let service = new google.maps.places.PlacesService(map);
  for (let i = 0; i < 10; i++) {

      service.getDetails({
          //passes ids for each of the places in the array
          placeId: idArr[i].id
      }, function (place, status) {
          
          if (status === google.maps.places.PlacesServiceStatus.OK) {
              //create for a place
              let marker = new google.maps.Marker({
                  map: map,
                  animation: google.maps.Animation.DROP,
                  position: place.geometry.location
              });
              marker.addListener('click', toggleBounce);
              //if click on the marker, an info window will render above it showing specific detais about the place
              google.maps.event.addListener(marker, 'click', function () {
                  infowindow.setContent('<div id="fade-test"><strong>' + place.name + '</strong><br>' +
                      'Rating: ' + place.rating  + checkPhone() + 
                      getTravelUrl(address, place.formatted_address) + '<br></div>');
                  infowindow.open(map, this);
              });
              function toggleBounce() {
                  if (marker.getAnimation() !== null) {
                      marker.setAnimation(null);
                  } else {
                      marker.setAnimation(google.maps.Animation.BOUNCE);
                  }
              }
              //checks to see if the place has a phone
              function checkPhone() {
                  let phone = place.formatted_phone_number;

                  if (typeof phone !== typeof undefined && phone !== false) {
                      //if phone number is present, add phone to the content
                      return `<br> ${phone} <br>`;

                  } else {
                      //else just had a space
                      return `<br>`;
                  }

              }

/*///////////////////////////////////////////////////////////////////////////////////////
              function calcRoute() {
                console.log("calcRoute");
                start = directionsLatLng;
                end = "50 Rue Ste-Catherine O Montréal, QC H2X 1Z6";
                var request = {
                  origin:start,
                  destination:end,
                  travelMode: google.maps.TravelMode.TRANSIT
                };
                directionsService.route(request, function(result, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                  }
                });
              }
//////////////////////////////////////////////////////////////
*/
              //Function to check to retrieve opening hours for the day the applicaiton is running
              function checkHours() {
                  let isOpen = place.opening_hours.open_now;
                  let hours = place.opening_hours.weekday_text;
                  var dayOfTheWeekIndex = new Date().getDay();
                  let displayHours = "";
                  
                  if(isOpen === true)
                  {
                      --dayOfTheWeekIndex;
                      if (dayOfTheWeekIndex<0)
                      {
                          dayOfTheWeekIndex=6;
                      }
                      
                      displayHours = hours[dayOfTheWeekIndex];
                      
                      return `${displayHours}`;
                  }
                  else
                  {
                      return `Closed`;

                  }
              }

              //if the place rating is greater than or equal to 4.5, render the following content to the 'restaurant recommendations' div

              if (place.rating >= 4.5) {

                  $("#rest-info").append(
                      `
                      <div class="card my-3">
                      <h5 class="card-header">${place.name}</h5>
                      <div class="card-body">
                          <!-- restaurant info get populated here -->
                          <p class="card-text">${('<div id="fade-test">' +
                          'Rating: ' + place.rating + '<br>Hours Open: ' + checkHours() + checkPhone() +
                          '</div>' + getTravelUrl(address, place.formatted_address)) } </p>
                      </div>
                      <div class="card-footer">
                      <!-- restaurant url population -->
                      <a href="${place.website}" class="card-link" target="_blank">Check out menu on Website!</a>
                      </div>
                      </div>
                      `
                  );
              }
           }
      });
  }
  

}

//Function to get the Travel Direction to resturant with URL 
const getTravelUrl = (origin, destination) => {
  return `<a href="https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving" target="_blank">${destination}</a>`;
}
