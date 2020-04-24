class DrawTriangle extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }
 
    onDrag(coord, coord2, e) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
        drawTriangle(ctxD, ctxD, coord, coord2)
    }

    onMu(coord,coord2, e) {
        drawTriangle(ctxR, ctxD, coord, coord2)

    }



}

function drawTriangle(ctx, ctxD, coord, coord2) {
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.beginPath();
    ctx.moveTo(coord[0],coord[1]);
    ctx.lineTo(coord2[0],coord2[1]);
    ctx.lineTo((coord[0]-(coord2[0]-coord[0])),coord2[1]);
    ctx.lineTo(coord[0],coord[1]);
    ctx.stroke();}