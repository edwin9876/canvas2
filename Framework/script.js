window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //detect the screen size of the machine(70% * 80%)- common.js
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.8;
})

//textbox


dragElement(document.getElementById("inputbox"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "inputbox")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "inputbox").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}











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
    })
}

$('.plus').on('click', colourchange)


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
    })
}

$('.plus').on('click', colourchange2)


//click button, each sectioned toolbox come out

$('#toolBtn').on('click', function () {
    $('#Tools').removeClass('hidden')
    $('#Colours').addClass('hidden')
})


//click 'colour'button, each sectioned toolbox come out
$('#colourBtn').on('click', function () {
    $('#Colours').removeClass('hidden')
    $('#Tools').addClass('hidden')
})