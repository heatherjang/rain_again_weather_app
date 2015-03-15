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
            listItem.html(city.name);
            $('#search-results').append(listItem);
          });
        });
      },
      error: function(){
        console.log("Form error!");
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
    e.stopPropagation();
    var query = $('#form-input').val();
    var country = query.split(',')[1];
    var city = query.split(',')[0];
    $.ajax({
      url: "http://api.wunderground.com/api/7a27f05a0037149f/conditions/q/" + country + '/' + city + ".json",
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        $('#results').empty();
        // $('#current').empty();
        if (data.current_observation){
          var current_obs = data.current_observation;
          var display_loc = current_obs.display_location;
          var city = display_loc.city;
          console.log(current_obs);
          var condition = current_obs.weather;
          $('#current').removeClass('hidden');
          $('#city').html(city);
          $('#condition').html(condition);
          // "<h2>In <span id='city'>"+ city +"</span>, it's <span id='condition'>"+ condition +"</span>!</h2>");

          // $('#condition').html(condition);

          console.log(condition)
        } else {
          console.log('no data found for that city')
        }
      },
      error: function(){
        console.log('search submission error')
      },
    });
  });
  
  $('html').addClass('rain')
  // $('#condition').html('sometext');

});