$(".white").on("click", function () {
    rgb = ($(".white").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".yellow").on("click", function () {
    rgb = ($(".yellow").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".blue").on("click", function () {
    rgb = ($(".blue").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".red").on("click", function () {
    rgb = ($(".red").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".green").on("click", function () {
    rgb = ($(".green").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".plus:eq(0)").on("click", function () {
    rgb = ($(".plus:eq(0)").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".plus:eq(1)").on("click", function () {
    rgb = ($(".plus:eq(1)").css("backgroundColor"))
    colourBallFill(rgb);
  })
  $(".plus:eq(2)").on("click", function () {
    rgb = ($(".plus:eq(2)").css("backgroundColor"))
    colourBallFill(rgb);
  })

function colourBallStroke (rgb){
    ctxD.strokeStyle = rgb
    ctxR.strokeStyle = rgb
}

function colourBallFill (rgb){
    ctxD.fillStyle = rgb
    ctxR.fillStyle = rgb
}





