$("#addcart").click(function(event){
    event.preventDefault()
    const quantity = $(`.buy1`).val()
    const name = `cucumber`
    const price = 10
    // const name = $(`.product_name`).text()
    // console.log(name,quantity)
    localStorage.setItem(`product1`,JSON.stringify([name,price, quantity]))
    alert(`${name} added to your cart`);
})
