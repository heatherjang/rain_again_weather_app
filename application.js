$(function() {

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var query = $("#input-city").val();
    $.ajax({
      url: "http://autocomplete.wunderground.com/aq?query=" + query + "&cb=jsoncallback",
      type: "GET",
      dataType: "jsonp",
      jsonpCallback: "jsoncallback",
      success: function(data){
        console.log(data)
      },
      error: function(){
        console.log("Error!");
      },

    });
  });


});