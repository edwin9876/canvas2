var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);


  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = [position.coords.latitude, position.coords.longitude]
  lat = position.coords.latitude
  long = position.coords.longitude

  // console.log(lat, long)
  APIcall(lat, long)

}

let APIcall = function (lat, long) {
  // event.preventDefault();

  $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`).done(function (data) { //call the api, when done recieve the request and do this with data callback

    // console.log(data)



    let sunrise = data.results.sunrise
    let sunset = data.results.sunset

    //convert sunrise and sunset in 24hrs format
    function ConvertTime(t){
      // Get your time (using a hard-coded year for parsing purposes)
      var time = new Date("0001-01-01 " + t);
     
      // Output your formatted version (using your DateTime)
      var formatted = time.getHours() + ':' + ('0' + time.getMinutes()).slice(-2);
      formatted = formatted.split(':')

      // Return your formatted time
      console.log(formatted);
   }
ConvertTime(sunrise)
ConvertTime(sunset)



    //sunrise sunset time of the client location in GMT
    //put into array to compare hour

    // let sunrise = data.results.sunrise
    sunrise = sunrise.split(':')
    // let sunset = data.results.sunset
    sunset = sunset.split(':')
    // console.log(sunrise , sunset)

    let now = new Date() //sets a time right now
    now= now.getUTCHours();
    console.log(now);


    //night
    if (sunrise[0]> now || now > sunset[0]) {
      $('#night').removeClass('hidden')
      $('.logo').css('color', 'rgb(255, 255, 255, 0.6)')
      $('#location').addClass('hidden')
      $('.highlight').css('color', 'rgb(203, 255, 100, 0.6)')
    }


//sunrise and sunset time

else if(sunrise[0] == now || now === sunset[0]) {
  $('#sun').removeClass('hidden')
  $('.logo').css('color', 'rgb(255, 255, 255, 0.8)')
  $('#location').addClass('hidden')
  $('.highlight').css('color', 'red')
}


    //day
    else {
     
      $('#day').removeClass('hidden')
      $('.logo').css('color', 'orange')
      $('.highlight').css('color', 'rgb(243, 210, 101)')
      $('#location').addClass('hidden')
    }

    // $('#times').append(`<p>Sunrise is at: ${sunrise} </p><br/> <p>Sunset is at: ${sunset}</p>`)
  });
}