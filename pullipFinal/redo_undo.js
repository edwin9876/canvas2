$("#undo").on("click", function () {
    cUndo();
  })
  
  $("#redo").on("click", function () {
    cRedo();
  })
   
  let cPushArray = new Array();
  let cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvasR.toDataURL());
}                                

function cUndo() {
    if (cStep > 0) {
        cStep--;
        let canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        ctxR.clearRect(0,0,canvasD.width,canvasD.height)
        canvasPic.onload = function () { ctxR.drawImage(canvasPic, 0, 0); }
    }
}                                

function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        let canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctxR.drawImage(canvasPic, 0, 0); }
    }
}                                