$("#linethickness2").on("click", function () {
    lineWidth(2)
  })
  $("#linethickness4").on("click", function () {
    lineWidth(4)
  })
  $("#linethickness8").on("click", function () {
    lineWidth(8)
  })
  $("#linethickness16").on("click", function () {
    lineWidth(16)
  })
  
function lineWidth(w){
    ctxD.lineWidth = w;
    ctxR.lineWidth = w;
}