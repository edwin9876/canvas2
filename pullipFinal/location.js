var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);


  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
    document.getElementById("location").classList.remove
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

    console.log(data)


    
    let sunrise = data.results.sunrise
    let sunset = data.results.sunset
    let daylength = data.results.day_length

    //convert sunrise and sunset in 24hrs format
    function ConvertTime(t) {
      // Get your time (using a hard-coded year for parsing purposes)
      var time = new Date("0001-01-01 " + t);

      // Output your formatted version (using your DateTime)
      var formatted = time.getHours() + ':' + ('0' + time.getMinutes()).slice(-2);
      formatted = formatted.split(':')

      // Return your formatted time
    }
    ConvertTime(sunrise)
    ConvertTime(sunset)
    ConvertTime(daylength)
  
    //sunrise sunset time of the client location in GMT
    //put into array to compare hour

    // let sunrise = data.results.sunrise
    sunrise = sunrise.split(':')
    // let sunset = data.results.sunset
    sunset = sunset.split(':')
    // console.log(sunrise , sunset)
    daylength = daylength.split(':')

    let now = new Date() //sets a time right now
    now = now.getUTCHours();

    console.log(sunrise)
    console.log(sunset)
    console.log(daylength)
   
    console.log(now)


    let sunsetH = sunset[0]
    
    
    //making sunrise hours to 24hours format
    function convertT(array) {
        let H
    
        if (array[2].includes('PM')) {
            H = Number(array[0]) + 12
            console.log(H);
            //call timecheck function to access variable H
            timecheck(H)
        }
        else if (array[2].includes('AM')) {
            H = Number(array[0])
            console.log(H)
        }
        else { console.log(error) }
    
    }
    convertT(sunrise)
    // convertT(sunset)
    
    
    function timecheck(H) {
    
    
        //sunset, sunrise
        if (H == now || now == sunsetH) {
            $('#sun').removeClass('hidden')
            $('.logo').css('color', 'rgb(255, 255, 255, 0.8)')
            $('#location').addClass('hidden')
            $('.highlight').css('color', 'red')
        }
        //day
        else if(
            (H < now && now < 24)
        ||
            (now < sunsetH && now < 12)
        )
    
        {
            $('#day').removeClass('hidden')
            $('.logo').css('color', 'orange')
            $('.highlight').css('color', 'rgb(243, 210, 101)')
            $('#location').addClass('hidden')
        }
    
        //night
        else {
            $('#night').removeClass('hidden')
            $('.logo').css('color', 'rgb(255, 255, 255, 0.6)')
            $('#location').addClass('hidden')
            $('.highlight').css('color', 'rgb(203, 255, 100, 0.6)')
        }
    }
    

















    // $('#times').append(`<p>Sunrise is at: ${sunrise} </p><br/> <p>Sunset is at: ${sunset}</p>`)
  });
}