    $(`.quantity`).on(`click`, `.btn`, function(e) {
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
    
    $input.val(value);
     });

     $(`.delete-btn`).on(`click`, function(e) {
        $(this).parent().parent().hide();
       });