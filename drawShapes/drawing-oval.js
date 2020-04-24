class DrawOval extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }
    onMd(coord, e) {

    }
    onDrag(coord, coord2, e) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
        drawOval(ctxD, ctxD, coord, coord2)
    }
    onMm(coord, e) {


    }
    onMu(coord, coord2, e) {
        drawOval(ctxR, ctxD, coord, coord2)
    }
    onMl(coord, e) {


    }
    onMe(coord, e) {


    }
}
function drawOval(ctx, ctxD, coord, coord2) {
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.beginPath();
    ctx.moveTo(coord[0], coord[1] + (coord2[1] - coord[1]) / 2)
    ctx.bezierCurveTo(coord[0], coord[1], coord2[0], coord[1], coord2[0], coord[1] + (coord2[1] - coord[1]) / 2);
    ctx.bezierCurveTo(coord2[0], coord2[1], coord[0], coord2[1], coord[0], coord[1] + (coord2[1] - coord[1]) / 2);
    ctx.closePath()
    ctx.stroke();
}