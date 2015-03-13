current_condition
  .weather
    Clear
    Overcast
    Partly Cloudy
    Mostly Cloudy
    Scattered Clouds
    Thunderstorm
    Rain
    Light Rain


FORECAST
  $('#search-form').on('submit', function(e){
    e.preventDefault();
    var query = $('#form-input').val();
    var country = query.split(',')[1];
    var city = query.split(',')[0];
    $.ajax({
      url: "http://api.wunderground.com/api/7a27f05a0037149f/forecast/q/" + country + '/' + city + ".json",
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
      },
      error: function(){
        console.log('search submission error')
      },
    });
  });