let canvasR = document.getElementById("canvasR");
let ctxR = canvasR.getContext('2d');
let canvasD = document.getElementById("canvasD");
let ctxD = canvasD.getContext('2d');

let dragging = false;
let origX, origY, mX, mY
let cPushArray = new Array();
let cStep = -1;
let filling
let pixelStack, canvasRData, origPos, fillColorR, fillColorG, fillColorB, startR, startG, startB, rgb

ctxD.lineJoin = 'round';
ctxD.lineCap = 'round';
ctxR.lineJoin = 'round';
ctxR.lineCap = 'round';

$("#canvasD").mousedown(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  dragging = true;
  currentFunction.onMd([origX, origY]);


})

$("#canvasD").mousemove(function (e) {
  if (dragging) {
    currentFunction.onDrag([origX, origY], [mX, mY], e);
    if (filling === true) {
      ctxD.fill();
    }
  }
  currentFunction.onMm([mX, mY], e);

})
$("#canvasD").mouseleave(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  [mX, mY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMl([origX, origY], [mX, mY], e);
})
$("#canvasD").mouseup(function (e) {
  [mX, mY] = [e.offsetX, e.offsetY];
  dragging = false;
  currentFunction.onMu([origX, origY], [mX, mY], e);
  if (filling === true) {
    ctxR.fill();
  }
  cPush();
})
$("#canvasD").mouseenter(function (e) {
  [origX, origY] = [e.offsetX, e.offsetY];
  currentFunction.onMe([mX, mY], e);
})

$("#undo").on("click", function () {
  cUndo();
})

$("#redo").on("click", function () {
  cRedo();
})

$(".linethickness2").on("click", function () {
  lineWidth(2)
})
$(".linethickness4").on("click", function () {
  lineWidth(4)
})
$(".linethickness8").on("click", function () {
  lineWidth(8)
})
$(".linethickness16").on("click", function () {
  lineWidth(16)
})
$(".section1 .row2 .icon:eq(0)").on("click", function () {
  (filling!==true)?filling=true:  filling = false;
  }
)

$(".section1 .row1 .icon:eq(0)").on("click", function () {
  currentFunction = new FreeDraw(ctxR, ctxD);

})
$(".section1 .row2 .icon:eq(1)").on("click", function () {
  currentFunction = new FillBucket(ctxD, ctxR);
})
$(".section2 .row1 .icon:eq(0)").on("click", function () {
  currentFunction = new DrawOval(ctxD, ctxR);

})
$(".section2 .row1 .icon:eq(1)").on("click", function () {
  currentFunction = new DrawRect(ctxD, ctxR);
})
$(".section2 .row2 .icon:eq(0)").on("click", function () {
  currentFunction = new DrawTriangle(ctxD, ctxR);
})
$(".section2 .row2 .icon:eq(1)").on("click", function () {
  currentFunction = new DrawDiamond(ctxD, ctxR);
})
$(".section2 .row3 .icon:eq(0)").on("click", function () {
  currentFunction = new DrawPentagon(ctxD, ctxR);
})
$(".section2 .row3 .icon:eq(1)").on("click", function () {

})

$(".white").on("click", function () {
  rgb = ($(".white").css("backgroundColor"))
  colourBall(rgb);
})
$(".yellow").on("click", function () {
  rgb = ($(".yellow").css("backgroundColor"))
  colourBall(rgb);
})
$(".black").on("click", function () {
  rgb = ($(".black").css("backgroundColor"))
  colourBall(rgb);
})
$(".red").on("click", function () {
  rgb = ($(".red").css("backgroundColor"))
  colourBall(rgb);
})
$(".green").on("click", function () {
  rgb = ($(".green").css("backgroundColor"))
  colourBall(rgb);
})
$(".blue").on("click", function () {
  rgb = ($(".blue").css("backgroundColor"))
  colourBall(rgb);
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
