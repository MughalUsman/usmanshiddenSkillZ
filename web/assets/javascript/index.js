$("#startButton").click(function(){
    $("#wrapper").slideDown("slow");
    $(".homebutton").hide();
    $("h1").fadeOut();
    $("form").fadeIn(1500);
    aanmakenVanGrid();
    horizontaleLijnen();
})

$(document).ready(function(){
      $("h1").animate({top:"25%",opacity:1},1000);

})

    
  
var aanmakenVanGrid=function(){
    aantalVakjes=81;
    var aantalRij=9;
   var horizontaleLijnen=1;
    for(var i=1;i<=aantalVakjes;i++){
         var input = document.createElement("input");
         input.type="text";   
         $(input).attr('maxlength','1');
         $(input).attr('onkeypress','return isNumber(event)');
         $("form").append(input);
         if((i%3)==0){
             $("input:nth-of-type("+i+")").css("border-right-color","black");
             
         }
         if((i%9)==0){
             var nieuweLijn=document.createElement("br");
             $("form").append(nieuweLijn);
             horizontaleLijnen++;
             console.log(horizontaleLijnen);
         }
      
   
         
         
         
    }
}

var  horizontaleLijnen=function(){
    
    for(var eerstelijn=19;eerstelijn<=27;eerstelijn++){
       $("input:nth-of-type("+eerstelijn+")").css("border-bottom-color","black");

    }
   for(var tweedeLijn=46;tweedeLijn<=54;tweedeLijn++){
       $("input:nth-of-type("+tweedeLijn+")").css("border-bottom-color","black");

    }
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}