$("#pen").on("click", function () {
    currentFunction = new InkPen(ctxR, ctxD);
  })


class InkPen extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

    onDrag(coord, coord2, e) {
        inkPen(ctxR,coord,e)
    }

}
function inkPen(ctx,coord,e) {
    ctx.beginPath()

    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgb(0, 0, 0)';
    
    ctx.moveTo(coord[0], coord[1])
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [origX, origY] = [e.offsetX, e.offsetY];
}

