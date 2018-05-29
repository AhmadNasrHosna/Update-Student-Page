// $(document).ready(function()
{
  $('#toggle').click(function() {
    if($(this).css("margin-left") == "230px")
    {
        $('.grid-wrapper').animate({"margin-left": '-=230'});
        $('.side-menu').animate({"margin-left": '-=230'});
        $('#toggle').animate({"margin-left": '-=230'});
    }
    else
    {
        $('.grid-wrapper').animate({"margin-left": '+=230'});
        $('.side-menu').animate({"margin-left": '+=230'});
        $('#toggle').animate({"margin-left": '+=230'});
    }


  });
 });     

