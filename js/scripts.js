//FRONT END
$(document).ready(function() {
  var flavors = ["chocolate", "vanilla", "cherry", "coconut", "strawberry"];
  flavors.forEach(function(flavor){
    $(".flavors").append("<li>" + flavor + "</li>");
  });
});
