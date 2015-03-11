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
        $('#search-results').empty();  
        $.each(data, function(i, cities) {
          $.each(cities, function(i, city) {
            var listItem = $('<li>')
            listItem.html(city.name);
            $('#search-results').append(listItem);
            console.log(city);
          });
        });
      },
      error: function(){
        console.log("Error!");
      },

    });
  });


});