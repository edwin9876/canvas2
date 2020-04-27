window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //detect the screen size of the machine(70% * 80%)- common.js
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.8;
})



//click 'colour'button, each sectioned toolbox come out
$('#colourBtn').on('click', function () {
    $('#Colours').removeClass('hidden')
    $('#Tools').addClass('hidden')
})

//click plus then colourwheel comes up

let colourchange = function () {
    // fav1
    $('#fav1').on('click', function () {
        $('#colourwheel').removeClass('hidden')
        $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav1').css("backgroundColor", bgc)
        $('#colourwheel').addClass('hidden')
        $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav1').on('click', colourchange)
//

let colourchange2 = function () {
    //fav2
    $('#fav2').on('click', function () {
        $('#colourwheel').removeClass('hidden')
        $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav2').css("backgroundColor", bgc)
        $('#colourwheel').addClass('hidden')
        $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav2').on('click', colourchange2)

//
let colourchange3 = function () {
    //fav3
    $('#fav3').on('click', function () {
        $('#colourwheel').removeClass('hidden')
        $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav3').css("backgroundColor", bgc)
        $('#colourwheel').addClass('hidden')
        $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav3').on('click', colourchange3)

let colourchange4 = function () {
    //fav4
    $('#fav4').on('click', function () {
        $('#colourwheel').removeClass('hidden')
        $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav4').css("backgroundColor", bgc)
        $('#colourwheel').addClass('hidden')
        $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav4').on('click', colourchange4)




//click button, each sectioned toolbox come out

$('#toolBtn').on('click', function () {
    $('#Tools').removeClass('hidden')
    $('#Colours').addClass('hidden')
})

