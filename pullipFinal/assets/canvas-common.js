let canvasR = document.getElementById("canvasR");
let ctxR = canvasR.getContext('2d');
let canvasD = document.getElementById("canvasD");
let ctxD = canvasD.getContext('2d');

let dragging = false;
let origX, origY,origX2, origY2, mX, mY
let rgb = "rgb(10,10,10)"
let filling
let pixelStack, canvasRData, origPos, fillColorR, fillColorG, fillColorB, startR, startG, startB
let imgData = new Array (1);


// ctxD.lineJoin = 'round';
// ctxD.lineCap = 'round';
// ctxR.lineJoin = 'round';
// ctxR.lineCap = 'round';


$("#canvasD").mousedown(function (e) {
  
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = true;
  currentFunction.onMd([origX, origY],rgb.match(/\d+/g),);
  


})

$("#canvasD").mousemove(function (e) {
  
  if (dragging) {
    currentFunction.onDrag([origX, origY], [mX, mY], e,rgb);
  }
  // currentFunction.onMm([mX, mY], e);

})
$("#canvasD").mouseleave(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  [mX, mY] = [e.offsetX, e.offsetY];
  dragging = false;
  // currentFunction.onMl([origX, origY], [mX, mY], e)
  
})
$("#canvasD").mouseup(function (e) {
  [mX, mY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMu([origX, origY], [mX, mY], e,rgb);
  
  cPush();
})
$("#canvasD").mouseenter(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  // currentFunction.onMe([mX, mY], e);
})

class PaintFunc {
  contructor() { }
  onMd() { }
  onDrag() { }
  onMm() { }
  onMu() { }
  onMl() { }
  onMe() { }
}


$(".section2 .row1 .icon:eq(-2)").on("click", function () {
  (filling!==true)?filling=true:  filling = false;
  }
)

// $("#linethickness2").on("click", function () {
//   lineWidth(2)
// })
// $("#linethickness4").on("click", function () {
//   lineWidth(4)
// })
// $("#linethickness8").on("click", function () {
//   lineWidth(8)
// })
// $("#linethickness16").on("click", function () {
//   lineWidth(16)
// })

// $(".section1 .row1 .icon:eq(0)").on("click", function () {
//   currentFunction = new FreeDraw(ctxR, ctxD);

// })
// $(".section1 .row2 .icon:eq(1)").on("click", function () {
//   currentFunction = new FillBucket(ctxD, ctxR);
// })
// $(".section2 .row1 .icon:eq(0)").on("click", function () {
//   currentFunction = new DrawOval(ctxD, ctxR);

// })
// $(".section2 .row1 .icon:eq(1)").on("click", function () {
//   currentFunction = new DrawRect(ctxD, ctxR);
// })
// $(".section2 .row2 .icon:eq(0)").on("click", function () {
//   currentFunction = new DrawTriangle(ctxD, ctxR);
// })
// $(".section2 .row2 .icon:eq(1)").on("click", function () {
//   currentFunction = new DrawDiamond(ctxD, ctxR);
// })
// $(".section2 .row3 .icon:eq(0)").on("click", function () {
//   currentFunction = new DrawPentagon(ctxD, ctxR);
// })
// $(".section2 .row3 .icon:eq(1)").on("click", function () {

// })


