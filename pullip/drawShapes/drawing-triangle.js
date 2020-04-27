$(".section2 .row2 .icon:eq(0)").on("click", function () {
    currentFunction = new DrawTriangle(ctxD, ctxR);
  })
class DrawTriangle extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }
 
    onDrag(coord, coord2, e,rgb) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
        drawTriangle(ctxD, ctxD, coord, coord2,rgb)
    }

    onMu(coord,coord2, e,rgb) {
        drawTriangle(ctxR, ctxD, coord, coord2,rgb)

    }



}

function drawTriangle(ctx, ctxD, coord, coord2,rgb) {
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.strokeStyle=rgb
    ctx.beginPath();
    ctx.moveTo(coord[0],coord[1]);
    ctx.lineTo(coord2[0],coord2[1]);
    ctx.lineTo((coord[0]-(coord2[0]-coord[0])),coord2[1]);
    ctx.lineTo(coord[0],coord[1]);
    ctx.stroke();
    if (filling) {
        ctx.fill();
      }
}

