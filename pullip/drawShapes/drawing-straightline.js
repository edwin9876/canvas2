class DrawStraightLine extends PaintFunc {
    constructor(ctxR, ctxD) {
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

    onDrag(coord, coord2, e,rgb) {
        [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]
        drawStraightLine(ctxD, ctxD, coord, coord2)
        if (coord2[0] >= canvasR.width || coord2[1] >= canvasR.height) {
            drawStraightLine(ctxR, ctxD, coord, coord2,rgb)
        }
    }


    onMu(coord, coord2, e,rgb) {
        drawStraightLine(ctxR, ctxD, coord, coord2,rgb)
    }
}

function drawStraightLine(ctx, ctxD, coord, coord2,rgb) {
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.strokeStyle=rgb
    ctx.beginPath();
    ctx.moveTo(coord[0], coord[1])
    if (coord2[0] >= canvasR.width) {
        ctx.lineTo(canvasR.width, coord2[1])
    } else if (coord2[1] >= canvasR.height) {
        ctx.lineTo(coord2[0], canvasR.height);
    } else {
        ctx.lineTo(coord2[0], coord2[1]);
    }
    ctx.stroke();
}
