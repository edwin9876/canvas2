let sunrise = ["9", "53", "10 PM"]
let sunset = ["10", "48", "08 AM"]
let now = 
//sunset
// 21;
//daytime
// 22;
//night
11;
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

