class DrawRect extends PaintFunc{
    constructor(ctxR,ctxD){
        super();
        this.ctxR = ctxR;
        this.ctxD = ctxD;
    }

   onDrag(coord,coord2,e) {
    [coord2[0], coord2[1]] = [e.offsetX, e.offsetY]

    drawRec(ctxD,ctxD,coord,coord2)
    }

   onMu(coord,coord2,e) {
    drawRec(ctxR,ctxD,coord,coord2)
    }
 
}

function drawRec(ctx,ctxD,coord,coord2){
    ctxD.clearRect(0, 0, canvasD.width, canvasD.height)
    ctx.beginPath();
    ctx.rect(coord[0], coord[1], coord2[0] - coord[0], coord2[1] - coord[1]);
    ctx.stroke();

}