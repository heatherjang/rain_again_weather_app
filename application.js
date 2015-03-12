$(function() {

  $("#form-input").on("keypress", function() {
    var query = $("#form-input").val();
    $.ajax({
      url: "http://autocomplete.wunderground.com/aq?query=" + query + "&cb=jsoncallback",
      type: "GET",
      dataType: "jsonp",
      jsonpCallback: "jsoncallback",
      success: function(data){
        $('#search-results').empty();  
        $.each(data, function(i, cities) {
          $.each(cities, function(i, city) {
            var listItem = $('<li>').addClass('list-item');
            listItem.html(city['name']);
            $('#search-results').append(listItem);
          });
        });
      },
      error: function(){
        console.log("Error!");
      },
    });

  });

  $('#form-input').on('keydown', function(e) {
    var input = $('#form-input');
    var keyCode = e.keyCode || e.which; 
    if ((keyCode === 9) && (input.val().length > 0)) { 
      e.preventDefault();
      var firstResult = $('li').first().text();
      input.val(firstResult);
    } 
  });

  $('#search-form').on('submit', function(e){
    e.preventDefault();
    var query = $('#form-input').val();
    var country = query.split(',')[1];
    var city = query.split(',')[0];
    console.log(country);
    console.log(city);
    $.ajax({
      url: "http://api.wunderground.com/api/7a27f05a0037149f/conditions/q/" + country + '/' + city + ".json",
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
      },
      error: function(){
        console.log('Error!')
      },
    });


  });

});