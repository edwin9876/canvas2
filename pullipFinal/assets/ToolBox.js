window.addEventListener("load", () => {
   

    //detect the screen size of the machine(70% * 80%)- common.js
       canvasR.width = window.innerWidth*0.7 ;
       canvasR.height = window.innerHeight*0.8;
       canvasD.width = window.innerWidth*0.7 ;
       canvasD.height = window.innerHeight*0.8;
   })


//check the time and change background(5am-7pm/7pm-5am)


//click plus then colourwheel comes up

let colourchange = function () {
    // fav1
    $('#fav1').on('dblclick', function () {
        $('#colourwheel').removeClass('hidden')
        $("#colourwheel").mouseleave(function(){
            $('#colourwheel').addClass('hidden')})
        // $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav1').css("backgroundColor", bgc)
        $('#fav1 span').addClass('hidden')
        $('#colourwheel').addClass('hidden')
        // $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav1').on('click', colourchange)
//

let colourchange2 = function () {
    //fav2
    $('#fav2').on('dblclick', function () {
        $('#colourwheel').removeClass('hidden')
        $("#colourwheel").mouseleave(function(){
            $('#colourwheel').addClass('hidden')})
        // $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav2').css("backgroundColor", bgc)
        $('#fav2 span').addClass('hidden')
        $('#colourwheel').addClass('hidden')
        // $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav2').on('click', colourchange2)

//
let colourchange3 = function () {
    //fav3
    $('#fav3').on('dblclick', function () {
        $('#colourwheel').removeClass('hidden')
        $("#colourwheel").mouseleave(function(){
            $('#colourwheel').addClass('hidden')})
        // $('.plus').addClass('hidden')
    })
    //click colour, add to fav colour
    $('.indicolour').on('click', function () {
        let bgc = $(this).css("backgroundColor")
        $('#fav3').css("backgroundColor", bgc)
        $('#fav3 span').addClass('hidden')
        $('#colourwheel').addClass('hidden')
        // $('.plus').removeClass('hidden')
        $('.indicolour').unbind();
    })
}

$('#fav3').on('click', colourchange3)



// brush fills up shapes to black

$(function(){
    let count = 0
    $('#brush').on('click',function(){
        if(count%2 == 0){
            $('.shapes').removeClass('hidden')
            $('.wshapes').addClass('hidden')
            count++
        }
        else{$('.wshapes').removeClass('hidden')
             $('.shapes').addClass('hidden')
             count++}
    })
})