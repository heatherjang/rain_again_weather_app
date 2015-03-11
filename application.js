$(function() {

  $("#submit").on("click", function (event) {
    event.preventDefault();
    var query = $("#input-city").val();
    console.log(query);
  })


});