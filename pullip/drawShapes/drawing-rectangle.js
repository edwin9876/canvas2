$(".section2 .row1 .icon:eq(1)").on("click", function () {
    currentFunction = new DrawRect(ctxD, ctxR);
  })
  class DrawRect extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

   onDrag(coord,coord2,e,rgb) {
    [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]

    drawRec(ctxD,ctxD,coord,coord2,rgb)
    }

   onMu(coord,coord2,e,rgb) {
    drawRec(ctxR,ctxD,coord,coord2,rgb)

    }
 
}

function drawRec(ctx,ctxD,coord,coord2,rgb){
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.strokeStyle=rgb
    ctx.beginPath();
    ctx.rect(coord[0], coord[1], coord2[0] - coord[0], coord2[1] - coord[1]);
    ctx.stroke();
    if (filling) {
        ctx.fill();
      }

}